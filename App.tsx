import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { auth } from './src/configs/firebase'
import { createUserWithEmailAndPassword as createUser } from "firebase/auth";

function createUEP(email: string, password: string) {
  createUser(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  });
}

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello friend. 🤖</Text>
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
