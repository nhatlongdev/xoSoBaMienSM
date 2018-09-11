import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
 } from 'react-native';

 export default class ItemSoMo extends Component {
     render() {
         return (
             <View style={styles.container}>
                 <Text style={styles.text_mo}>{this.props.item.title}</Text>
                 <Text style={styles.text_so}>{this.props.item.value}</Text>
             </View>
         );
     }
 };

 const styles = StyleSheet.create({
     container:{
         borderLeftWidth: 1,
         borderLeftColor: 'grey',
         borderRightWidth: 1,
         borderRightColor: 'grey',
         borderBottomWidth: 1,
         borderBottomColor: 'grey',
         flex:1, 
         flexDirection: 'row',
         justifyContent: 'center',
     },
     text_mo:{
        flex:2,
        alignSelf: 'stretch',
        padding: 5,
     },
     text_so:{
         flex:1,
         alignSelf: 'stretch',
         padding: 5,
         borderLeftWidth:1,
         borderLeftColor:'grey'
     }
 })