import useColorScheme from "@hooks/useColorScheme";
import Navigation from "@nav/index";
import GlobalProviders from "@res/GlobalProviders";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <GlobalProviders>
      <Navigation colorScheme={colorScheme} />
      <StatusBar style="auto" />
    </GlobalProviders>
  );
}
