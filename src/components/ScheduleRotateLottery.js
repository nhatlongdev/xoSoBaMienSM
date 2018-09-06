import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
 } from 'react-native';

 export default class ScheduleRotateLottery extends Component {
     render() {
         return (
             <View style={styles.container}>
                <View style = {styles.header_style}>
                    <Text style = {styles.text_style}>Xem kết quả theo ngày</Text>
                </View>
             </View>
         );
     }
 }

 const styles = StyleSheet.create({
     container:{
         flex:1,
         backgroundColor:'white',
     },
     header_style:{
        width: '100%',
        height: 50,
        backgroundColor: '#3F51B5',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
    },
    text_style:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
 })