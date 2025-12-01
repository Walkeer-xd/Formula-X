const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true },
    favouriteTeam: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    settings: { type: Object, default: {} },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
