import Chat from "@components/Chat";
import { StyledLayout as Layout } from "@components/Layout";
import { useChatroomState } from "@hooks/useChatroomState";
import { RouteProp } from "@react-navigation/native";
import { HomeStackParams } from "@type/navigation";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";

export interface Props {
  route: RouteProp<HomeStackParams, "ChatRoom">;
}

const ChatRoom: React.FC<Props> = ({ route }) => {
  const { params: roomObj } = route;
  const Chatroom = useChatroomState();
  const { loadMessages, checkAndLoad, setChatOpen } = Chatroom;
  const { called } = Chatroom.loadMessagesResult;

  useEffect(() => {
    Chatroom.checkAndLoad(roomObj);
    setChatOpen(true);
    return () => {
      setChatOpen(false);
    };
  }, [loadMessages, called, checkAndLoad]);

  return (
    <Layout level="1">
      <Chat />
      <StatusBar style="auto" />
    </Layout>
  );
};

export default React.memo(ChatRoom);
