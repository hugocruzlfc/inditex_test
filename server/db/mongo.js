import mongoose from "mongoose";

import { MONGODB_URI } from "../utils/config.js";

const url = MONGODB_URI;

export default function mongoConnection() {
  mongoose
    .connect(url)
    .then((resp) =>
      console.log("Mongo DB connection in version: " + `${resp.version}`)
    )
    .catch((error) => {
      console.log("error connecting to MongoDB:", error.message);
    });
}
