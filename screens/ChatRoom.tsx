import { useChatroomState } from "@hooks/useChatroomState";
import { RouteProp } from "@react-navigation/native";
import { ACTION_TYPES } from "@res/contexts/chatroom/types";
import { HomeStackParams } from "@type/navigation";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export interface Props {
  route: RouteProp<HomeStackParams, "ChatRoom">;
}

const ChatRoom: React.FC<Props> = ({ route }) => {
  const { params: roomObj } = route;
  const state = useChatroomState();
  useEffect(() => {
    state.dispatch({
      type: ACTION_TYPES.CHANGE_ROOM,
      payload: { value: roomObj },
    });
    state.loadMessages();
    return () => {};
  }, []);
  // console.log(state.loadMessagesResult.data?.room.messages);
  return (
    <View style={styles.container}>
      <Text>CHAT ROOM MOCK</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default React.memo(ChatRoom);
