import React, { useState } from "react";
import { ApiService } from "../services/apiService";
import { loginURL } from "../constant/const";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let [LoginMessage, setLoginMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // event.target.value = "";
    // Validation logic
    if (!email || !password) {
      setError("Both fields are required");
    } else if (!email.includes("@gmail.com")) {
      setError("Email must contain @gmail.com");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long");
    } else {
      setError(""); // Clear the error if validation passes

      // Proceed with form submission
      console.log("Logged In successfully!", { email, password });
    }
    login({ email, password });
  };

  let login = async (data) => {
    let loginData = await ApiService.postReq(loginURL, data);
    if (loginData["error"]) {
      setLoginMessage(loginData["message"]);
    } else {
      setLoginMessage(loginData["message"]);
    }
  };

  return (
    <form
      className="flex column text-center"
      onSubmit={handleSubmit}
      method="POST"
    >
      <h1 className="bold">Login</h1>
      <input
        type="text"
        name="email"
        id="loginEmail"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button className="login-btn bold" onSubmit={handleSubmit}>
        Login
      </button>
    </form>
  );
}

// exports
export default Login;
