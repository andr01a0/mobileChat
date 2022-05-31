import React, { useEffect } from "react";
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configs/firebase";
import { useAppDispatch } from '../redux/hooks';
import { addUser } from '../redux/features/user/userSlice'
import * as SecureStore from 'expo-secure-store';

export default function HomeScreen({ navigation }: any) {

  const dispatch = useAppDispatch();

  const _bootstrapAsync = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idToken = await user.getIdToken().then(token => token);
        
        dispatch(addUser({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        }));
        
        await SecureStore.setItemAsync('userToken', idToken);
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