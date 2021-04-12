import mongoose from "mongoose";
import timestamps from "mongoose-timestamp";

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  packageName: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

ProjectSchema.plugin(timestamps);

export default mongoose.model("Project", ProjectSchema);
