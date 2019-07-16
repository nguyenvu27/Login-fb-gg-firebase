import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './screen/HomeScreen';
import Login from './screen/LoginScreen';
import ForgotPass from './screen/ForgotPassScreem';
import Registration from './screen/Registration';
import Loading from './screen/Loading';
import Main from './screen/Main';


const AppNavigation = createStackNavigator({
  



  Home,
  Login,
  ForgotPass,
  Registration,
  Loading, 
  Main,

},
// {
//   initialRouteName: 'Loading'
// }


)
export default createAppContainer(AppNavigation);

