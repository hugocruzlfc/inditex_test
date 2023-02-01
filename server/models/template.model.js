import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const templateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  rows: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Row",
    },
  ],
});

templateSchema.plugin(uniqueValidator);

templateSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Template = mongoose.model("Template", templateSchema);

export default Template;
