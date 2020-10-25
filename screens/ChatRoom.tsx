import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface Props {}

const ChatRoom: React.FC<Props> = ({}) => {
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

export default ChatRoom;
