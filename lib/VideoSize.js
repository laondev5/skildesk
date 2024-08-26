// import fetch from "isomorphic-unfetch";

// export const getVideoFileSize = async (videoUrl) => {
//   const response = await fetch(videoUrl, {
//     method: "HEAD",
//   });

//   const fileSize = response.headers.get("Content-Length");
//   const fileSizeInBytes = parseInt(fileSize, 10);

//   // Convert bytes to a human-readable format (e.g. KB, MB, GB)
//   const fileSizeInHumanReadableFormat =
//     fileSizeInBytes > 1024
//       ? `${(fileSizeInBytes / 1024).toFixed(2)} KB`
//       : `${fileSizeInBytes} bytes`;

//   console.log(fileSizeInHumanReadableFormat);
// };

// // Example usage:
// const videoUrl = "https://example.com/video.mp4";
// getVideoFileSize(videoUrl).then((fileSize) =>
//   console.log(`Video file size: ${fileSize}`)
// );
