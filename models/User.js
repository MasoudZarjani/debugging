import mongoose from "mongoose";
import timestamps from "mongoose-timestamp";

const UserSchema = new mongoose.Schema({
  uuid: {
    type: String,
  },
  username: {
    type: String,
  },
  mobile: {
    type: String,
  },
  deviceId: {
    type: String,
  },
  deviceName: {
    type: String,
  },
});

UserSchema.plugin(timestamps);

export default mongoose.model("User", UserSchema);
