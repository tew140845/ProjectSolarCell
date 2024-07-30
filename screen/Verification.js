import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

const apiheader = process.env.EXPO_PUBLIC_apiURI;
const VerificationScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const Login = () => {
        navigation.navigate('LoginScreen');
    };
    const NewPasswordScreen = () => {
        navigation.navigate('NewPasswordScreen');
    };

    return (
        <View style={styles.container}>
            <View style={styles.squarebackground}>
                <Text style={styles.title}>Enter Verification Code</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Code :"
                    onChangeText={setUsername}
                    value={username}
                />

                <TouchableOpacity style={styles.send} onPress={NewPasswordScreen}>
                    <Text style={styles.buttonText}>send</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Login} onPress={Login}>
                    <Text style={styles.Login}>Back to sign in</Text>
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
        marginBottom: 10,
        alignSelf: 'center',
        marginTop: 175,
    },

    send: {
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

    Login: {
        marginTop: 10,
        marginBottom: 20,
        fontSize: 20,
        color: 'blue',
        alignSelf: 'center',
    },
});

export default VerificationScreen;