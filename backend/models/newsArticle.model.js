const mongoose = require("mongoose");
const NewsArticleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: String,
    url: String,
    provider: String,
    publishedAt: Date,
    tags: [String],
    meta: Object,
  },
  { timestamps: true }
);
NewsArticleSchema.index({ publishedAt: -1 });
module.exports = mongoose.model("NewsArticle", NewsArticleSchema);
