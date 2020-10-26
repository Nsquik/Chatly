import { ChatRoomContext } from "@res/contexts/chatroom";
import { STATE } from "@res/contexts/chatroom/types";
import { useContext } from "react";

export const useChatroomState = () => {
  const context = useContext(ChatRoomContext);

  if (context === undefined) {
    throw new Error("useChatroomState must be used within a ChatRoomProvider");
  }

  return context;
};
