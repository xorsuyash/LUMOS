import React, { FormEvent } from 'react';

interface SignUpFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    collegeId: string;
    branch: string;
    sem: string;
  };
  onChange: (key: string, value: string) => void;
  onFormSubmit: () => void;
}

const branchOptions = [
  { value: 'Btech', label: 'B.Tech' },
  { value: 'Bpharma', label: 'B.Pharma' },
  { value: 'MCA', label: 'MCA' },
  { value: 'MBA', label: 'MBA' },
];

const SignUpForm: React.FC<SignUpFormProps> = ({ formData, onChange, onFormSubmit }) => {
  const {
    firstName,
    lastName,
    email,
    password,
    collegeId,
    branch,
    sem,
  } = formData;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onFormSubmit();
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div className="flex space-x-2">
          <div>
            <label htmlFor="first-name" className="sr-only">
              First Name
            </label>
            <input
              id="first-name"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              value={firstName}
              onChange={(event) => onChange('firstName', event.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="First Name"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="sr-only">
              Last Name
            </label>
            <input
              id="last-name"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              value={lastName}
              onChange={(event) => onChange('lastName', event.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => onChange('email', event.target.value)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => onChange('password', event.target.value)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div>
        <div>
          <label htmlFor="college-id" className="sr-only">
            College ID
          </label>
          <input
            id="college-id"
            name="collegeId"
            type="text"
            autoComplete="off"
            required
            value={collegeId}
            onChange={(event) => onChange('collegeId', event.target.value)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="College ID"
          />
        </div>
        <div className='flex space-x-2'>
          <div>
            <label htmlFor="branch" className="sr-only">
              Branch
            </label>
            <div className="relative">
              <select
                id="branch"
                name="branch"
                required
                value={branch}
                onChange={(event) => onChange('branch', event.target.value)}
                className="appearance-none rounded-b-md mt-[0.3px] rounded-none relative block w-full px-3 py-2 border bg-white border-gray-300 placeholder-gray-500 text-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pr-10"
              >
                {branchOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 z-50 flex items-center px-2 pointer-events-none">
                <svg className="h-4 w-4 fill-current text-gray-500" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="sem" className="sr-only">
              Semester
            </label>
            <input
              id="sem"
              name="sem"
              type="text"
              autoComplete="off"
              required
              value={sem}
              onChange={(event) => onChange('sem', event.target.value)}
              className="appearance-none rounded-none relative mt-[0.3px] block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-b-md"
              placeholder="Semester"
            />
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-6a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm0-3a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          Sign up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
