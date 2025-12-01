const mongoose = require("mongoose");
const RaceSchema = new mongoose.Schema(
  {
    season: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Season",
      required: true,
    },
    name: { type: String, required: true },
    track: { type: mongoose.Schema.Types.ObjectId, ref: "Track" },
    date: { type: Date, required: true, index: true },
    timeUTC: String,
    status: {
      type: String,
      enum: ["scheduled", "ongoing", "finished", "cancelled"],
      default: "scheduled",
    },
    results: [
      {
        driver: { type: mongoose.Schema.Types.ObjectId, ref: "Driver" },
        position: Number,
        time: String,
      },
    ],
    meta: Object,
  },
  { timestamps: true }
);
RaceSchema.index({ season: 1, date: 1 });
module.exports = mongoose.model("Race", RaceSchema);
