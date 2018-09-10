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
  import ResultLotteryComponent from './components/ResultLotteryComponent';
  import ScheduleRotateLottery from './components/ScheduleRotateLottery';
  import SoMoComponent from './components/SoMoComponent';

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
            header: null,
        }
    },
    ResultLotteryComponent:{
        screen:ResultLotteryComponent,
        navigationOptions:{
            header:null
        }
    },
    ScheduleRotateLottery:{
        screen:ScheduleRotateLottery,
        navigationOptions:{
            header:null
        }
    },
    SoMoComponent:{
        screen:SoMoComponent,
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
    drawerWidth: Dimensions.get('window').width*70/100,
    drawerPosition: 'left',
    disableOpenGesture: false,
    contentComponent: props => <SlideMenuComponent {...props}/>
  });