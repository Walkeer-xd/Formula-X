const mongoose = require("mongoose");
const TeamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    baseCountry: String,
    constructorId: String,
    meta: Object,
  },
  { timestamps: true }
);
TeamSchema.index({ name: 1 });
module.exports = mongoose.model("Team", TeamSchema);
