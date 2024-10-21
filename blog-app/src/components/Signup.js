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

    // Validation logic
    if (!email || !password) {
      setError("Both fields are required");
    } else if (!email.includes("@gmail.com")) {
      setError("Email must contain @gmail.com");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long");
    } else {
      setError(""); // Clear the error if validation passes

      // Proceed with form submission logic
      console.log(signupMessage, { email, password });
      signup({ email, password });
    }
  };

  const signup = async (data) => {
    // console.log(data, "dataaaaaaa")
    const signupData = await ApiService.postReq(signupURL, data);
    if (signupData["error"]) {
      setSignupMessage(signupData["message"]);
      toast.error(signupData["message"]);
    } else {
      setSignupMessage(signupData["message"]);
      toast.success(signupData["message"]);
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
