import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from "./src/screens/RegisterScreen";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <ReactQueryDevtools initialIsOpen={false} />
      </Provider>
    </QueryClientProvider>
  );
}