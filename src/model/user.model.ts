import mongoose, { Schema, Document } from "mongoose";
import { MessageType, messageSchema } from "./message.model";

export interface UserType extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isAcceptingMessage: boolean;
  isVerified: boolean;
  messages: MessageType[];
}

const userSchema: Schema<UserType> = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verifyCode: {
    type: String,
    required: true,
  },
  isAcceptingMessage: {
    type: Boolean,
    default: true,
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
  verifyCodeExpiry: {
    type: Date,
    required: true,
  },
  messages: [messageSchema],
});

const userModel =
  (mongoose.models.User as mongoose.Model<UserType>) ||
  mongoose.model<UserType>("User", userSchema);

export default userModel;
