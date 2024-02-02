import Link from "next/link";

export const Navbar = () => (
  <nav className="bg-gradient-to-r from-blue-400 via-teal-500 to-blue-500 p-4">
    <div className="flex justify-between items-center">
      <Link href={'/'} className="flex items-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
        <span className="font-bold text-3xl">Lumos</span>
      </Link>
      <div className="flex items-center">
        <Link href="/SignIn">
          <p className="text-white mr-4 hover:text-gray-300 cursor-pointer transition duration-300 ease-in-out">
            Sign In
          </p>
        </Link>
        <Link href="/SignUp">
          <p className="text-white bg-teal-500 px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer transition duration-300 ease-in-out">
            Sign Up
          </p>
        </Link>
      </div>
    </div>
  </nav>
);
