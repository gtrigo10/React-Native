import React from 'react';
import Login from "./components/Login/Login";
import Home from "./components/Home/Home"
import 'react-native-gesture-handler';
import{NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack'


const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} options={{tabBarVisible: false}}/>
        <Stack.Screen name="Home" component={Home} options={{tabBarVisible: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

