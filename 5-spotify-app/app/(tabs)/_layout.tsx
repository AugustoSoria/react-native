import { Tabs } from "expo-router";

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable } from "react-native";

function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: "#000000d9" },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: () => <Octicons name="home" size={24} color="white" />,
          tabBarButton: (props) => <Pressable {...props} onPress={() => {}} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Search",
          tabBarIcon: () => <FontAwesome name="search" size={24} color="white" />,
        }}
      />
      <Tabs.Screen 
        name="(category)/[categoryName]" 
        options={{
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Your Library",
          tabBarIcon: () => <MaterialIcons name="library-music" size={24} color="white" />,
          tabBarButton: (props) => <Pressable {...props} onPress={() => {}} />,
        }}
      />
    </Tabs>
  );
}

export default TabsLayout;