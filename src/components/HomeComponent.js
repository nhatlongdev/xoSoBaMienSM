import React, { Component } from 'react';
import { 
    View,
    Text
 } from 'react-native';

 export default class HomeComponent extends Component {
     render() {
         return (
             <View style={{backgroundColor:'red'}}>
                <Text>Home</Text>
             </View>
         );
     }
 }