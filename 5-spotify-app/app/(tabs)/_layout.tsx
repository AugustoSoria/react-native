import { Tabs } from "expo-router";
import { Pressable } from "react-native";
import CustomTabBar from "@/components/CustomTabBar";

function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: "#000000d9" },
        headerShown: false,
      }}
      tabBar={() => <CustomTabBar />}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Search",
        }}
      />
      <Tabs.Screen 
        name="(category)/[categoryName]"
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Your Library",
        }}
      />
    </Tabs>
  );
}

export default TabsLayout;