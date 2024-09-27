import React from "react";

function SignUp() {
  return (
    <form className="signup">
      <h1>Signup</h1>
      <input type="text" name="email" id="email" placeholder="Email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      <button>Signup</button>
    </form>
  );
}

export default SignUp;
