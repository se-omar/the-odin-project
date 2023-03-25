import mongoose from "mongoose";

const { Schema } = mongoose;

const MessageSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model("Message", MessageSchema);
