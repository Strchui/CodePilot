import React from "react";
import CodingChallenge from "./components/CodingChallenge";
import VideoUpload from "./components/VideoUpload";
import JobList from "./components/JobList";

function App() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Interview Platform Frontend</h1>
      <JobList />
      <VideoUpload />
      <CodingChallenge language="javascript" />
    </div>
  );
}

export default App;
