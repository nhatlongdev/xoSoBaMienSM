import React, { Component } from 'react';
import { 
    Dimensions
 } from 'react-native';
  import {
    StackNavigator,
    DrawerNavigator,
  } from 'react-navigation';

  import SplashComponent from './components/SplashComponent';
  import HomeComponent from './components/HomeComponent';
  import SlideMenuComponent from './components/SlideMenuComponent';
  import ResultLottery1Component from './components/ResultLottery1Component';

  export const HomeStack = StackNavigator({
    SplashComponent: {
        screen: SplashComponent,
        navigationOptions: {
            header: null
        }
    },
    HomeComponent:{
        screen: HomeComponent,
        navigationOptions: {
            header: null
        }
    },
    ResultLottery1Component:{
        screen:ResultLottery1Component,
        navigationOptions:{
            header:null
        }
    }
})

export const SlideMenuStack = DrawerNavigator({
    Home: {
      screen: HomeStack,
    },
  },
  {
    drawerWidth: Dimensions.get('window').width*80/100,
    drawerPosition: 'left',
    contentComponent: props => <SlideMenuComponent {...props}/>
  });
