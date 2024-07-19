import React from "react";

const NewJobDetails = ({ jobData }) => {
  return (
    <div className="w-[90%] lg:w-[100%] bg-white border rounded-md h-screen overflow-y-auto">
      <div className=" ">
        <div className=" px-4 py-3 text-gray-800 text-2xl font-semibold shadow-md">
          Job details
        </div>
      </div>
      <div className="w-[95%] mx-auto flex flex-col">
        {/* <div className="w-[90%] h-[12rem] bg-pink-100 border my-4">
              
            </div> */}

        <div
          className="w-[90%] ProseMirror whitespace-pre-line "
          dangerouslySetInnerHTML={{ __html: jobData?.Description }}
        />
      </div>
    </div>
  );
};

export default NewJobDetails;
