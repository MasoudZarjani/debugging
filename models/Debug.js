import mongoose from "mongoose";
import timestamps from "mongoose-timestamp";

const DebugSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  statusCode: {
    type: String,
  },
  body: {
    type: String,
  },
  level: {},
  page: {},
  occurredAt: {},
  deviceName: {},
  androidId: {},
  project: {},
  userId: {
      
  }
});

DebugSchema.plugin(timestamps);

export default mongoose.model("Debug", DebugSchema);
