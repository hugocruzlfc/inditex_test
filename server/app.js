import express from "express";
import cors from "cors";

import { MONGODB_URI } from "./utils/config.js";
import mongoConnection from "./db/mongo.js";
import { info } from "./utils/logger.js";
import Controllers from "./controllers/index.js";

const app = express();

info("Connecting to", MONGODB_URI);
mongoConnection();

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

app.use("/api/rows", Controllers.rowRouter);
app.use("/api/templates", Controllers.templateRouter);
app.use("/api/products", Controllers.productRouter);

export default app;
