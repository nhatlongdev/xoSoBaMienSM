import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Platform,
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

                <View style={{flex:1, marginHorizontal: 10, marginTop: 20}}>
                    <TouchableOpacity onPress={()=>
                        this.clickRegion(1)
                    }>
                        <Image
                            style = {styles.image_style}
                            source = {require('../images/ic_launcher.png')}
                        />
                    </TouchableOpacity>
                    

                    <TouchableOpacity onPress={()=>
                        this.clickRegion(2)
                    }>
                        <Image
                            style = {styles.image_style}
                            source = {require('../images/ic_launcher.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>
                        this.clickRegion(3)
                    }>
                        <Image
                            style = {styles.image_style}
                            source = {require('../images/ic_launcher.png')}
                        />
                    </TouchableOpacity>

                </View>
                
            </View>
         );
     }

     //HÀM XỬ LÝ SỰ KIỆN CLICK VÀO VÙNG MIỀN
     clickRegion(value_region){
        switch(value_region){
            case 1:
                //Chuyển sang màn xem kết quả miền bắc
                this.props.navigation.replace('ResultLottery1Component');
            break;

            case 2:
                //Chuyển sang màn xem kết quả miền trung
            break;

            case 3:
                //Chuyển sang màn xem kết quả miền nam
            break;
        }
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
     image_style:{
        height: 120, 
        marginBottom: 20
     }
 })