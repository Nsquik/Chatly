import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import React from "react";

import LoginScreen from "./Login";
import RegisterScreen from "./Register";

const { Navigator, Screen } = createBottomTabNavigator();

export interface Props {
  navigation: any;
}

const BottomTabBar = ({ navigation, state }: any) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="LOGIN" />
    <BottomNavigationTab title="REGISTER" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Login" component={LoginScreen} />
    <Screen name="Register" component={RegisterScreen} />
  </Navigator>
);

const Auth: React.FC<Props> = ({ navigation }) => {
  return <TabNavigator />;
};

export default Auth;
