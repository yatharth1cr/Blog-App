import React, { useState } from "react";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation logic
    if (!email || !password) {
      setError("Both fields are required");
    } else if (!email.includes("@gmail.com")) {
      setError("Email must contain @gmail.com");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long");
    } else {
      setError(""); // Clear the error if validation passes

      // Proceed with form submission logic (e.g., call an API)
      console.log("Form submitted successfully!", { email, password });
    }
  };

  return (
    <form className="login flex column text-center">
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
      <button className="bold" onSubmit={handleSubmit}>
        Login
      </button>
    </form>
  );
}

// exports
export default Login;
