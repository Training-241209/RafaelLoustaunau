import React, { useState, FormEvent } from "react";
import axios from "axios";

// Define the structure of the response data
interface LoginResponse {
  token: string;
}

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Handle the login form submission
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post<LoginResponse>("/api/auth/login", {
        username,
        password,
      });

      // Save JWT token to localStorage
      localStorage.setItem("token", response.data.token);

      alert("Login successful!");
      // Redirect user or perform additional logic here
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid credentials!");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
