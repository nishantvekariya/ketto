import React from 'react'

const CreatePostBox = ({setIsVisible}) => {
    return (
      <div className="max-w-xl mx-auto mb-4 px-4 bg-white rounded-lg">
        
        <div className="flex space-x-4 pt-4 text-sm">
          <button className="flex-1 flex items-center h-8 focus:outline-none justify-center space-x-2 rounded-md">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 30 30" stroke="#48bb78">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <div>
              <button className="font-semibold text-green-500 mb-2" onClick={(e) => setIsVisible(true)}>Post</button>
            </div>
          </button>
          |
          <button className="flex-1 flex items-center h-8 focus:outline-none justify-center space-x-2 rounded-md">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 30 30" stroke="#48bb78">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-green-500 mt-2">Ask Question</p>
            </div>
          </button>
          
          |
          <button className="flex-1 flex items-center h-8 focus:outline-none justify-center space-x-2 rounded-md">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 30 30" stroke="#48bb78">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-green-500 mt-2">Poll</p>
            </div>
          </button>
          |
          <button className="flex-1 flex items-center h-8 focus:outline-none justify-center space-x-2 rounded-md">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 30 30" stroke="#48bb78">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-green-500 mt-2">Event</p>
            </div>
          </button>
        </div>
        <div className="flex items-center space-x-2 border-b pb-3 mb-2"> 
          <button className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-none flex-grow bg-gray-100 text-gray-500 text-left pl-2 h-10 pl-5">
            What's on your mind?
          </button>
        </div>
      </div>
    )
}

export default CreatePostBox
