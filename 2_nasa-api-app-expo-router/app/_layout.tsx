import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import React from "react";

function Layout() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#0c1854" },
          headerTintColor: "white",
          headerTitleAlign: "center",
        }}
      />
    </>
  );
}

export default Layout;
