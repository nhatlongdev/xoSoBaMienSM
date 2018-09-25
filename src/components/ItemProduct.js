import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity
 } from 'react-native';
 
 export default class ItemProduct extends Component {

    constructor(props){
        super(props);
        
    }

     render() {
         return (
             <View style={{backgroundColor:'grey', marginVertical: 5, marginHorizontal:5}}>
                <View>
                    <Text style={{textAlign:'center', color:'white', paddingVertical: 5, fontWeight:'bold'}}>{this.props.item.name}</Text>
                </View>
                <Text style={{textAlign:'right', color:'red', paddingVertical:5, paddingHorizontal:5}}>{this.props.item.price}</Text>
                <TouchableOpacity 
                >
                   <Text style={{textAlign:'right', color:'blue', fontSize:18, paddingVertical: 5, paddingHorizontal:5}}>Mua</Text>
                </TouchableOpacity>
             </View>
         );
     }
 }