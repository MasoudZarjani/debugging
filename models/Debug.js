import mongoose from "mongoose";
import timestamps from "mongoose-timestamp";

import constants from "../config/constants";

const DebugSchema = new mongoose.Schema({
  type: {
    type: Number,
    default: 0,
  },
  statusCode: {
    type: String,
  },
  body: {
    type: String,
  },
  level: {
    type: Number,
    default: 0,
  },
  page: {
    type: String,
  },
  occurredAt: {
    type: Date,
    default: Date.now,
  },
  versionCode: {
    type: String,
  },
  versionName: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
  status: {
    type: Number,
    default: constants.debug.status.submitted,
  },
});

DebugSchema.plugin(timestamps);

export default mongoose.model("Debug", DebugSchema);
