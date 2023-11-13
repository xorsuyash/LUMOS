FROM python:3.11.2

WORKDIR /app
COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn","lumos.main:app", "--host","0.0.0.0", "--port","8000"]