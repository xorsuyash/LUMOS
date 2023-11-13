from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
from passlib.context import CryptContext
from pydantic import BaseModel
from typing import Annotated

from jwt import PyJWT, encode, decode
import os

from .database import engine, SessionLocal
from .models import User, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()


class UserBase(BaseModel):
    first_name: str
    last_name: str
    email: str
    password: str
    college_id: str


class UserCreate(UserBase):
    pass


# Security configuration
SECRET_KEY = os.environ.get("SECRET_KEY")  
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Password hashing
password_hashing = CryptContext(schemes=["bcrypt"], deprecated="auto")


# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Dependency to get the current user from the token
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
db_dependency = Annotated[Session, Depends(get_db)]


# Function to verify password
def verify_password(plain_password, hashed_password):
    return password_hashing.verify(plain_password, hashed_password)


# Function to create hashed password
def get_password_hash(password):
    return password_hashing.hash(password)


# Function to create access token
def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


# Route for user registration
@app.post("/register")
def register_user(user: UserCreate, db: db_dependency):
    # Hash the password before storing it
    user.password = get_password_hash(user.password)

    # Create an instance of the User model
    db_user = User(**user.dict())

    # Save the user to the database
    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user


# Route for user login
@app.post("/login", response_model=dict)
async def login_for_access_token(email: str, password: str, db: db_dependency):
    user = db.query(User).filter(User.email == email).first()
    if not user or not verify_password(password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # Create access token
    access_token = create_access_token(data={"sub": user.email})

    return {"access_token": access_token, "token_type": "bearer"}


# Route to get user information
@app.get("/users/me")
async def get_current_user(db: db_dependency, token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception

    user = db.query(User).filter(User.email == email).first()
    if user is None:
        raise credentials_exception

    return user
