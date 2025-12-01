const mongoose = require("mongoose");
const LeaderboardEntrySchema = new mongoose.Schema(
  {
    season: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Season",
      required: true,
      index: true,
    },
    driver: { type: mongoose.Schema.Types.ObjectId, ref: "Driver" },
    team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
    points: { type: Number, default: 0 },
    position: Number,
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
LeaderboardEntrySchema.index({ season: 1, points: -1 });
module.exports = mongoose.model("LeaderboardEntry", LeaderboardEntrySchema);
