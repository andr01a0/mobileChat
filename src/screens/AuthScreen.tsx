import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function AuthScreen({ navigation }: any) {
	
	return (
		<View style={styles.container}>
      <Text style={styles.text}>Authentication Screen</Text>
			<Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
			<Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
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