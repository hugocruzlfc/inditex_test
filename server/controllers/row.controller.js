import { Router } from "express";
import Row from "../models/row.model.js";
import Template from "../models/template.model.js";

const rowRouter = Router();

rowRouter.get("/", async (request, response) => {
  try {
    const rows = await Row.find({}).populate("template", {
      name: 1,
    });
    response.status(200).json(rows);
  } catch (err) {
    response.status(500).json(err);
  }
});

rowRouter.get("/:id", async (request, response) => {
  try {
    const row = await Row.findById(request.params.id);
    if (row) {
      response.status(200).json(row);
    } else {
      response.status(404).end();
    }
  } catch (err) {
    response.status(500).json(err);
  }
});

rowRouter.post("/", async (request, response) => {
  try {
    const body = request.body;
    const currentTemplate = await Template.findById(body.template);

    const row = new Row({
      name: body.name,
      aesthetic: body.aesthetic,
      template: body.template,
    });

    const savedRow = await row.save();
    currentTemplate.rows = currentTemplate.rows.concat(savedRow._id);
    await currentTemplate.save();
    response.status(200).json(savedRow);
  } catch (err) {
    response.status(500).json(err);
  }
});

export default rowRouter;
