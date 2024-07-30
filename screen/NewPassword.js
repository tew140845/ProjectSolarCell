import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

const apiheader = process.env.EXPO_PUBLIC_apiURI;
const ForgotPasswordScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const Login = () => {
        navigation.navigate('LoginScreen');
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.squarebackground}>
                <Text style={styles.title}>Enter New Password</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Usrename :"
                    onChangeText={setUsername}
                    value={username}
                />

                <TextInput
                    style={styles.input2}
                    placeholder="Password :"
                    onChangeText={setPassword}
                    value={username}
                />

                <TouchableOpacity style={styles.Confirm} onPress={Login}>
                    <Text style={styles.buttonText}>Confirm</Text>
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
        marginTop: 15,
    },


    input: {
        width: '90%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 40,
        alignSelf: 'center',
        marginTop: 175,
    },
    input2: {
        width: '90%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        alignSelf: 'center',
        
    },

    Confirm: {
        width: '30%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#9DF9FF',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 25,
    },

    buttonText: {
        fontSize: 20,
        alignSelf: 'center',
    },

    Login: {
        marginTop: 10,
        marginBottom: 20,
        fontSize: 20,
        color: 'blue',
        alignSelf: 'center',
    },
});

export default ForgotPasswordScreen;