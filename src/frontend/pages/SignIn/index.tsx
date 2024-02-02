'use client'
import Header from '@/components/Header';
import AuthLayout from '@/components/layout';
import SignInForm from '@/components/SignInForm';

const SignIn: React.FC = () => {
  const handleSignIn = (libId: string, password: string) => {
    // Handle login logic here with libId and password
  };

  return (
    <div>
      <AuthLayout>
        <Header title="Sign in to your account" subtitle="Don't have an account?" link="SignUp" name="Sign up here" />
        <SignInForm onFormSubmit={() => handleSignIn} />
      </AuthLayout>
    </div>
  );
};

export default SignIn;
