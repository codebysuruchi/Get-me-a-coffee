"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";


const Navbar = () => {
  const { data: session } = useSession();
  const [showdropdown, setshowdropdown] = useState(false);

  return (
    <nav className="bg-slate-800 text-white flex justify-between items-center px-4 md:h-24 flex-col md:flex-row">
      <div ><Link href={"/"} className="logo font-bold text-lg cursor-pointer"><span className="text-xl md:text-base my-4 md:my-0">GetMeaCoffee 🧋</span></Link></div>
      {/* <ul className="flex justify_between gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul> */}

      <div className="relative flex flex-col md:block gap-4">
        <>
          {session && (
            <>
              <button
                onClick={() => {
                  setshowdropdown(!showdropdown);
                }}
                id="dropdownHoverButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="hover"
                className="text-white   mx-3 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l  focus:ring-purple-200 dark:focus:ring-purple-800 me-2 mb-2 cursor-pointer"
                type="button"
              >
                Welcome {session.user.email}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownHover"
                className={`z-10 ${
                  showdropdown ? " " : "hidden"
                } bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute left-[125px]`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownHoverButton"
                >
                  <li>
                    <Link 
                      href={"/dashboard"} 
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${session.user.name}`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Your Page
                    </Link>
                  </li>
                  
                  <li>
                    <Link onClick={() => {
                signOut();
              }}
                      href={"/"}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
          
          {session && (
            <button
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </button>
          )}
          {!session && (
            <Link href="/login">
              <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                Login
              </button>
            </Link>
          )}
        </>
      </div>
    </nav>
  );
};

export default Navbar;
