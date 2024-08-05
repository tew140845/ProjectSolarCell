
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screen/login";
import RegistrationForm from "./screen/Register";
import ForgotPasswordScreen from "./screen/ForgotPassword";
import * as SecureStore from 'expo-secure-store'
import Tabs from "./tabs/tabs";
import { useState,useEffect} from "react";
const Stack = createStackNavigator();

export default function App() {
  const [UserAuth, setUserAuth] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const getLoginInformation = async () => {
    setisLoading(true);
    try {
      user = await SecureStore.getItemAsync("userAuth");
      setUserAuth(user);
      console.log(user);
    } catch (e) {
      console.log(e);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    getLoginInformation();
  }, []);

  if (!isLoading) {
    if (UserAuth == null) {
      return (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#ff8a24" },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegistrationForm"
              component={RegistrationForm}
            />
            <Stack.Screen
              name="ForgotPasswordScreen"
              component={ForgotPasswordScreen}
            />
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#ff8a24" },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={({ route }) => ({ headerShown: false })}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
