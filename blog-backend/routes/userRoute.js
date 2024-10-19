const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/userController");
const registerMiddleware = require("../middlewares/registerMiddleware");
const userRouter = express.Router();

userRouter.post("/signup", registerMiddleware, registerController);
userRouter.post("/login", loginController);

module.exports = userRouter;
