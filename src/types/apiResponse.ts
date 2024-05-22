import { MessageType } from "@/model/message.model";

export interface Apiresponse {
  success: boolean;
  message: string;
  isAcceptingMessage?: boolean;
  messages?: Array<MessageType>;
}
