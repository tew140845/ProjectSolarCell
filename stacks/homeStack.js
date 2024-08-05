import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screen/home'
import VerificationScreen from "../screen/Verification";
import NewPasswordScreen from '../screen/NewPassword';
import SetTime from "../screen/Settime";

const Stack = createStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { fontSize: 25 },
      }}
    >
     
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
      <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
      <Stack.Screen name="Settime" component={SetTime} />
    </Stack.Navigator>
  );
};

export default Stacks;
