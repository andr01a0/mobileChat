import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }: any) {
	
	return (
		<View style={styles.container}>
      <Text style={styles.text}>Sign In Screen</Text>
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