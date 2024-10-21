const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const registerController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({ email, password: hashedPassword });
    res.status(200).send({
      error: false,
      message: "User registered successfully",
      body: user,
    });
  } catch (error) {
    res.status(500).send({ error: true, message: error.message });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res
        .status(500)
        .send({ error: true, message: "User doesn't exist, please signup!" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res
        .status(400)
        .send({ error: true, message: "Invalid password!" });
    }

    const token = jwt.sign({ userId: user._id, email }, process.env.secretKey, {
      expiresIn: "30d",
    });

    res.status(200).send({
      error: false,
      message: "User signed in successfully",
      body: { user, token },
    });
  } catch (error) {
    res.status(500).send({ error: true, message: error.message });
  }
};

module.exports = { registerController, loginController };
