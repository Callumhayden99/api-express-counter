//Include the express library
const express = require("express");
//Include the morgan middleware
const morgan = require("morgan");
//Include the cors middleware
const cors = require("cors");

//Create a new express application
const app = express();
//Tell express we want to use the morgan library
app.use(morgan("dev"));
//Tell express we want to use the cors library
app.use(cors());
//Tell express to parse JSON in the request body
app.use(express.json());

let counter = 0;

// GET request to the localhost:3030/ "root" path
app.get("/", (req, res) => {
  res.status(201).json({ message: "Welcome to the counter!!" });
});

// Get request
app.get("/counter", (req, res) => {
  res.json({ counter: counter });
});

// Post request for increment
app.post("/counter/increment", (req, res) => {
  counter++;
  res.status(201).json({ counter: counter });
});

// Post request for descrease
app.post("/counter/decrement", (req, res) => {
  counter--;
  res.status(201).json({ counter: counter });
});

// Post request for double
app.post("/counter/double", (req, res) => {
    counter = counter * 2;
    res.status(201).json({ counter: counter });
  });

  // Delete request
  app.delete("/counter", (req, res) => {
    counter = 0;
    res.status(200).json({ counter: counter });
  })

module.exports = app;
