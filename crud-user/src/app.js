const express = require("express");

const app = express();

const userRouter = require('./users/users.router')

app.use(express.json());

app.use('/', userRouter)

app.listen(9000, () => {
  console.log("Server started at port 9000");
});