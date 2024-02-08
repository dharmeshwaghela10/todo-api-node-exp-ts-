import mongoose from "mongoose";

const MONGODB_URL: string = "mongodb://localhost:27017/node-rest-api";

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error(err);
    console.log(" Not-Connected to DB");
  });
