import mongoose from "mongoose";
const promptSchema = new mongoose.Schema({
  paragraphg: {
    type: String,
    required: true,
  },
  user: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "user",
  },
  likes: {
    type: Number,
    default: 0,
  },
  likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});
export default mongoose.models.Prompt || mongoose.model("Prompt", promptSchema);
