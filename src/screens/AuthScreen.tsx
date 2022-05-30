import React from "react";
import { View, Text, Button } from "react-native";

export default function AuthScreen({ navigation }: any) {
	
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Authentication Screen</Text>
			<Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
			<Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
    </View>
	);
}