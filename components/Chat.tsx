import ChatBubble from "@components/ChatBubble";
import { useChatroomState } from "@hooks/useChatroomState";
import { useUserInfo } from "@hooks/useUserInfo";
import React from "react";
import { GiftedChat, GiftedChatProps } from "react-native-gifted-chat";

export interface Props extends GiftedChatProps {}

const Chat: React.FC<Props> = (props) => {
  const { data, getFullName } = useUserInfo();
  const Chatroom = useChatroomState();
  const {
    state: { messages },
  } = Chatroom;

  const myUserId = data && data.user._id;

  const newMessages = messages.map((item) => ({
    ...item,
    user: {
      ...item.user,
      name: `${item.user.firstName} ${item.user.lastName}`,
    },
  }));

  return (
    <GiftedChat
      {...props}
      messages={newMessages}
      user={{ _id: myUserId || "0", name: getFullName() }}
      renderBubble={(props) => <ChatBubble {...props} />}
    />
  );
};

export default Chat;
