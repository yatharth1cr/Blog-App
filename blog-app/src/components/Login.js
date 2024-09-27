import React from "react";

function Login() {
  return (
    <form className="login">
      <h1>Login</h1>
      <input type="text" name="email" id="loginEmail" placeholder="Email" />
      <input
        type="password"
        name="password"
        id="loginPassword"
        placeholder="Password"
      />
      <button>Login</button>
    </form>
  );
}

export default Login;
