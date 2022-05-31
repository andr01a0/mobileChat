import React from "react";
import { useQuery } from 'react-query'
import { View, FlatList, Text, StyleSheet } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../configs/firebase";

const fetchFriends = async () => {
	const querySnapshot = await getDocs(collection(firestore, "friends"));
	return querySnapshot.docs.map(doc => doc.data());
}

export default function FriendsScreen({ navigation }: any) {
	const { isLoading, isError, data, error }: any = useQuery('friends', fetchFriends)

	if (isLoading) {
		return (
		<View style={styles.container}>
			<Text style={styles.centerText}>Loading...</Text>
		</View>
		);
	}

	if (isError) {
		return (
		<View style={styles.container}>
			<Text style={styles.centerText}>Error: {error.message}</Text>
		</View>
		);
	}
	
	return (
		<View style={styles.container}>
			<FlatList
        data={data}
        renderItem={({item}) => <Text style={styles.item}>{item.email}</Text>}
      />
    </View>
	);
}

const styles = StyleSheet.create({
	container: { 
		flex: 1, 
		alignItems: 'stretch', 
		justifyContent: 'center', 
		alignContent: 'center',
	},
	item: {
		textAlign: 'center',
		padding: 10,
		fontSize: 18,
		height: 44,
		borderWidth: 1,
		borderColor: '#ddd',
		backgroundColor: 'white',
	},
	centerText: {
		textAlign: 'center',
		padding: 10,
		fontSize: 18,
		height: 44,
		borderWidth: 1,
		borderColor: '#ddd',
		backgroundColor: 'white',
	},
});