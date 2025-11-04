import mongoose, { Schema, Document, Model } from "mongoose";
import { Video, VideoComment, VideoReply } from "@/app/interfaces/interfaces";

// Define the Video schema with inline comments and replies
const VideoSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    url: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    isPublic: { type: Boolean, default: false },
    likes: [{ type: Schema.Types.ObjectId, ref: "users" }], // Array of user references who liked the video
    comments: [
      {
        userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
        username: { type: String, required: true }, // Keep for backward compatibility
        text: { type: String, required: true },
        likes: [{ type: Schema.Types.ObjectId, ref: "users" }], // Array of user references who liked this comment
        replies: [
          {
            userId: {
              type: Schema.Types.ObjectId,
              ref: "users",
              required: true,
            },
            username: { type: String, required: true }, // Keep for backward compatibility
            text: { type: String, required: true },
            likes: [{ type: Schema.Types.ObjectId, ref: "users" }], // Array of user references who liked this reply
            createdAt: { type: Date, default: Date.now },
          },
        ],
        createdAt: { type: Date, default: Date.now },
      },
    ], // Array of comments
  },
  {
    timestamps: true, // This will automatically add createdAt and updatedAt fields
  }
);

// Create and export the Video model
const videoModel =
  mongoose.models.videos || mongoose.model("videos", VideoSchema);
export default videoModel as Model<Video>;
