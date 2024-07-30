import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screen/login';
import HomeScreen from './screen/home';
import RegistrationForm from './screen/Register';
import ForgotPasswordScreen from './screen/ForgotPassword';
import VerificationScreen from './screen/Verification';
import NewPasswordScreen from './screen/NewPassword';
import SetTime from './screen/Settime';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign:'center',headerTitleStyle:{fontSize:25}}}> 
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RegistrationForm" component={RegistrationForm}  />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}  />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen}  />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen}  />
        <Stack.Screen name="Settime" component={SetTime}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
