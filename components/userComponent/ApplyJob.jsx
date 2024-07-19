"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Toaster, toast } from "sonner";
const ImageUpload = () => {
  const [file, setFile] = useState();
  //   const [image1, setImage1] = useState(null);
  //   const [image2, setImage2] = useState(null);
  const [data, setData] = useState({});
  // console.log(image1, image2);

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

  const createTask = async (data) => {
    // try {
    //   const response = await fetch("/api/applicant", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ data }),
    //   });
    //   const result = await response.json();
    //   if (response.ok) {
    //     console.log("Job application successfully", result);
    //     toast.success("Job application successfully");
    //     return result;
    //   } else {
    //     console.error("Error creating blog:", result);
    //     toast.error("Failed to Apply for job");
    //     return result;
    //   }
    // } catch (error) {
    //   console.error("Error creating blog:", error);
    //   toast.error("Failed to Apply for job");
    // }
  };

  const onSubmit = async () => {
    setData({ file });
    //console.log(data);
    const imageFile = file;
    //console.log(imageFile);
    //upload image
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "skilldesk"); // Replace with your Cloudinary preset
    // upload image
    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/laon/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        toast.error("Failed to upload image to cloud");
      }
      const imageData = await response.json();
      //console.log("Image uploaded:", imageData);
      const image = imageData?.secure_url;
      setData({ image });
      console.log(data);
      createTask(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      <div className="flex justify-center items-center  h-64 border-2 border-dashed border-gray-300 rounded-lg bg-white w-[50rem] cursor-pointer text-center text-lg font-semibold">
        Upload video the video should not be more that 1 minute long and 5md in
        size. tell us why you are the best fit for this job good luck
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
                  <img
                    src="/Upload.png"
                    alt="Upload"
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

      {/* <div>
        <h2 className="text-lg font-bold my-2">Upload your Cover letter</h2>
        <div
          className="flex justify-center items-center w-[50rem] h-64 border-2 border-dashed border-gray-300 rounded-lg bg-white cursor-pointer"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="text-center">
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              onChange={(e) => setImage2(e.target.file)}
            />

            <>
              <label
                htmlFor="fileUpload"
                className="text-blue-600 cursor-pointer"
              >
                <img
                  src="/Upload.png"
                  alt="Upload"
                  className="mx-auto mb-4 w-[4rem] h-[4rem]"
                />
                <p className="text-gray-600">
                  Drop your cover letter here, or browse
                </p>
                <p className="text-gray-400">Supports: JPG, JPEG2000, PNG</p>
              </label>
            </>
          </div>
        </div>
      </div> */}
      <div className="flex justify-center items-center">
        <Button onClick={onSubmit} variant="default">
          Upload Video now
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;
