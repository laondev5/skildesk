export const cloudinaryUpload = async (rawImage) => {
  //upload image
  const formData = new FormData();
  formData.append("file", rawImage);
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
    return image;
  } catch (error) {
    console.log(error);
    return null;
  }
};
