import { useChatRoom } from "@res/contexts/chatroom/useChatRoom";
import React, { createContext } from "react";

import { Hook } from "./types";

export const ChatRoomContext = createContext<Hook | undefined>(undefined);

export interface Props {}

const ChatRoomProvider: React.FC<Props> = ({ children }) => {
  const state = useChatRoom();

  return (
    <ChatRoomContext.Provider value={state}>
      {children}
    </ChatRoomContext.Provider>
  );
};

export default ChatRoomProvider;
