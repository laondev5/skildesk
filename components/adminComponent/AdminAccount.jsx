"use client";
import Image from "next/image";
import Reac, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { InfinitySpin } from "react-loader-spinner";
//import { useSession } from "next-auth/react";
import { Toaster, toast } from "sonner";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
const AdminAccount = ({ userData }) => {
  const [isLoading, setIsLoading] = useState(false);
  //console.log(userData);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    //console.log(data);
    const passwordData = { ...data, userId: userData.id };
    setIsLoading(true);
    try {
      const response = await fetch("/api/change_password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ passwordData }),
      });

      const result = await response.json();
      if (response.ok) {
        //console.log("password changed successfully:", result);
        setIsLoading(false);
        toast.success("password changes successfully");

        return result;
      } else {
        //console.error("Error updating user:", result);
        setIsLoading(false);
        toast.error(response?.error);

        return result;
      }
    } catch (error) {
      //console.error("Error updating user:", error);
      toast.error(response?.error);
    }
  };
  return (
    <div className="w-full">
      <Toaster position="bottom-right" expand={false} richColors />
      {isLoading && (
        <div className="absolute top-0 left-0 w-[100%] h-screen bg-gray-500/5">
          <div className="w-[100%] h-[100%] flex justify-center items-center">
            <div className="flex justify-center items-center w-[10rem] h-[10rem]  rounded-md ">
              <InfinitySpin
                height="100"
                width="100"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
            </div>
          </div>
        </div>
      )}
      <div className="w-full flex gap-8 flex-col lg:flex-row">
        <div className="w-[77%] shadow-md rounded-md py-6 px-8 flex flex-col gap-8">
          <div className="w-[5rem] h-[5rem] rounded-t-sm my-2">
            {userData.image ? (
              <Image
                src={userData.image}
                alt="profile picture"
                width={50}
                height={50}
                className="rounded-mg w-[5rem] h-[5rem]"
              />
            ) : (
              <Image
                src="/profile1.svg"
                alt="profile picture"
                width={50}
                height={50}
                className="rounded-mg w-[5rem] h-[5rem]"
              />
            )}
          </div>
          <div>
            <h2 className="text-lg font-bold">{userData.name}</h2>
            <p>{userData.email}</p>
            <p>{userData.role}</p>
          </div>
        </div>
        <div className="w-[20%] shadow-md rounded-md py-6 px-8 flex flex-col gap-8"></div>
      </div>
      <div className="w-[80%] flex gap-8 flex-col">
        <h2 className="text-2xl font-bold mx-8">Change Password</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[90%] lg:w-[50%] mx-8"
        >
          <div className=" my-2">
            <Controller
              name="oldPassword"
              control={control}
              defaultValue=""
              render={({ field: { onChange, onBlur, value } }) => (
                <div>
                  <Label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Old password
                  </Label>
                  <Input
                    type="password"
                    id="oldPassword"
                    name="oldPassword"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Old password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              )}
            />
          </div>

          <div className=" my-2">
            <Controller
              name="newPassword"
              control={control}
              defaultValue=""
              render={({ field: { onChange, onBlur, value } }) => (
                <div>
                  <Label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    New password
                  </Label>
                  <Input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="New password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              )}
            />
          </div>

          <div className=" my-2">
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              render={({ field: { onChange, onBlur, value } }) => (
                <div>
                  <Label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Confirm password
                  </Label>
                  <Input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder=" Confirm password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              )}
            />
          </div>
          <div className="my-2">
            <Button variant="default" size="lg">
              Change password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminAccount;
