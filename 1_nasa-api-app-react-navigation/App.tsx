import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import Home from "./components/Home";
import SelectedArticle from "./components/SelectedArticle";
import { StatusBar } from "expo-status-bar";
import { RootStackParams } from "./model/RootStackParams";

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <>
      <StatusBar style="light"/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={headerStyles}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen 
            name="SelectedArticle" 
            component={SelectedArticle} 
            options={({ route }) => ({ title: route.params.name })}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const headerStyles: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#0c1854',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center'
}
