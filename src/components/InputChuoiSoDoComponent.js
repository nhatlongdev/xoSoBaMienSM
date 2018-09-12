import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput
 } from 'react-native';
 import GlobalValue from '../data/GlobalValue';

 export default class InputChuoiSoDoComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            chuoiSoDo:'',
        }
        GlobalValue.chuoiSoDo = '';
    }

     render() {
         return (
             <View>
                <Text style={styles.text_title}>Số dò (ví dụ: 66 hoặc 68,86):</Text>
                <TextInput
                    style={{marginHorizontal:5}}
                    maxLength = {5} 
                    placeholder={'Nhập số cần dò'}
                    placeholderTextColor = {'grey'}
                    onChangeText = {(text)=>this.updateDataInput(text)}
                    keyboardType='numeric'
                    value = {this.state.chuoiSoDo}             
                />    
             </View>
         );
     }

     //Cap nhat du lieu khi text input thay doi
     updateDataInput(text){
        this.setState({chuoiSoDo: text});
        GlobalValue.chuoiSoDo = text;
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