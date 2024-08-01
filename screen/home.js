import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

const apiheader = process.env.EXPO_PUBLIC_apiURI;
const Home = ({ navigation }) => {
  const Register = () => {
    navigation.navigate('RegistrationForm');
  };
  const Settime = () => {
    navigation.navigate('Settime');
  };

  return (
    <View style={styles.container}>
      <View style={styles.squarebackground}>
        <View style={styles.item}>
          <Text style={styles.additem}>+</Text>
        </View>
        <View style={styles.line}></View>
        <TouchableOpacity style={styles.Start}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.time} onPress={Settime}>
          <Text style={styles.buttonText}>Set Time</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};


//css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CBE9FF'
  },

  squarebackground: {
    width: '100%',
    height:'100%',
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

  item: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: '20%',
    marginLeft: '7%',
    backgroundColor: '#B3B3B3',
  },

  line: {
    width: '90%',
    height: 3,
    backgroundColor: '#000000',
    alignSelf: 'center',
    borderRadius: 100,
    marginTop: '50%',
  },
  Start: {
    width: '40%',
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#8BE79A',
    alignSelf: 'center',
    marginTop: '7%',
  },
  buttonText: {
    fontSize: 25,
    alignSelf: 'center',
  },
  time: {
    width: '40%',
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#9DF9FF',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: '7%',
  },

  additem: {
    alignSelf: 'center',
    position: 'absolute',
    fontSize: 70,

  }

});

export default Home;