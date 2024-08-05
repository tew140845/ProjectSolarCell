import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screen/home'
import VerificationScreen from "../screen/Verification";
import NewPasswordScreen from '../screen/NewPassword';
import StatisticScreen from "../screen/statistics";
import SetTime from "../screen/Settime";

const Stack = createStackNavigator();

const GraphStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { fontSize: 25 },
      }}
    >
     
      <Stack.Screen name="Statistics" component={StatisticScreen} />
     
    </Stack.Navigator>
  );
};

export default GraphStack;
