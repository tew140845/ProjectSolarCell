import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity ,Alert} from 'react-native';


const apiheader = process.env.EXPO_PUBLIC_apiURI;
const RegistrationForm = ({navigation}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Confirmpassword, setConfirmpassword] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');

  const fetchaddUser = async () => {
    if (password !== Confirmpassword) {
      Alert.alert('', 'รหัสผ่านไม่ตรงกัน', [{ text: 'OK', onPress: () => {} }]);
    } else {
      console.log('User registered successfully');
      console.log('Username: ', username);
      console.log('Email: ', Email);
      console.log('Password: ', password);
      console.log('Phonenumber: ', Phone);

      try {
        const fetchOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: username, email: Email, password: password, phon: Phone })
        };
        const response = await fetch(apiheader + '/Login/addusername', fetchOptions);
        const result = await response.json();
        console.log(result);

        navigation.navigate('LoginScreen');
        Alert.alert('', 'สมัครเสร็จสิ้น', [{ text: 'OK', onPress: () => {} }]);
      } catch (error) {
        console.error(error);
      }
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.squarebackground}>
        <View style={styles.circlebackground}>
          <Text style={styles.title}>Register</Text>
        </View>
        <Text style={styles.UsernameText}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username :"
          onChangeText={text => setUsername(text)}
          value={username}

        />
        <Text style={styles.PasswordText}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password :"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />

        <Text style={styles.PasswordText}>Confirm password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm password :"
          secureTextEntry
          onChangeText={text => setConfirmpassword(text)}
          value={Confirmpassword}
        />

        <Text style={styles.PasswordText}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email :"
          onChangeText={text => setEmail(text)}
          value={Email}
        />

        <Text style={styles.PasswordText}>Phone</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone :"
          onChangeText={text => setPhone(text)}
          value={Phone}
        />

        <View style={styles.line}></View>

        <TouchableOpacity style={styles.Register} onPress={fetchaddUser}>
          <Text style={styles.RegisterText}>Register</Text>
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

  Register: {
    width: '30%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#9DF9FF',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 15,
  },
  RegisterText: {
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default RegistrationForm;
