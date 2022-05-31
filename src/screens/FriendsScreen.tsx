import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FriendsScreen({ navigation }: any) {
	
	return (
		<View style={styles.container}>
			<Text>Friends Screen</Text>
    </View>
	);
}

const styles = StyleSheet.create({
	container: { 
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'space-around', 
	},
});