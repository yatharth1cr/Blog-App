import React, { useState } from "react";
import { ApiService } from "../services/apiService";
import { signupURL } from "../constant/const";
import toast, { Toaster } from "react-hot-toast";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [error, setError] = useState("");
  const [signupMessage, setSignupMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let error = "";
    // Validation logic
    switch (true) {
      case !email || !password:
        error = "Both fields are required";
        break;
      case !email.includes("@gmail.com"):
        error = "Email must contain @gmail.com";
        break;
      case password.length < 6:
        error = "Password must be at least 6 characters long";
        setPassword("");
        break;
      default:
        error = "";
    }
    setError(error);

    // Only signup if there's no error
    if (error === "") {
      signup({ email, password });
    }

    console.log(signupMessage, { email, password });
  };

  const signup = async (data) => {
    try {
      const signupData = await ApiService.postReq(signupURL, data);
      if (signupData["error"]) {
        toast.error(signupData["message"]);
        setSignupMessage(signupData["message"]);
      } else {
        toast.success(signupData["message"]);
        setSignupMessage(signupData["message"]);
      }
    } catch (error) {
      console.error("Signup error", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <form
      className="flex column text-center"
      onSubmit={handleSubmit}
      method="post"
    >
      <h1 className="bold">Signup</h1>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        id="signup-password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button className="signup-btn bold">Signup</button>
      <Toaster />
    </form>
  );
}

// exports
export default SignUp;
