const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDb = require("./config/db.js");
const path = require("path");

//dot config
dotenv.config();

//mongodb connection
connectDb();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//Routes
//1
// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Welcome to Blood Bank App",
//   });
// });

//Routes
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));

app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

//static routes
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(
    `Node server is running In ${process.env.DEV_MODE} ModeOn PORT ${process.env.PORT}`
      .bgBlue.white
  );
});
