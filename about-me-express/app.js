const express = require("express");

const app = express();

app.get("/me", (req, res) => {
  res.status(200).json({
    name: "Jhon Doe",
    age: 3,
    country: "United States",
  });
});

app.post("/goals", (req, res) => {
  res.status(201).json({
    hobby1: "Watch movies",
    hobby2: "Learn new things",
    hobby3: "Listen to music",
  });
});

app.patch("/goals", (req, res) => {
  res.status(202).json({
    hobby1: "Read new letters",
    hobby3: "Look at the sky",
  });
});

app.put("/business", (req, res) => {
  res.status(200).json({
    company1: "Google",
    company2: "Facebook",
    company3: "Microsoft",
  });
});

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
