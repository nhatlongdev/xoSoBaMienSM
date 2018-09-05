import React, { Component } from 'react';
import { 
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    TouchableOpacity
 } from 'react-native';
 var heightScreen = Dimensions.get('window').height;  

 export default class SlideMenuComponent extends Component {

     constructor(props){
         super(props);
          
     }

     render() {
         return (
             <View style={styles.container}>
                <View style={styles.header_menu}>
                    <Image
                        style ={{width: 50, height: 50}}
                        source = {require('../images/ic_launcher.png')}
                    />
                    <Text style={{color: 'white', marginTop: 10}}>Xổ số 98 - Trực tiếp</Text>
                </View>

                <View style={{flexDirection:'row', marginHorizontal: 5, marginTop: 20}}>

                    <TouchableOpacity style={styles.touch_style}
                        onPress={()=>
                        this.clickOption(1)
                    }>
                        <Image
                            style ={{width: 50, height: 50}}
                            source = {require('../images/ic_launcher.png')}
                        />
                        <Text style={styles.text_option}>Kết quả miền bắc</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.touch_style}
                        onPress={()=>
                        this.clickOption(1)
                    }>
                        <Image
                            style ={{width: 50, height: 50}}
                            source = {require('../images/ic_launcher.png')}
                        />
                        <Text style={styles.text_option}>Kết quả miền trung</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touch_style}
                        onPress={()=>
                        this.clickOption(1)
                    }>
                        <Image
                            style ={{width: 50, height: 50}}
                            source = {require('../images/ic_launcher.png')}
                        />
                        <Text style={styles.text_option}>Kết quả miền nam</Text>
                    </TouchableOpacity>

                </View>

                <View style={{flexDirection:'row', marginHorizontal: 5, marginTop: 20}}>

                    <TouchableOpacity style={styles.touch_style}
                        onPress={()=>
                        this.clickOption(1)
                    }>
                        <Image
                            style ={{width: 50, height: 50}}
                            source = {require('../images/ic_launcher.png')}
                        />
                        <Text style={styles.text_option}>Dò số</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touch_style}
                        onPress={()=>
                        this.clickOption(1)
                    }>
                        <Image
                            style ={{width: 50, height: 50}}
                            source = {require('../images/ic_launcher.png')}
                        />
                        <Text style={styles.text_option}>Thống kê</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touch_style}
                        onPress={()=>
                        this.clickOption(1)
                    }>
                        <Image
                            style ={{width: 50, height: 50}}
                            source = {require('../images/ic_launcher.png')}
                        />
                        <Text style={styles.text_option}>Sổ mơ</Text>
                    </TouchableOpacity>

                </View>

                <View style={{flexDirection:'row', marginHorizontal: 5, marginTop: 20}}>

                    <TouchableOpacity style={styles.touch_style}
                        onPress={()=>
                        this.clickOption(1)
                    }>
                        <Image
                            style ={{width: 50, height: 50}}
                            source = {require('../images/ic_launcher.png')}
                        />
                        <Text style={styles.text_option}>Chia sẻ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touch_style}
                        onPress={()=>
                        this.clickOption(1)
                    }>
                        <Image
                            style ={{width: 50, height: 50}}
                            source = {require('../images/ic_launcher.png')}
                        />
                        <Text style={styles.text_option}>Cài đặt</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touch_style}
                        onPress={()=>
                        this.clickOption(1)
                    }>
                        <Image
                            style ={{width: 50, height: 50}}
                            source = {require('../images/ic_launcher.png')}
                        />
                        <Text style={styles.text_option}>Thanh toán</Text>
                    </TouchableOpacity>

                </View>

             </View>
         );
     }

     //HÀM XỬ LÝ CLICK OPTION
     //1-KQMB, 2-KQMT, 3-KQMN, 4-DÒ SỐ, 5-THỐNG KÊ, 6-SỔ MƠ, 7-CHIA SẺ, 8-CÀI ĐẶT, 9-THANH TOÁN
     clickOption(value_click){
            switch(value_click){
                case 1:
                    alert('click');
                break;

                case 2:
                    alert('click');
                break;

                case 3:
                    alert('click');
                break;

                case 4:
                    alert('click');
                break;

                case 5:
                    alert('click');
                break;

                case 6:
                    alert('click');
                break;

                case 7:
                    alert('click');
                break;

                case 8:
                    alert('click');
                break;

                case 9:
                    alert('click');
                break;
            }
     }


 }

 const styles = StyleSheet.create({
     container:{
        flex:1,
     },
     header_menu:{
        height: heightScreen /4,
        width: '100%',
        paddingLeft: 10,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
     },
     text_option:{
         textAlign:'center',
         color:'black',
         marginTop: 2,
     },
     touch_style:{
        flex:1, 
        alignItems:'center'
     }
 })