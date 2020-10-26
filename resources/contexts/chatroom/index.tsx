import React, { createContext } from "react";

export const ChatRoomContext = createContext<object | undefined>(undefined);

export interface Props {}

const ChatRoomProvider: React.FC<Props> = ({ children }) => {
  return (
    <ChatRoomContext.Provider value={{}}>{children}</ChatRoomContext.Provider>
  );
};

export const useChatroomState = () => {
  const context = React.useContext(ChatRoomContext);

  if (context === undefined) {
    throw new Error("useChatroomState must be used within a ChatRoomProvider");
  }

  return context;
};

export default ChatRoomProvider;
