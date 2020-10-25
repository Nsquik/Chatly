import { createStackNavigator } from "@react-navigation/stack";
import ChatRoom from "@screens/ChatRoom";
import ListRooms from "@screens/ListRooms";
import { HomeStackParams } from "@type/navigation";
import * as React from "react";
import { View } from "react-native";
import styled from "styled-components";

const StyledView = styled(View)`
  -webkit-box-shadow: 0px 6px 7px -1px rgba(0, 0, 0, 0.32);
  -moz-box-shadow: 0px 6px 7px -1px rgba(0, 0, 0, 0.32);
  box-shadow: 0px 6px 7px -1px rgba(0, 0, 0, 0.32);
  border-bottom-left-radius: 20;
  border-bottom-right-radius: 20;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const HomeStack = createStackNavigator<HomeStackParams>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName="ListRooms"
      screenOptions={{
        headerTitleAlign: "center",
        headerTransparent: true,
        headerBackground: () => (
          <View
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,
              elevation: 24,
              backgroundColor: "white",
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          />
        ),
      }}
    >
      <HomeStack.Screen
        name="ListRooms"
        component={ListRooms}
        options={{ title: "Chatly rooms" }}
      />
      <HomeStack.Screen name="ChatRoom" component={ChatRoom} />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
