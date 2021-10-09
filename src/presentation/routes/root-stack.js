import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GPSLiveScreen from "../screens/gps-live-screen";
import { BottomTab } from "./bottom-tab-bar";
import LineReviewScreen from "../screens/line-review-screen";
import WelcomeScreen from "../screens/welcome-screen";

const Stack = createStackNavigator();

export function RootStack({ userLoggedIn }) {
  console.log("TEST: userloggedin rootstack ", userLoggedIn);
  return (
    <Stack.Navigator
      initialRouteName={userLoggedIn ? "Tab" : "Welcome"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Tab" component={BottomTab} />
      <Stack.Screen name="GPSLive" component={GPSLiveScreen} />
      <Stack.Screen name="LINE_REVIEW" component={LineReviewScreen} />
    </Stack.Navigator>
  );
}
