import React, { useEffect } from "react";
import { ActivityIndicator, StatusBar, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function HomeScreen({ navigation }: any) {

  const _bootstrapAsync = async () => {
    await SecureStore.deleteItemAsync('userToken');
    const userToken = await SecureStore.getItemAsync('userToken');

    navigation.navigate(userToken ? 'App' : 'Auth');
  };

	useEffect(() => {
    _bootstrapAsync();
  }, [_bootstrapAsync]);

	return (
		<View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
	);
}