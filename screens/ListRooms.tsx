import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface Props {}

const mockedRooms = [
  {
    id: "9652cf09-e839-4ca9-9bed-8138fbd3c5b9",
    name: "The one with the Penny's recruitment task",
  },
  {
    id: "d1d6a289-1301-4ee7-b01d-23278eb2a09f",
    name: "The one with article for Penny",
  },
  {
    id: "e9084a9a-420b-40dd-b309-7c4962cfac9e",
    name: "The one with some links for Penny",
  },
];

const ListRooms: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>LIST ROOMS MOCK</Text>
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

export default ListRooms;
