import { Router } from "express";

import { products } from "../mocks/products.js";

const productRouter = Router();

productRouter.get("/", async (request, response) => {
  try {
    response.status(200).json(products);
  } catch (err) {
    response.status(500).json(err);
  }
});

export default productRouter;
