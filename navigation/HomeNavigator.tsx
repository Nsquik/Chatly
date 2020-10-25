import { createStackNavigator } from "@react-navigation/stack";
import ChatRoom from "@screens/ChatRoom";
import ListRooms from "@screens/ListRooms";
import { HomeStackParams } from "@type/navigation";
import * as React from "react";

const HomeStack = createStackNavigator<HomeStackParams>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="ListRooms" component={ListRooms} />
      <HomeStack.Screen name="ChatRoom" component={ChatRoom} />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
