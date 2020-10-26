import { useChatroomState } from "@hooks/useChatroomState";
import { useUserInfo } from "@hooks/useUserInfo";
import { RouteProp } from "@react-navigation/native";
import { HomeStackParams } from "@type/navigation";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

export interface Props {
  route: RouteProp<HomeStackParams, "ChatRoom">;
}

const ChatRoom: React.FC<Props> = ({ route }) => {
  const { params: roomObj } = route;
  const Chatroom = useChatroomState();
  const { data, loading, getFullName } = useUserInfo();
  const { loadMessages, checkAndLoad, setChatOpen, state } = Chatroom;
  const { messages } = state;
  const { called } = Chatroom.loadMessagesResult;
  const myUserId = data && data.user._id;

  useEffect(() => {
    Chatroom.checkAndLoad(roomObj);
    setChatOpen(true);
    return () => {
      setChatOpen(false);
    };
  }, [loadMessages, called, checkAndLoad]);

  const newMessages = messages.map((item) => ({
    ...item,
    user: {
      ...item.user,
      name: `${item.user.firstName} ${item.user.lastName}`,
    },
  }));

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={newMessages}
        user={{ _id: myUserId || "0", name: getFullName() }}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: "25%",
  },
});

export default React.memo(ChatRoom);
