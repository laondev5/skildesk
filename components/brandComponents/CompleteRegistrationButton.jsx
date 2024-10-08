"use client";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";
//import { getUserData } from "@/app/(auth)/action/getUserData";
import { getUserData } from "@/app/action/getUserData";
const CompleteRegistrationButton = () => {
  const [data, setData] = useState();
  const { data: session } = useSession({});
  // console.log();

  const userDetails = async (id) => {
    try {
      const response = await getUserData(id);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!session?.user) return;
    else userDetails(session?.user?.id);
  }, []);
  //console.log(data?.status);
  return (
    <>
      {data?.status === "complete" ? (
        <div className="hidden"></div>
      ) : (
        <div className="my-5">
          <div className="rounded-md shadow-sm bg-orange-300 py-3 px-4 flex items-center space-x-3">
            <div className="w-[80%] flex space-x-3 items-center">
              <div>
                <p className="text-sm text-white">
                  Please click the button to complete you registration and get
                  access to all the feature of our platform
                </p>
              </div>
            </div>
            <div>
              <Button variant="main" size="default">
                <Link href="/vendor/completeRegistration">
                  Complete Registration
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CompleteRegistrationButton;
