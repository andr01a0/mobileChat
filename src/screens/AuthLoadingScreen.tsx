import React, { useEffect } from "react";
import {
  ActivityIndicator,
  StatusBar,
  View,
} from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function HomeScreen({ navigation }: any) {
	useEffect(() => {
    _bootstrapAsync();
  });

	const _bootstrapAsync = async () => {
    const userToken = await SecureStore.getItemAsync('userToken');

    navigation.navigate(userToken ? 'App' : 'Auth');
  };

	return (
		<View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
	);
}