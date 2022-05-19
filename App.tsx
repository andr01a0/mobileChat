import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';
import { auth } from './src/configs/firebase'
import { createUserWithEmailAndPassword as createUser } from "firebase/auth";

function createUEP(email: string, password: string) {
  createUser(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  });
};

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello friend. 🤖</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Insert email"
        onChangeText={newEmail => setEmail(newEmail)}
        defaultValue={email}
        keyboardType="email-address"
        autoCapitalize='none'
      />
      <TextInput
        style={{height: 40}}
        placeholder="Insert password"
        onChangeText={newPassword => setPassword(newPassword)}
        defaultValue={password}
        secureTextEntry={true}
      />
      <Button
        onPress={() => {
          createUEP(email, password);
        }}
        title="Create User"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
  },
});
