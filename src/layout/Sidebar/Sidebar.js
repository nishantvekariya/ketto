import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <React.Fragment>
      <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
        <div className="max-w-sm bg-white border-1 border-gray-300 p-1 tracking-wide">
            <div id="header" className="flex items-center mb-1"> 
              <img alt="avatar" className="w-25 ml-2 rounded-full border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
              <div id="header-text" className="leading-5 ml-6 sm">
                  <h4 className="text-xl font-semibold text-gray-500">Patient</h4>
                  <h5 className="font-bold text-xs text-green-500">DIAGNOSED RECENTLY</h5>
              </div>
            </div>
        </div>
        <div className="grid grid-cols-1 divide-y divide-gray-500 mt-4 mb-4">
          <div></div>
          <div></div>
        </div>
        <div className="sticky top-0 bg-transparent rounded-xl w-full">
          <ul className="max-h-full p-2 space-y-1 overflow-y-auto divide-blue-300 neumorphism-shadow">
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:ring focus:outline-none"
              >
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </span>
                <span className="ml-2 font-medium no-underline">My Bookmarks</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:ring focus:outline-none"
              >
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </span>
                <span className="ml-2 font-medium no-underline">News & Articles</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:ring focus:outline-none"
              >
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="ml-2 font-medium no-underline">FAQs</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:ring focus:outline-none"
              >
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="ml-2 font-medium no-underline">Events</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default Sidebar;
