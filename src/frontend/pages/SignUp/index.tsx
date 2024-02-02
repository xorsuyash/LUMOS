'use client';
import React, { useState } from 'react';
import AuthLayout from '@/components/layout';
import Header from '@/components/Header';
import SignUpForm from '@/components/SignUpForm';

const branchOptions = [
  { value: 'Btech', label: 'B.Tech' },
  { value: 'Bpharma', label: 'B.Pharma' },
  { value: 'MCA', label: 'MCA' },
  { value: 'MBA', label: 'MBA' },
];

const SignUpPage: React.FC = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    collegeId: '',
    branch: branchOptions[0].value,
    sem: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSignUp = () => {
    // Handle sign-up logic here 
  };

  const handleFormChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div>
      <AuthLayout >
        <Header title="Sign up for an account" subtitle="Already have an account?" link="SignIn" name="Sign in here" />
        <SignUpForm formData={formData} onChange={handleFormChange} onFormSubmit={handleSignUp} />
      </AuthLayout>
    </div>
  );
};

export default SignUpPage;
