const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const goalRoutes = require("./routes/goalRoute");

//initialize the express application
const app = express();

// define the port
const port = process.env.PORT || 4000;
// cors
app.use(cors({ origin: "*" }));
// middleware
app.use(express.json());

// Routes MiddleWare
app.use("/api/goals", goalRoutes);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected");
    app.listen(port, () => {
      console.log(`Server is Running on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
};

start();

// sophyonwude219
// hcqITg01GCLEfzxj
// mongodb+srv://sophyonwude219:hcqITg01GCLEfzxj@cluster0.v9zcsci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
