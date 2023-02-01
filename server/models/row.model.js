import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const rowSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  aesthetic: {
    type: String,
    required: true,
  },
  template: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Template",
  },
});

rowSchema.plugin(uniqueValidator);

rowSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Row = mongoose.model("Row", rowSchema);

export default Row;
