import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

const apiheader = process.env.EXPO_PUBLIC_apiURI;
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Register = () => {
    navigation.navigate('RegistrationForm');
  };

  const Forgot = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  const Home = async () => {
    if (!username || !password) {
      Alert.alert('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน');
      return;
    }
    const credentials = {
      username: username,
      password: password,
    };
    try {
      const response = await axios.post(apiheader + '/Login/auth', credentials);
      const result = await response.data;
      console.log(result)
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.squarebackground}>
        <View style={styles.circlebackground}>
          <Text style={styles.title}>login</Text>
        </View>
        <Text style={styles.UsernameText}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username :"
          onChangeText={setUsername}
          value={username}
        />
        <Text style={styles.PasswordText}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password :"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />

        <View style={styles.line}></View>
        <TouchableOpacity style={styles.registerPassword} onPress={Forgot}>
          <Text style={styles.registerPassword}>Forgot your password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.login} onPress={Home}>
          <Text style={styles.buttonText}>login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.register} onPress={Register}>
          <Text style={styles.registerPassword}>register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


//css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CBE9FF'
  },

  squarebackground: {
    width: '80%',
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },

  circlebackground: {
    width: 125,
    height: 125,
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: -65,
    backgroundColor: '#8FDEFF',
  },

  title: {
    fontSize: 30,
    marginBottom: 30,
    position: 'absolute',
    alignSelf: 'center',
  },

  UsernameText: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 70,
    marginLeft: 15,
  },

  PasswordText: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 15,
  },

  input: {
    width: '90%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },

  line: {
    width: '90%',
    height: '1%',
    backgroundColor: '#545454',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
  },

  registerPassword: {
    fontSize: 20,
    marginTop: 10,
    color: 'blue',
    alignSelf: 'center',
  },

  login: {
    width: '30%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#9DF9FF',
    alignSelf: 'center',
    marginTop: 25,
  },

  buttonText: {
    fontSize: 20,
    alignSelf: 'center',
  },

  register: {
    marginTop: 10,
    color: 'blue',
    marginBottom: 15,
  },
});

export default LoginScreen;