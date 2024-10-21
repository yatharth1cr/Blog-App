import React, { useState } from "react";
import { ApiService } from "../services/apiService";
import { loginURL } from "../constant/const";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let [LoginMessage, setLoginMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // event.target.value = "";

    let error = "";
    switch (true) {
      case !email || !password:
        error = "Both fields are required";
        break;
      case password.length < 6:
        error = "Invalid Password!";
        setPassword("");
        break;
      default:
        error = ""; // Clear the error if validation passes
    }
    setError(error);

    console.log(LoginMessage, { email, password });
    login({ email, password });
  };

  let login = async (data) => {
    let loginData = await ApiService.postReq(loginURL, data);
    if (loginData["error"]) {
      setLoginMessage(loginData["message"]);
      toast.error(loginData["message"]);
    } else {
      setLoginMessage(loginData["message"]);
      toast.success(loginData["message"]);

      // saved token in localStorage
      const token = loginData.body.token;
      localStorage.setItem("authToken", token);

      console.log(loginData.body.token, "token checkkkk");

      // clear form after loggedIn
      setEmail("");
      setPassword("");
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
        value={email.trim()}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={password.trim()}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button className="login-btn bold">Login</button>
      <Toaster />
    </form>
  );
}

// exports
export default Login;
