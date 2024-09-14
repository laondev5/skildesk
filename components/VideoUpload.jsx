"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertCircle, Upload } from "lucide-react";

export default function VideoUpload() {
  const [file, setFile] = (useState < File) | (null > null);
  const [error, setError] = (useState < string) | (null > null);
  const [success, setSuccess] = useState < boolean > false;
  const [uploading, setUploading] = useState < boolean > false;
  const [uploadProgress, setUploadProgress] = useState < number > 0;
  const videoRef = useRef < HTMLVideoElement > null;

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile || null);
    setError(null);
    setSuccess(false);
  };

  const checkVideoQuality = (video) => {
    return new Promise((resolve) => {
      // This is a basic check. You might want to implement more sophisticated quality checks.
      if (video.videoWidth >= 640 && video.videoHeight >= 480) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  };

  const uploadToCloudinary = async (file) => {
    // Replace with your actual Cloudinary upload URL and parameters
    const cloudinaryUrl =
      "https://api.cloudinary.com/v1_1/your-cloud-name/video/upload";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your-upload-preset");

    try {
      const response = await fetch(cloudinaryUrl, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      throw new Error("Failed to upload to Cloudinary");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(false);
    setUploading(true);
    setUploadProgress(0);

    if (!file) {
      setError("Please select a video file.");
      setUploading(false);
      return;
    }

    if (!videoRef.current) {
      setError("Video element not found.");
      setUploading(false);
      return;
    }

    // Check video duration
    if (videoRef.current.duration > 60) {
      setError("Video must be 1 minute or less.");
      setUploading(false);
      return;
    }

    // Check video quality
    const isQualityGood = await checkVideoQuality(videoRef.current);
    if (!isQualityGood) {
      setError(
        "Video quality is too low. Please upload a video with at least 640x480 resolution."
      );
      setUploading(false);
      return;
    }

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 90) {
          clearInterval(progressInterval);
          return prevProgress;
        }
        return prevProgress + 10;
      });
    }, 500);

    try {
      const cloudinaryUrl = await uploadToCloudinary(file);
      clearInterval(progressInterval);
      setUploadProgress(100);
      setSuccess(true);
      console.log("Uploaded to Cloudinary:", cloudinaryUrl);
    } catch (error) {
      setError("Failed to upload video. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">
        Upload Your 1-Minute Video Resume
      </h1>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important Instructions</AlertTitle>
        <AlertDescription>
          <ul className="list-disc pl-5 space-y-2">
            <li>Your video must be exactly 1 minute or less.</li>
            <li>Ensure good lighting and a clear background.</li>
            <li>Speak clearly and maintain eye contact with the camera.</li>
            <li>Briefly introduce yourself and highlight your key skills.</li>
            <li>Mention why yousre excited about the job opportunity.</li>
            <li>
              End with a strong call-to-action for employers to contact you.
            </li>
            <li>Video quality should be at least 640x480 resolution.</li>
          </ul>
        </AlertDescription>
      </Alert>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
          />
        </div>

        {file && (
          <video
            ref={videoRef}
            className="w-full rounded-lg shadow-lg"
            controls
          >
            <source src={URL.createObjectURL(file)} type={file.type} />
            Your browser does not support the video tag.
          </video>
        )}

        <Button type="submit" disabled={!file || uploading} className="w-full">
          {uploading ? "Uploading..." : "Upload Video"}
        </Button>
      </form>

      {uploading && (
        <div className="space-y-2">
          <Progress value={uploadProgress} className="w-full" />
          <p className="text-sm text-center">{uploadProgress}% uploaded</p>
        </div>
      )}

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert variant="default" className="bg-green-50 border-green-200">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Success</AlertTitle>
          <AlertDescription className="text-green-700">
            Your video has been successfully uploaded!
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
