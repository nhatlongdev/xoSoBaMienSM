import React, { Component } from 'react';
import { 
    Dimensions
 } from 'react-native';

 import {
     StackNavigator,
     DrawerNavigator
  } from 'react-navigation';

  import SplashComponent from './components/SplashComponent';
  import HomeComponent from './components/SplashComponent';
  import SlideMenuComponent from './components/SlideMenuComponent';

 export const HomeStack = StackNavigator({
     SplashComponent:{
         screen: SplashComponent,
         navigationOptions:{
             header:null
         }
     },
     HomeComponent:{
         screen: HomeComponent,
         navigationOptions:{
             header:null
         }
     }
 })

 export const SlideMenuStack = DrawerNavigator({
     Home: {
         screen: HomeStack
     }
 },
 {
    drawerWidth: Dimensions.get('window').width*70/100,
    drawerPosition: 'left',
    contentComponent: props => <SlideMenuComponent {...props}/>
 })