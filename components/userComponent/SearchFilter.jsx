import React from 'react';

const SearchFilter = () => {
  return (
    <div className="flex flex-col w-4/5 p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <input 
          type="text" 
          placeholder="Search by Category, Company, or Job" 
          className="border p-2 w-full rounded-md"
        />
        <button className="ml-4 p-2 bg-blue-600 text-white rounded-md">Search</button>
      </div>
      <div className="flex space-x-4 mb-4">
        <button className="p-2 bg-blue-200 rounded-md">UX Designer</button>
        <button className="p-2 bg-gray-200 rounded-md">UI Designer</button>
        <button className="p-2 bg-gray-200 rounded-md">Product Designer</button>
        <button className="p-2 bg-gray-200 rounded-md">Clear filters</button>
      </div>
    </div>
  );
};

export default SearchFilter;
