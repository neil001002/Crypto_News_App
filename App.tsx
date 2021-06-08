import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Webview from "./Screen/Webview";

import Tab1 from "./Screen/Tab1";
import Tab2 from "./Screen/Tab2";
import Tab3 from "./Screen/Tab3";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          // backgroundColor: "red",
          borderBottomStartRadius: 15,
          borderBottomEndRadius: 15,
        },
      }}
    >
      <Tab.Screen name="Trending" component={Tab1} />
      <Tab.Screen name="Bitcoin" component={Tab2} />
      <Tab.Screen name="Ethereum" component={Tab3} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Webview" component={Webview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
