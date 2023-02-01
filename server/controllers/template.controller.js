import { Router } from "express";

import Template from "../models/template.model.js";

const templateRouter = Router();

templateRouter.get("/", async (request, response) => {
  try {
    const templates = await Template.find({}).populate("rows", {
      name: 1,
      aesthetic: 1,
    });

    response.status(200).json(templates);
  } catch (err) {
    response.status(500).json(err);
  }
});

templateRouter.post("/", async (request, response) => {
  try {
    const body = request.body;
    const template = new Template({
      name: body.name,
    });

    const saveTemplate = await template.save();
    response.status(200).json(saveTemplate);
  } catch (err) {
    response.status(500).json(err);
  }
});

export default templateRouter;
