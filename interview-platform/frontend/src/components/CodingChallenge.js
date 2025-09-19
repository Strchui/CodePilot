import React, { useState, useEffect } from "react";
import API from "../api";

function CodingChallenge({ language }) {
  const [challenge, setChallenge] = useState(null);

  useEffect(() => {
    API.get(`/coding-challenges/${language}`)
      .then((res) => setChallenge(res.data))
      .catch((err) => console.error(err));
  }, [language]);

  return (
    <div className="p-4 border rounded">
      <h2 className="font-bold text-lg">Coding Challenge ({language})</h2>
      {challenge ? (
        <pre>{JSON.stringify(challenge, null, 2)}</pre>
      ) : (
        <p>Loading challenge...</p>
      )}
    </div>
  );
}

export default CodingChallenge;
