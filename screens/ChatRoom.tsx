import { useChatroomState } from "@hooks/useChatroomState";
import { SUBSCRIBE_MESSAGE_ADDED } from "@queries/chatRoom";
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
  const { loadMessages } = state;
  const {
    called,
    refetch,
    loading,
    data,
    error,
    subscribeToMore,
  } = state.loadMessagesResult;
  // console.log(`Loading: ${state.loadMessagesResult.loading}`);
  useEffect(() => {
    if (!called) {
      state.checkAndLoad(roomObj);
    }
  }, [loadMessages, called]);

  useEffect(() => {
    if (called) {
      refetch && refetch();
    }
  }, [refetch, called]);

  useEffect(() => {
    const messagesUnsubscribe =
      subscribeToMore &&
      subscribeToMore({
        document: SUBSCRIBE_MESSAGE_ADDED,
      });

    return () => {
      messagesUnsubscribe && messagesUnsubscribe();
    };
  }, [state]);

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
