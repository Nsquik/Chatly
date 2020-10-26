import { useStorageState } from "@hooks/useStorageState";
import { useUserInfo } from "@hooks/useUserInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Button, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const StyledView = styled(View)`
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  background-color: ${(props: { bgColor: string }) => `${props.bgColor}EB`};
  shadow-color: #000;
  shadow-offset: 0 250px;
  shadow-opacity: 0.8;
  shadow-radius: 16px;
  elevation: 24;
`;

const UserBottomTab = () => {
  const theme = useTheme();
  const { getFullName } = useUserInfo();
  const { removeToken } = useStorageState();
  return (
    <StyledView bgColor={theme["background-basic-color-2"]}>
      <Text>Logged in as: {getFullName() || ""} </Text>
      <Button
        appearance="ghost"
        status="danger"
        style={{ width: "100%", paddingTop: 5 }}
        onPress={async () => {
          await removeToken();
        }}
      >
        Log out
      </Button>
    </StyledView>
  );
};

export default UserBottomTab;
