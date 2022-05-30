import React, { useState } from "react";
import { View, Text, Button, Pressable, Image, StyleSheet } from "react-native";
import { Input } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import { validateEmail, isButtonDisabled } from "../utils/auth";

export default function SignUpScreen({ navigation }: any) {
	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const [rPassword, setRPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const _signUpAsync = async () => {
    await SecureStore.setItemAsync('userToken', 'abc');
    navigation.navigate('App');
  };
	
	return (
		<View style={styles.mainContainer}>
			<View style={styles.topContainer}>
				<Image style={styles.logo} source = {require("../../assets/logo.png")}/>
				<Text style={styles.text}>Sign up to get access</Text>
			</View>
			<View>
				<View>
					<View style={styles.inputContainer}>
						<Input
							placeholder="email@address.com"
							label="Email"
							onChangeText={(newEmail) : void => {
								setEmail(newEmail);
								setEmailError("");
								if (!validateEmail(newEmail)) {
									setEmailError("Invalid email address");
								}
							}}
							defaultValue={email}
							keyboardType="email-address"
							autoCapitalize='none'
							leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#00000026' }}
							autoCompleteType={'email'}
							renderErrorMessage={true}
							errorStyle={{ color: 'red' }}
							errorMessage={emailError} />
						<Input
							placeholder="Password"
							label="Password"
							leftIcon={{ type: 'font-awesome', name: 'lock', color: '#00000026' }}
							onChangeText={newPassword => setPassword(newPassword)}
							defaultValue={password}
							secureTextEntry={true}
							autoCompleteType={'password'} />
						<Input
							placeholder="Repeat Password"
							label="Repeat Password"
							leftIcon={{ type: 'font-awesome', name: 'lock', color: '#00000026' }}
							onChangeText={
								newRPassword => {
									setRPassword(newRPassword);
									setPasswordError("");
									if (newRPassword !== password) {
										setPasswordError("Passwords do not match");
									}
								}
							}
							defaultValue={rPassword}
							secureTextEntry={true}
							autoCompleteType={'password'}
							renderErrorMessage={true}
							errorStyle={{ color: 'red' }}
							errorMessage={passwordError} />
					</View>
					<Pressable 
					style={[styles.submitButton, isButtonDisabled(emailError, email, passwordError, password)?styles.submitButtonDisabled:null]} 
					onPress={_signUpAsync}
					disabled={isButtonDisabled(emailError, email, passwordError, password)} >
						<Text style={styles.submitButtonText}>Get access</Text>
					</Pressable>
				</View>
				<View style={styles.bottomContainer}>
					<Text>Already have a user?</Text>
					<Button title="Log In" onPress={() => navigation.navigate('SignIn')} />
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
		marginTop: 30,
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
		marginHorizontal: 20,
		shadowColor: '#00000026',
		shadowOffset: {width: 0, height: 3},
		shadowOpacity: 5,
  },
	submitButtonDisabled: {
		backgroundColor: '#BABADD',
	},
  submitButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
	inputContainer: {
		marginHorizontal: 20,
		marginVertical: 20,
	}
});