const mongoose = require("mongoose");
const DriverSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    shortName: String,
    number: { type: Number, index: true },
    country: String,
    team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
    extId: { type: String, index: true },
    stats: { races: Number, wins: Number, podiums: Number },
    meta: Object,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Driver", DriverSchema);
