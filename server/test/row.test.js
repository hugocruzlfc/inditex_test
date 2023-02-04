import {mongoose} from "mongoose";
import supertest from "supertest";

import app from "../app.js";
import {initialRows} from "../utils/test_helper.js";
import Row from "../models/row.model.js";


const api = supertest(app);


beforeEach(async () => {
    await Row.deleteMany({});
    for (let row of initialRows) {
      let rowObject = new Row(row);
      await rowObject.save();
    }
});
  

describe("suite for the first tests", () => {
    test("unique identifier is called id", async () => {
      const response = await api.get("/api/rows");
      expect(response.body[0].id).toBeDefined();
    });
  
    test("a valid row can be added", async () => {
      const newRow= {
        name: "Row 3",
        aesthetic: "end",
        template: 1,
        products: [],
      };
  
      await api
        .post("/api/rows")
        .send(newRow)
        .expect(200)
        .expect("Content-Type", /application\/json/);
  
      const response = await api.get("/api/rows");
  
      const names = response.body.map((r) => r.name);
  
      expect(response.body).toHaveLength(helper.initialBlogs.length + 1);
      expect(names).toContain("Row 3");
    });
  
    
});
  

afterAll(() => {
    mongoose.connection.close();
  });
  