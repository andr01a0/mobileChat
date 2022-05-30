import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import * as SecureStore from 'expo-secure-store';

export default function SignIn({ navigation }: any) {
	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

	const _signInAsync = async () => {
    await SecureStore.setItemAsync('userToken', 'abc');
    navigation.navigate('App');
  };
	
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Sign Up Screen</Text>
			<TextInput
				style={styles.textInput}
				placeholder="Insert email"
				onChangeText={newEmail => setEmail(newEmail)}
				defaultValue={email}
				keyboardType="email-address"
				autoCapitalize='none'
			/>
			<TextInput
				style={styles.textInput}
				placeholder="Insert password"
				onChangeText={newPassword => setPassword(newPassword)}
				defaultValue={password}
				secureTextEntry={true}
			/>
      <Button title="Sign In" onPress={_signInAsync} />
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
	textInput: {
		height: 50,
	},
});