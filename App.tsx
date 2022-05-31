import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';
import FriendsScreen from './src/screens/FriendsScreen';

const AppStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        headerShown: false
      }),
    },
    Friends: FriendsScreen,
  },
);

const AuthStack = createStackNavigator({ 
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: () => ({
      headerShown: false
    }),
  }, 
  SignIn: {
    screen: SignInScreen,
    navigationOptions: () => ({
      headerShown: false
    }),
  }, 
});

const queryClient = new QueryClient();

const AppContainer = createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  })
);

export default function App() {
  
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AppContainer />
        </QueryClientProvider>
      </Provider>
    </SafeAreaProvider>
  );
}