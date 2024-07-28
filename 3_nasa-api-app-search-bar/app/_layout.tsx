import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

function Layout() {

  return (
    <>
      <StatusBar style={"light"} />
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
