"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { uploadVideo } from "@/app/action/uploadVideo";
import { getVideoFileSize } from "@/lib/VideoSize";
import { CldUploadWidget } from "next-cloudinary";
const ImageUpload = ({ jobId }) => {
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const router = useRouter();

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleBrowse = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const onSubmit = async () => {
    // const videoSize = await getVideoFileSize(file);
    const imageFile = file;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "skilldesk"); // Replace with your Cloudinary preset
    // upload image
    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/laon/video/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      setIsLoading(false);
      if (!response.ok) {
        toast.error("Failed to upload image to cloud");
      }
      const imageData = await response.json();
      console.log("video uploaded:", imageData);
      const video = imageData?.url;
      console.log(video);
      const res = await uploadVideo(jobId, video);
      if (!res) {
        toast.error("Failed to upload video");
        return;
      } else {
        toast.success("Video uploaded successfully");
        router.push(`/user`);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      <div className="flex justify-center items-center  h-64 border-2 border-dashed border-gray-300 rounded-lg bg-white w-[50rem] cursor-pointer text-center text-lg font-semibold">
        Upload video the video should not be more that 1 minute long and 5md in
        size. tell us why you are the best fit for this job good luck...
      </div>
      <Toaster position="bottom-right" expand={false} richColors />
      <div>
        <h2 className="text-lg font-bold my-2">Upload a one minute video</h2>
        <div
          className="flex justify-center items-center  h-64 border-2 border-dashed border-gray-300 rounded-lg bg-white w-[50rem] cursor-pointer"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="text-center">
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              onChange={handleBrowse}
            />

            {file ? (
              <p className="text-gray-600">{file.name}</p>
            ) : (
              <>
                <label
                  htmlFor="fileUpload"
                  className="text-blue-600 cursor-pointer"
                >
                  <Image
                    src="/Upload.png"
                    alt="Upload"
                    width={70}
                    height={70}
                    className="mx-auto mb-4 w-[5rem] h-[4rem] "
                  />
                  <p className="text-gray-600">
                    Drop your video here, or browse
                  </p>
                  <p className="text-gray-400">Supports: mp4</p>
                </label>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Button onClick={onSubmit}>
          {isLoading ? (
            <div className="loading-animation">Loading...</div>
          ) : (
            "Upload video"
          )}
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;
