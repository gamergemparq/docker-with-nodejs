const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/* This is creating a new schema for the settings model. */
const settingsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Settings", settingsSchema);