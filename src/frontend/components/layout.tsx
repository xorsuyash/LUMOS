import React, { ReactNode } from 'react';

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-teal-500 to-blue-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 border py-6 px-10 rounded-md bg-gray-50 shadow-lg sm:scale-125 scale-100">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;