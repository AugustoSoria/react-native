import { usePushNotifications } from "@/hooks/usePushNotifications";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

function Layout() {
  // just with physical devices
  usePushNotifications(); 

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