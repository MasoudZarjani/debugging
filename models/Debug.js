import mongoose from "mongoose";
import timestamps from "mongoose-timestamp";

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
  deviceName: {
    type: String,
  },
  androidId: {
    type: String,
  },
  project: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: Boolean,
  },
});

DebugSchema.plugin(timestamps);

export default mongoose.model("Debug", DebugSchema);
