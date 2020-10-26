import { useUserInfo } from "@hooks/useUserInfo";
import React from "react";
import { GiftedChat } from "react-native-gifted-chat";

export interface Props {}

const Chat: React.FC<Props> = ({}) => {
  const { data, loading, getFullName } = useUserInfo();
  const myUserId = data && data.user._id;

  return <GiftedChat user={{ _id: myUserId || "0", name: getFullName() }} />;
};

export default Chat;
