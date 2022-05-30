import React from "react";
import * as SecureStore from 'expo-secure-store';
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }: any) {

	const _signOutAsync = async () => {
		await SecureStore.deleteItemAsync('userToken');
    navigation.navigate('Auth');
  };
	
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
			<View>
				<Button title="Log Out" onPress={_signOutAsync} />
			</View>
    </View>
	);
}