import React, { useState } from "react";
import { View, Text, TextInput, Button, Pressable, Image, StyleSheet } from "react-native";
import * as SecureStore from 'expo-secure-store';

export default function SignInScreen({ navigation }: any) {
	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

	const _signInAsync = async () => {
    await SecureStore.setItemAsync('userToken', 'abc');
    navigation.navigate('App');
  };
	
	return (
		<View style={styles.mainContainer}>
			<View style={styles.topContainer}>
				<Image style={styles.logo} source = {require("../../assets/logo.png")}/>
				<Text style={styles.text}>Log In</Text>
			</View>
			<View>
				<View>
					<TextInput
						placeholder="Insert email"
						onChangeText={newEmail => setEmail(newEmail)}
						defaultValue={email}
						keyboardType="email-address"
						autoCapitalize='none'
					/>
					<TextInput
						placeholder="Insert password"
						onChangeText={newPassword => setPassword(newPassword)}
						defaultValue={password}
						secureTextEntry={true}
					/>
					<Pressable style={styles.submitButton} onPress={_signInAsync}>
						<Text style={styles.submitButtonText}>Log In</Text>
					</Pressable>
				</View>
				<View style={styles.bottomContainer}>
					<Text>Don't have an account?</Text>
					<Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
				</View>
			</View>
    </View>
	);
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
	topContainer: {
		marginTop: 80,
	},
	bottomContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 40,
		marginLeft: 20,
	},
	logo: {
		alignSelf: 'center',
	},
	submitButton: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#5050A5',
  },
  submitButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});