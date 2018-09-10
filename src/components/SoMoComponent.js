import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
 } from 'react-native';

 export default class SoMoComponent extends Component {
     render() {
         return (
             <View style={styles.container}>
                <View style = {styles.header_style}>
                    <TouchableOpacity onPress = {()=>
                        {this.props.navigation.openDrawer()}
                    }>
                        <Image
                            style={{width:30, height: 30,}}
                            source = {require('../images/menu.png')}
                        />
                    </TouchableOpacity>
                    <Text style = {styles.text_title}>SỔ MƠ</Text>
                </View> 
             </View>
         );
     }
 }

 const styles = StyleSheet.create({
     container:{
         flex: 1,
         backgroundColor:'white',
     },
     header_style: {
        width: '100%',
        height: 50,
        backgroundColor: '#3F51B5',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
    },
    text_title:{
        flex:1,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
 })