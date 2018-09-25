import React, { Component } from 'react';
import { 
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    Share,
    TouchableOpacity,
    AsyncStorage
 } from 'react-native';

 //REDUX
 import { connect } from 'react-redux';
 import {selectRegion, updateResultLottery} from '../redux/actionCreators';
 import GlobalValue from '../data/GlobalValue';

 var heightScreen = Dimensions.get('window').height;
 var linkDB = 'https://dacbiet.vn';

  class SlideMenuComponent extends Component {

     constructor(props){
         super(props);
         this.getListProduct(); 
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
                        this.clickOption('1')
                    }>
                        <Image
                            style ={{width: 50, height: 50}}
                            source = {require('../images/mien_bac.png')}
                        />
                        <Text style={styles.text_option}>Kết quả miền bắc</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.touch_style}
                        onPress={()=>
                        this.clickOption('2')
                    }>
                        <Image
                            style ={{width: 50, height: 50}}
                            source = {require('../images/mien_trung.png')}
                        />
                        <Text style={styles.text_option}>Kết quả miền trung</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touch_style}
                        onPress={()=>
                        this.clickOption('3')
                    }>
                        <Image
                            style ={{width: 50, height: 50}}
                            source = {require('../images/mien_nam.png')}
                        />
                        <Text style={styles.text_option}>Kết quả miền nam</Text>
                    </TouchableOpacity>

                </View>

                <View style={{flexDirection:'row', marginHorizontal: 5, marginTop: 20}}>

                    <TouchableOpacity style={styles.touch_style}
                        onPress={()=>
                        this.clickOption('4')
                    }>
                        <Image
                            style ={{width: 50, height: 50}}
                            source = {require('../images/schedule.png')}
                        />
                        <Text style={styles.text_option}>Xem theo ngày</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touch_style}
                        onPress={()=>
                        this.clickOption('5')
                    }>
                        <Image
                            style ={{width: 50, height: 50}}
                            source = {require('../images/do_so.png')}
                        />
                        <Text style={styles.text_option}>Dò số</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touch_style}
                        onPress={()=>
                        this.clickOption('6')
                    }>
                        <Image
                            style ={{width: 50, height: 50}}
                            source = {require('../images/thongke.png')}
                        />
                        <Text style={styles.text_option}>Thống kê</Text>
                    </TouchableOpacity>

                </View>

                <View style={{flexDirection:'row', marginHorizontal: 5, marginTop: 20}}>

                    <TouchableOpacity style={styles.touch_style}
                        onPress={()=>
                        this.clickOption('7')
                    }>
                        <Image
                            style ={{width: 50, height: 50}}
                            source = {require('../images/somo.png')}
                        />
                        <Text style={styles.text_option}>Sổ mơ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touch_style}
                        onPress={()=>
                        this.clickOption('8')
                    }>
                        <Image
                            style ={{width: 50, height: 50}}
                            source = {require('../images/share.png')}
                        />
                        <Text style={styles.text_option}>Chia sẻ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touch_style}
                        onPress={()=>
                        this.clickOption('9')
                    }>
                        <Image
                            style ={{width: 50, height: 50}}
                            source = {require('../images/pay.png')}
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
                case '1':
                    //Chuyển sang màn xem kết quả miền bắc
                    GlobalValue.dragLottery = '0';
                    //Action creator
                    this.props.selectRegion(value_click);
                    this.props.updateResultLottery();

                    this.props.navigation.closeDrawer();
                    this.props.navigation.navigate('ResultLotteryComponent');
                break;

                case '2':
                    //Chuyển sang màn xem kết quả miền trung
                    GlobalValue.dragLottery = '0';

                    //Action creator
                    this.props.selectRegion(value_click);
                    this.props.updateResultLottery();

                    this.props.navigation.closeDrawer();
                    this.props.navigation.navigate('ResultLotteryComponent');
                break;

                case '3':
                    //Chuyển sang màn xem kết quả miền nam
                    GlobalValue.dragLottery = '0';

                    //Action creator
                    this.props.selectRegion(value_click);
                    this.props.updateResultLottery();
                    
                    this.props.navigation.closeDrawer();
                    this.props.navigation.navigate('ResultLotteryComponent');
                break;

                case '4':
                   //Xem kết quả theo ngày
                   this.props.navigation.navigate('ResultWithDayComponent');
                   this.props.navigation.closeDrawer();
                break;

                case '5':
                     //chuyển đến màn dò số
                   this.props.navigation.navigate('DoSoComponent');
                   this.props.navigation.closeDrawer();
                break;

                case '6':
                     //chuyển đến màn thống kê
                   this.props.navigation.navigate('StatisticsComponent');
                   this.props.navigation.closeDrawer();
                break;

                case '7':
                    //Xem sổ mơ
                   this.props.navigation.navigate('SoMoComponent');
                   this.props.navigation.closeDrawer();
                break;

                case '8':
                    Share.share({
                        message:'http://dacbiet.vn'
                    })
                break;

                case '9':
                    //Xem sổ mơ
                    this.props.navigation.navigate('ProductComponent');
                    this.props.navigation.closeDrawer();
                break;
            }
     }

     //FUNCTION GET CAKE LIST PRODUCT IN APP PURCHARSE (AsyncStorage) 
     async getListProduct() {
        try {
            const value = await AsyncStorage.getItem('key_list_product');
            GlobalValue.listProduct = JSON.parse(value);
            return value;
            } catch (error) {
            console.log("Error retrieving data" + error);
        }
    }

 }

 export default connect(null, {selectRegion, updateResultLottery})(SlideMenuComponent);

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