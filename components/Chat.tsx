import ChatBubble from "@components/ChatBubble";
import { useChatroomState } from "@hooks/useChatroomState";
import { useUserInfo } from "@hooks/useUserInfo";
import { Text } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import {
  GiftedChat,
  GiftedChatProps,
  IMessage,
} from "react-native-gifted-chat";

export interface Props extends GiftedChatProps {}

const Chat: React.FC<Props> = (props) => {
  const [newMessages, setMessages] = useState<IMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const { data, getFullName } = useUserInfo();
  const Chatroom = useChatroomState();
  const {
    state: { messages },
    onSend,
    onSetTyping,
    isTyping,
  } = Chatroom;

  const myUserId = data && data.user._id;

  useEffect(() => {
    const newMessages = messages.map((item) => ({
      ...item,
      user: {
        ...item.user,
        name: `${item.user.firstName} ${item.user.lastName}`,
      },
    }));
    setMessages(newMessages);
    setTyping(true);
  }, [messages, Chatroom, setMessages]);

  const renderFooter = () => {
    return isTyping ? (
      <Text
        appearance="hint"
        style={{ textAlign: "center", paddingBottom: 10 }}
      >
        Someone is typing...
      </Text>
    ) : (
      false
    );
  };

  return (
    <GiftedChat
      {...props}
      messages={newMessages}
      user={{ _id: myUserId || "0", name: getFullName() }}
      renderBubble={(props) => <ChatBubble {...props} />}
      onSend={(messages) => onSend(messages)}
      renderFooter={renderFooter}
      onInputTextChanged={(text) => text && onSetTyping()}
    />
  );
};

export default Chat;
