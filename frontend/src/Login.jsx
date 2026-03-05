import React, { useState, useEffect } from "react";
import axios from "axios";

function Login({ setIsLoggedIn, setUsername }) {

  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Load saved username from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleLogin = async () => {

    try {

      const response = await axios.post("http://localhost:5000/login", {
        username,
        password
      });

      if (response.status === 200) {

        // Save username in localStorage
        localStorage.setItem("username", username);

        setUsername(username);
        setIsLoggedIn(true);
      }

    } catch (err) {

      if (err.response && err.response.status === 401) {
        setError("Invalid username or password");
      } else {
        setError("Server error. Please try again.");
      }

    }
  };

  return (
    <div style={{ marginTop: "100px", textAlign: "center" }}>

      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUser(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>

      <p style={{ color: "red" }}>{error}</p>

    </div>
  );
}

export default Login;