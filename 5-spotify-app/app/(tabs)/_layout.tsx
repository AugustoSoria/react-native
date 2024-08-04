import { Tabs } from "expo-router";

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: "#000000d9" },
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white"
      }}
    >
      {/* <Tabs.Screen
        // name="index"
        options={{
          title: "Inicio",
          tabBarIcon: () => <Octicons name="home" size={24} color="black" />
        }}
      /> */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Buscar",
          tabBarIcon: () => <FontAwesome name="search" size={24} color="white" />,
        }}
      />
      {/* <Tabs.Screen
        // name="index"
        options={{
          title: "Tu biblioteca",
          tabBarIcon: () => <MaterialIcons name="library-music" size={24} color="black" />
        }}
      /> */}
    </Tabs>
  );
}

export default TabsLayout;