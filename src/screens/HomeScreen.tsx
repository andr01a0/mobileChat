import React, { useState, useEffect }  from "react";
import * as SecureStore from 'expo-secure-store';
import { signOut } from "firebase/auth";
import { auth } from "../configs/firebase";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { Overlay, Avatar } from 'react-native-elements';
import { useAppSelector } from '../redux/hooks';

export default function HomeScreen({ navigation }: any) {
	const [overlayVisible, setOverlayVisible] = useState(false);
	const [overlayMessage, setOverlayMessage] = useState('');

	const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

	const _signOutAsync = async () => {

		signOut(auth).then(async () => {
			// Sign-out successful.
			await SecureStore.deleteItemAsync('userToken');
    	navigation.navigate('Auth');
		}).catch((error) => {
			// An error happened.
			setOverlayMessage(error.message);
			toggleOverlay();
		});
  };
	
	return (
		<View style={styles.container}>
			<Avatar rounded size="xlarge"
				source={{
					uri: useAppSelector(state => state.user.photoURL),
				}}
			/>
			<View>
				<Text>Display Name: {useAppSelector(state => state.user.displayName)}</Text>
				<Text>Email: {useAppSelector(state => state.user.email)}</Text>
			</View>
			<View>
				<Button title="Log Out" onPress={_signOutAsync} />
			</View>
			<Overlay isVisible={overlayVisible} onBackdropPress={toggleOverlay}>
        <Text style={styles.overlayMessage}>{overlayMessage}</Text>
      </Overlay>
    </View>
	);
}

const styles = StyleSheet.create({
	container: { 
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'space-around', 
	},
	overlayMessage: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'red',
	},
});