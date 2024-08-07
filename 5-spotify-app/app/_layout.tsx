import CustomHeaderBackBtn from "@/components/CustomHeaderBackBtn";
import GradientHeader from "@/components/GradientHeader";
import { Stack, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";

function Layout() {
  const pathname = usePathname();
  const headerTitle = pathname === "/"? "Search" : ""

  return (
    <>
      <StatusBar style={"light"} />
      <Stack
        screenOptions={{
          headerBackground: () => (
            <GradientHeader />
          ),
          headerTintColor: "white",
        }}>
        <Stack.Screen 
          name="(tabs)" 
          options={{
            headerTitle,
            headerLeft: () => <CustomHeaderBackBtn show={headerTitle === ""} />
          }}
        />
      </Stack>
    </>
  );
}

export default Layout;