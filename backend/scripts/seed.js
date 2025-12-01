// scripts/seed.js
const mongoose = require("mongoose");
const models = require("../models");
require("dotenv").config();
const MONGODB_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/f1app";

async function main() {
  await mongoose.connect(MONGODB_URI);
  console.log("connected");
  // create season
  const season = await models.Season.findOneAndUpdate(
    { year: 2025 },
    { year: 2025, description: "Sample Season 2025" },
    { upsert: true, new: true }
  );
  // create teams
  const red = await models.Team.findOneAndUpdate(
    { constructorId: "team1" },
    { name: "Red Racing", constructorId: "team1" },
    { upsert: true, new: true }
  );
  const blue = await models.Team.findOneAndUpdate(
    { constructorId: "team2" },
    { name: "Blue Speed", constructorId: "team2" },
    { upsert: true, new: true }
  );
  // drivers
  const d1 = await models.Driver.findOneAndUpdate(
    { extId: "d1" },
    { fullName: "Driver One", number: 7, team: red._id, extId: "d1" },
    { upsert: true, new: true }
  );
  const d2 = await models.Driver.findOneAndUpdate(
    { extId: "d2" },
    { fullName: "Driver Two", number: 33, team: blue._id, extId: "d2" },
    { upsert: true, new: true }
  );
  // track
  const track = await models.Track.findOneAndUpdate(
    { name: "Sample GP" },
    { name: "Sample GP", country: "Neverland", lengthKm: 5.4 },
    { upsert: true, new: true }
  );
  // race
  const race = await models.Race.findOneAndUpdate(
    { name: "Sample GP Race" },
    {
      season: season._id,
      name: "Sample GP Race",
      track: track._id,
      date: new Date(Date.now() + 3600 * 1000 * 24),
    },
    { upsert: true, new: true }
  );
  console.log("seed done");
  process.exit(0);
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
