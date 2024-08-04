import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

function Layout() {
  return (
    <>
      <StatusBar style={"light"} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#0c1854" },
          headerTintColor: "white",
          headerShown: false,
        }}
      />
    </>
  );
}

export default Layout;