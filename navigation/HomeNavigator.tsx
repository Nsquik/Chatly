import { API_KEY } from "@env";
import { useStorageState } from "@hooks/useStorageState";
import { createStackNavigator } from "@react-navigation/stack";
import Auth from "@screens/Auth/Auth";
import ChatRoom from "@screens/ChatRoom";
import ListRooms from "@screens/ListRooms";
import { HomeStackParams } from "@type/navigation";
import React, { useState } from "react";
import { View } from "react-native";

const HomeStack = createStackNavigator<HomeStackParams>();

function HomeNavigator() {
  const { token } = useStorageState();
  console.log(API_KEY);

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
      {token || API_KEY ? (
        <>
          <HomeStack.Screen
            name="ListRooms"
            component={ListRooms}
            options={{ title: "Chatly rooms" }}
          />
          <HomeStack.Screen
            name="ChatRoom"
            component={ChatRoom}
            // @ts-ignore
            options={({ route }) => ({ title: route?.params?.roomName })}
          />
        </>
      ) : (
        <>
          <HomeStack.Screen name="Auth" component={Auth} />
        </>
      )}
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
