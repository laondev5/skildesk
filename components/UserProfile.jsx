import Image from "next/image";
import React from "react";

const UserProfile = ({ userData }) => {
  console.log(userData);
  return (
    <div className="w-full bg-gray-50 flex flex-col lg:flex-row justify-between ">
      <div className="w-[90%] lg:w-[35%] border rounded-sm">
        <div className="w-[90%] mx-auto flex flex-col">
          <div className="w-[8rem] h-[8rem] rounded-full border mb-4 ">
            <Image
              src={userData?.image}
              alt="job logo"
              width={90}
              height={90}
              className="w-[8rem] h-[8rem] rounded-full"
            />
          </div>
          <div className="my-2 border border-b-stone-50">
            <p className="text-gray-500 text-sm font-semibold my-1">
              {userData?.name}
            </p>
            <p className="text-gray-500 text-sm font-semibold my-1">
              {userData?.email}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] lg:w-[60%] border rounded-sm"></div>
    </div>
  );
};

export default UserProfile;
