const express = require("express");
const dotenv = require("dotenv");
const { default: connection } = require("./dbConfig/db");
const cors = require("cors");
const userRouter = require("./routes/userRoute");
const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/user-service", userRouter);

app.get("/", (req, res) => {
  res.status(200).send("<h2>Homepage</h2>");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Server connected to DB");
    console.log(`Server is running at PORT ${PORT}`);
  } catch (error) {
    console.log(`Cannot connect to the DB ${error}`);
  }
});
