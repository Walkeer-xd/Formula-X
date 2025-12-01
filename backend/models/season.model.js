const mongoose = require('mongoose');
const SeasonSchema = new mongoose.Schema({
  year: { type: Number, required: true, unique: true },
  description: String,
  startedAt: Date,
  endedAt: Date
}, { timestamps: true });
SeasonSchema.index({ year: 1 });
module.exports = mongoose.model('Season', SeasonSchema);