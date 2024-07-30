import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

const SetTime = ({ navigation }) => {
  const Home = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.squarebackground}>
        <View style={styles.circlebackground}>
          <Text style={styles.title}>Time</Text>
        </View>

        <TouchableOpacity style={styles.number}>
          <Text style={styles.timeText}>00 : 00</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>

        <TouchableOpacity style={styles.time} onPress={Home}>
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
    width: '90%',
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    marginTop: '25%',
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

  line: {
    width: '90%',
    height: '1%',
    backgroundColor: '#545454',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: '40%',
  },
  
  buttonText: {
    fontSize: 30,
    alignSelf: 'center',
  },
  time: {
    width: '50%',
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#9DF9FF',
    alignSelf: 'center',
    marginBottom: '10%',
    marginTop: 70,
  },
  number: {
    width: '70%',
    height: 140,
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    marginTop: 120,
    marginBottom: '7%',
  },
  timeText: {
    width: '70%',
    height: 150,
    alignSelf: 'center',
    marginBottom: '7%',
    fontSize: 80,
  },

});

export default SetTime;