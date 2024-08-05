import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import axios from "axios";

const apiheader = process.env.EXPO_PUBLIC_apiURI;
const StatisticScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.battery}>
        <View style={[styles.batteryItem]}>
          <Image source={{uri:"https://cdn-icons-png.freepik.com/512/6004/6004684.png"}} style={{width:50,height:50}} />
          <Text>999.50 kwh</Text>
          <Text>Today's Consumption</Text>

        </View>
        <View style={{borderEndWidth:2,height:80,width:2}}>
        </View>

        <View style={styles.batteryItem}>
        <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/2922/2922397.png"}} style={{width:50,height:50}} />
          <Text>999.50 kwh</Text>
          <Text>Self-consumption energy</Text>
        </View>
      </View>

      <View style={styles.Energymanagement}>
        <Text>Energy Management</Text>
        <TouchableOpacity style={styles.Day}>
            <Text style={styles.buttonText}>Day</Text>
          </TouchableOpacity>
          
        <TouchableOpacity style={styles.Month}>
            <Text style={styles.buttonText}>Month</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.Year}>
            <Text style={styles.buttonText}>Year</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.graph}></View>
    </View>
  );
};

//css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  battery: {
    height: 120,
    marginTop: 10,
    marginHorizontal: 20,
    width: "90%",
    borderBottomWidth: 2,
    flexDirection: "row",
    alignItems:"center"
  },
  Energymanagement: {
    height: 140,
    marginTop: 10,
    marginHorizontal: 20,
    width: "90%",
    borderBottomWidth: 2,
  },
  graph: {
    height: 250,
    marginTop: 10,
    marginVertical: 20,
    width: "90%",
  },
  batteryItem:{
    height:115,
    width:'50%',
    marginBottom:5,
    alignItems:"center",
    alignContent:"center",
    justifyContent:"center"
  },
  Day: {
    width: "20%",
    height: 60,
    alignContent:"center",
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    padding:10,
    backgroundColor: "#8FDEFF",
    alignSelf: "left",
    marginTop: "7%",
  },
  Month: {
    width: "20%",
    height: 60,
    alignContent:"center",
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    padding:10,
    backgroundColor: "#B3B3B3",
    alignSelf: "center",
    
  },
  Year: {
    width: "20%",
    height: 60,
    alignContent:"center",
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    padding:10,
    backgroundColor: "#B3B3B3",
    alignSelf: "right",
    
    
  },

});

export default StatisticScreen;
