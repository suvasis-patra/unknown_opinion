import mongoose, { Schema, Document, Types } from "mongoose";

export interface MessageType extends Document {
  content: string;
  createdAt: Date;
  createdBy: Types.ObjectId;
}

export const messageSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const MessageModel =
  (mongoose.models.Message as mongoose.Model<MessageType>) ||
  mongoose.model<MessageType>("Message", messageSchema);

export default MessageModel;
