import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView,
    TouchableOpacity,
    Image
 } from 'react-native';

 export default class HomeComponent extends Component {
     render() {
         return (
            <View style = {[styles.container,{marginTop:Platform.OS==='ios'?30:null}]}>
            <View style = {styles.header_style}>
                <Text style = {styles.text_style}>Xổ số 98 - Trực tiếp</Text>
            </View>
            <Text style = {{fontSize: 18, marginHorizontal: 10, marginTop: 15, marginBottom: 20, textAlign:'center'}}>
                Quý khách vui lòng lựa chọn khu vực muốn xem kết quả xổ số
            </Text>

            <ScrollView style={{flex:1}}>
                <View style = {{flex:1, marginHorizontal: 5}}>
                    <View style = {{flexDirection: 'row', marginBottom: 20, width:'100%'}}>
                        <TouchableOpacity style={{flex:1,height: 200, width: 180, alignItems:'center'}}
                            // onPress={()=>{this.clickExit(true,1)}}
                        >
                            <Image
                                style = {{flex:1, height: 200, width: 180}}
                                source = {require('../images/mien_bac.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1, height: 200, width: 180, alignItems:'center'}}
                                onPress={()=>{this.clickExit(true,2)}}
                        >
                            <Image
                                style = {{flex:1, height: 200, width: 180}}
                                source = {require('../images/mien_trung.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection: 'row', marginBottom: 20, width:'100%'}}>
                        <TouchableOpacity style={{flex:1, height: 200, width: 180, alignItems:'center'}}
                                // onPress={()=>{this.clickExit(true,3)}}
                        >
                            <Image
                                style = {{flex:1, height: 200, width: 180}}
                                source = {require('../images/mien_nam.png')}
                            />
                        </TouchableOpacity>
                        <View style={{flex:1}}>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
         );
     }
 }

 const styles = StyleSheet.create({
     container:{
        flex: 1,
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