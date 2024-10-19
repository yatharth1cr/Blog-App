const UserModel = require("../models/userModel");

const registerMiddleware = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(500)
      .send({ error: true, message: "Please fill all the required fields!" });
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return res
      .status(500)
      .send({ error: true, message: "Please enter valid email!" });
  }

  if (password.length < 6) {
    return res.status(500).send({
      error: true,
      message: "Password should be at least of 6 characters!",
    });
  }

  if (!/[0-9]/.test(password)) {
    return res.status(500).send({
      error: true,
      message: "Password should have at least one number!",
    });
  }

  if (!/[A-Z]/.test(password)) {
    return res.status(500).send({
      error: true,
      message: "Password should have at least one capital alphabet!",
    });
  }

  if (!/[!@#$%^&*]/.test(password)) {
    return res.status(500).send({
      error: true,
      message: "Password should have at least one special character!",
    });
  }

  const isRegistered = await UserModel.findOne({ email });

  if (isRegistered) {
    return res
      .status(500)
      .send({ error: true, message: "User already registered, please login!" });
  }
  next();
};

module.exports = registerMiddleware;
