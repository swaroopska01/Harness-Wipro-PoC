import React, { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api/message")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend API call failed"));
  }, []);

  return (
    <div style={{ fontFamily: "Arial", padding: "40px" }}>
      <h1>Harness Full Stack PoC</h1>
      <h2>React Frontend + Python Backend</h2>
      <p>{message}</p>
    </div>
  );
}