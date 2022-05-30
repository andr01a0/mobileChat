import React, { useEffect } from "react";
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configs/firebase";

export default function HomeScreen({ navigation }: any) {

  const _bootstrapAsync = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate('App');
      } else {
        navigation.navigate('Auth');
      }
    });
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