import React from 'react';
import logo from '../assets/images/taskbear.svg';

const Navbar = () => {
  return (
    <>
      <nav class="bg-white border-gray-200 dark:bg-white">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} class="h-6" alt="Taskbear" />
            {/* <span class="self-center text-2xl whitespace-nowrap dark:text-black font-bold">
              taskbear.
            </span> */}
          </a>
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <button className="bg-green-700 px-5 py-2 rounded-sm text-white font-medium">
              Post a job
            </button>
          </div>
        </div>
      </nav>
      <nav class="bg-gray-50 dark:bg-[#404145]">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-2 text-sm overflow-x-auto">
              <li>
                <a
                  href="/"
                  class="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Ads Center
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  How it works
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
