import React, { Component } from 'react';
import { 
    View,
    Text
 } from 'react-native';

 export default class ItemRowDauDuoi extends Component {
     render() {
         return (
            <View style={this.props.styleView}>
                <Text style={this.props.styleDau}>{this.props.dau}</Text>
                <View style={{borderLeftColor:'#DDDDDD', borderLeftWidth:1, flex:this.props.flexDuoi}}>
                    <Text style={this.props.styleDuoi}>{this.props.duoi}</Text> 
                </View>  
            </View>
         );
     }
 }