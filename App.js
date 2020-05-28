import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screen/Login'
import Home from './Screen/Home'
import Signup from './Screen/Signup'
import SignUp from './Screen/Signup';

 function App() {
  const Stack = createStackNavigator()
  return (
  
 <Stack.Navigator headerMode='screen'>
<Stack.Screen name="Login" component={Login} />
<Stack.Screen name="Home" component={Home} />
<Stack.Screen name="Signup" component={SignUp} />
</Stack.Navigator>


  );
}

export default ()=>(<NavigationContainer>
  <App />
</NavigationContainer>)

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
