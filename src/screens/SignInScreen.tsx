import React, { useState } from "react";
import { View, Text, Button, Pressable, Image, StyleSheet } from "react-native";
import { Input, Overlay } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from '../redux/hooks';
import { addUser } from '../redux/features/user/userSlice'
import { auth } from "../configs/firebase";

export default function SignInScreen({ navigation }: any) {
	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const [overlayVisible, setOverlayVisible] = useState(false);
	const [overlayMessage, setOverlayMessage] = useState('');

	const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

	const dispatch = useAppDispatch();

	const _signInAsync = async () => {

		signInWithEmailAndPassword(auth, email, password)
		.then(async (userCredential) => {
			// Signed in 
			const user = userCredential.user;
			const idToken = await user.getIdToken().then(token => token);
			
			dispatch(addUser({
				displayName: user.displayName,
				email: user.email,
				photoURL: user.photoURL,
			}));
			
			await SecureStore.setItemAsync('userToken', idToken);
			navigation.navigate('App');
		})
		.catch((error) => {
			setOverlayMessage(error.message);
			toggleOverlay();
		});
  };

	return (
		<View style={styles.mainContainer}>
			<View style={styles.topContainer}>
				<Image style={styles.logo} source={require("../../assets/logo.png")}/>
				<Text style={styles.text}>Log In</Text>
			</View>
			<View>
				<View>
					<View style={styles.inputContainer}>
					<Input
							placeholder="email@address.com"
							label="Email"
							onChangeText={newEmail => setEmail(newEmail)}
							defaultValue={email}
							keyboardType="email-address"
							autoCapitalize='none'
							leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#00000026' }}
							autoCompleteType={undefined} />
						<Input
							placeholder="Password"
							label="Password"
							leftIcon={{ type: 'font-awesome', name: 'lock', color: '#00000026' }}
							onChangeText={newPassword => setPassword(newPassword)}
							defaultValue={password}
							secureTextEntry={true}
							autoCompleteType={undefined} />
					</View>
					<Pressable style={styles.submitButton} onPress={_signInAsync}>
						<Text style={styles.submitButtonText}>Log In</Text>
					</Pressable>
				</View>
				<View style={styles.bottomContainer}>
					<Text>Don't have an account?</Text>
					<Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
				</View>
			</View>
			<Overlay isVisible={overlayVisible} onBackdropPress={toggleOverlay}>
        <Text style={styles.overlayMessage}>{overlayMessage}</Text>
      </Overlay>
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
	},
	overlayMessage: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'red',
	},
});