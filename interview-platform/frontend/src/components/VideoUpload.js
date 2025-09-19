import React, { useState } from "react";
import API from "../api";

function VideoUpload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file!");
    const formData = new FormData();
    formData.append("video", file);

    try {
      await API.post("/videos", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Upload successful!");
    } catch (error) {
      alert("Upload failed!");
    }
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="font-bold text-lg">Upload Video</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        Upload
      </button>
    </div>
  );
}

export default VideoUpload;
