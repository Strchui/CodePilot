import React, { useState, useEffect } from "react";
import API from "../api";

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4 border rounded">
      <h2 className="font-bold text-lg">Job List</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job._id} className="border-b py-2">
            <strong>{job.title}</strong> - {job.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
