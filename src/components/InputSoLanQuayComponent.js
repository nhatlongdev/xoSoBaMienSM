import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform
 } from 'react-native';
 import GlobalValue from '../data/GlobalValue';

 export default class InputSoLanQuayComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            soLanQuay:'30',
        }
        GlobalValue.soLanQuay = '30';
    }

     render() {
         return (
             <View style={{height:50, marginBottom:20}}>
                <Text style={styles.text_title}>Chọn số lần quay:</Text>
                <TextInput
                   style={{height:40, borderColor: 'gray', borderWidth: 1, marginHorizontal:5, paddingHorizontal:5}}
                   maxLength = {2}   
                   placeholder={'Số lần quay'}
                   placeholderTextColor = {'grey'}
                   onChangeText = {(text)=>this.updateDataInput(text)}
                   keyboardType={Platform.OS === 'ios'?'numbers-and-punctuation':'numeric'}
                   value = {this.state.soLanQuay} 
                   fontSize={18}  
                   underlineColorAndroid='rgba(0,0,0,0)' 
                      
                />    
             </View>
         );
     }

     //Cap nhat du lieu khi text input thay doi
     updateDataInput(text){
        this.setState({soLanQuay: text});
        GlobalValue.soLanQuay = text;
     }
 }

 const styles = StyleSheet.create({
     container:{
         flex:1,
     },
     text_title:{
        fontSize: 15, 
        fontWeight: 'bold', 
        color: 'black',
        marginHorizontal:5
     },

 })