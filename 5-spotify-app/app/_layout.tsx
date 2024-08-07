import GradientHeader from "@/components/GradientHeader";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

function Layout() {
  return (
    <>
      <StatusBar style={"light"} />
      <Stack
        screenOptions={{
          headerBackground: () => (
            <GradientHeader color={"black"} />
          ),
          headerTintColor: "white",
        }}>
        <Stack.Screen 
          name="(tabs)" 
          options={{
            headerTitle: "Buscar",
          }}
        />
        <Stack.Screen 
          name="[categoryName]" 
          options={{
            headerTitle: "",
          }}
        />

      </Stack>
    </>
  );
}

export default Layout;