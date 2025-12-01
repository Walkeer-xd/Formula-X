const mongoose = require("mongoose");
const TrackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    country: String,
    layoutImageUrl: String,
    lengthKm: Number,
    coords: { lat: Number, lng: Number },
    meta: Object,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Track", TrackSchema);
