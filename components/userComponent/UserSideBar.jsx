import React from 'react'

const UserSideBar = () => {
  return (
    <div className="w-1/5 bg-white p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-600">HuntJobs</h1>
      </div>
      <nav>
        <ul>
          <li className="mb-4"><a href="#" className="text-gray-700">Home</a></li>
          <li className="mb-4"><a href="#" className="text-gray-700">Find Work</a></li>
          <li className="mb-4"><a href="#" className="text-gray-700">My Jobs</a></li>
          <li className="mb-4"><a href="#" className="text-gray-700">My Activity</a></li>
          <li className="mb-4"><a href="#" className="text-gray-700">Messages</a></li>
          <li className="mb-4"><a href="#" className="text-gray-700">Reports</a></li>
        </ul>
      </nav>
      {/* <div className="mt-8">
        <div className="flex items-center">
          <img src="/avatar.png" alt="User" className="w-10 h-10 rounded-full mr-4" />
          <span>Alexis Wolen</span>
        </div>
      </div> */}
    </div>
  )
}

export default UserSideBar