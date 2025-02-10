// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const { Sequelize, DataTypes } = require("sequelize");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // MySQL Connection with Sequelize
// // const sequelize = new Sequelize(
// //   process.env.DB_NAME,
// //   process.env.DB_USER,
// //   process.env.DB_PASSWORD,
// //   {
// //     host: process.env.DB_HOST,
// //     dialect: "mysql",
// //   }
// // );
// const sequelize = new Sequelize('art_connect', 'root', 'system', {
//   host: 'localhost',
//   dialect: 'mysql',
// });


// // Test Database Connection
// sequelize
//   .authenticate()
//   .then(() => console.log("Connected to MySQL Database"))
//   .catch((err) => console.error("Unable to connect to MySQL:", err));

// // Define User Model
// const User = sequelize.define("User", {
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// // Sync Database (Create tables if not exist)
// sequelize
//   .sync()
//   .then(() => console.log("Database synchronized"))
//   .catch((err) => console.error("Error syncing database:", err));

// // Routes
// // Sign Up
// app.post("/api/signup", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ where: { email } });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const newUser = await User.create({ email, password });
//     res.status(201).json({ message: "User registered successfully", user: newUser });
//   } catch (error) {
//     res.status(500).json({ message: "Error registering user", error });
//   }
// });

// // Log In
// app.post("/api/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ where: { email } });
//     if (!user || user.password !== password) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     res.status(200).json({ message: "Login successful", user });
//   } catch (error) {
//     res.status(500).json({ message: "Error logging in", error });
//   }
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/uploads", express.static("uploads")); 

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/art_connect";

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Routes
// Sign Up
app.post("/api/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});

// Log In
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
});

// Start Server with Port Availability Check
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Handle Port Conflict
server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log(`Port ${PORT} is in use, trying port ${PORT + 1}...`);
    app.listen(PORT + 1, () => {
      console.log(`Server running on http://localhost:${PORT + 1}`);
    });
  }
});


