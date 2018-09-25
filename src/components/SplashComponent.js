import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    NetInfo,
    AsyncStorage,
    Image
 } from 'react-native';
 import dataInAppPurchase from '../data/ListProductInAppPurchase';
 import {getDataLottery, apiGetListProducts} from '../network/Server';
 import {formatDataLotteryToKeyValue} from '../functions/ConvertDataLotteryToKeyValue';
 import {createArrResultDoSo} from '../functions/CreateArrResultDoSo';

 //REDUX
 import { connect } from 'react-redux';
 import {addResultLottery, addResultDoSo, selectRegion} from '../redux/actionCreators';
 
 class SplashComponent extends Component {

    componentWillMount(){
        //add event listener status connect net
        NetInfo.addEventListener('connectionChange', this.handler.bind(this));
    }

     render() {
         return (
             <View style={styles.container}>
                <Image
                    style={{height:80, width:80}}
                    source={require('../images/ic_launcher.png')}
                />
                <Text style={styles.text_loading}>Đang tải ...</Text>
             </View>
         );
     }

    //CHECK STATUS NET
    handler(isConnected) {
        if(isConnected.type === 'wifi' || isConnected.type === 'WIFI'){
            //TH CO MANG goi api lay ds goi dv va api lay data lottery
            this.getListProductToServer();
        }else {
            //TH KO CO MANG kiem tra cake(neu co lay cake ra su dung)
            alert('Để cập nhật kết quả mới nhất, vui lòng kiểm tra kết nối mạng!')
            this.getListProduct();
        }    
     }

    //FUNCTION SAVE AND GET CAKE LIST PRODUCT IN APP PURCHARSE (AsyncStorage) 
    async saveListProduct(value) {
        try {
          await AsyncStorage.setItem('key_list_product',value);
        } catch (error) {
          console.log("Error saving data" + error);
        }
    }

    async getListProduct() {
        try {
          const value = await AsyncStorage.getItem('key_list_product');
            if(value === null){
                //không có mạng và app cũng chưa đăng nhập lần nào
                alert('Không tải được dữ liệu, vui lòng kiểm tra kết nối mạng9!')
            }else{
                //lấy kết quả xổ số trong cake
                this.getDataLottery();
            }
          return value;
        } catch (error) {
          console.log("Error retrieving data" + error);
        }
    }

    //FUNCTION SAVE AND GET CAKE DATA LOTTERY (AsyncStorage) 
    async saveDataLottery(value) {
        try {
          await AsyncStorage.setItem('key_data_lottery',value);
        } catch (error) {
          console.log("Error saving data" + error);
        }
    }

    async getDataLottery() {
        try {
          const value = await AsyncStorage.getItem('key_data_lottery');
          if(value === null){
              //không có mạng và app cũng chưa đăng nhập lần nào
              alert('Không tải được dữ liệu, vui lòng kiểm tra kết nối mạng8!')
          }else {
             //CONVERT DATA TO FORMAT KEY_VALUE
                var d_ = {};
                var d = formatDataLotteryToKeyValue(d_, JSON.parse(value));  
                var dataDoSo = createArrResultDoSo(JSON.parse(value));  
            //CAP NHAT DU LIEU CHO STORE
                this.props.addResultLottery(d);
                this.props.addResultDoSo(dataDoSo);
            //kiểm tra xem giá trị vùng miền được chọn, nếu giá trị khác null thì app đã từng đăng nhập
                this.getRegionSelected().then((value)=>{
                    if(value === null){ 
                        //Chưa đăng nhập lần nào
                        //GOI LENH VAO MAN HOME
                        this.props.navigation.replace('HomeComponent');
                    }else {
                        //Đã từng đăng nhập vào thẳng màn kết quả
                        if(value === '1' || value === '2' || value === '3'){
                            //GOI LENH VAO MAN KET QUA
                            this.props.selectRegion(value);
                            this.props.navigation.replace('ResultLotteryComponent');
                        }
                    }
                }).catch((error)=>{
                    console.log(error)
                });
          }  
          return value;
        } catch (error) {
          console.log("Error retrieving data" + error);
        }
    }

    //FUNCTION SAVE AND GET CAKE REGION SELECTED (AsyncStorage) 
    async saveRegionSelected(value) {
        try {
          await AsyncStorage.setItem('key_region_selected',value);
        } catch (error) {
          console.log("Error saving data" + error);
        }
    }

    async getRegionSelected() {
        try {
          const value = await AsyncStorage.getItem('key_region_selected');
          return value;
        } catch (error) {
          console.log("Error retrieving data" + error);
        }
    }


    //LOAD DATA LOTTERY TO SERVER
    getDataLotteryToServer(){
        getDataLottery().then((data)=>{
            //SAVE DATA LOTTERY, DATA THONG KE TO CAKE
            this.saveDataLottery(JSON.stringify(data)); 
            //CONVERT DATA TO FORMAT KEY_VALUE
            var d_ = {};
            var d = formatDataLotteryToKeyValue(d_, data);  
            var dataDoSo = createArrResultDoSo(data);
    
            //CAP NHAT DU LIEU CHO STORE
            this.props.addResultLottery(d);
            this.props.addResultDoSo(dataDoSo);
            //kiểm tra xem giá trị vùng miền được chọn, nếu giá trị khác null thì app đã từng đăng nhập
            this.getRegionSelected().then((value)=>{
                if(value === null){ 
                    //Chưa đăng nhập lần nào
                    //GOI LENH VAO MAN HOME
                    this.props.navigation.replace('HomeComponent');
                }else {
                    //Đã từng đăng nhập vào thẳng màn kết quả
                    if(value === '1' || value === '2' || value === '3'){
                        //GOI LENH VAO MAN KET QUA
                        this.props.selectRegion(value);
                        this.props.navigation.replace('ResultLotteryComponent');
                    }
                }
            }).catch((error)=>{
                console.log(error)
            });
        }).catch((error)=>{
            console.log(error)
        });
    }

    //LOAD DS GOI DV TU SERVER
    getListProductToServer(){
        apiGetListProducts().then((data)=>{
            //lay duoc du lieu save cake
            this.saveListProduct(JSON.stringify(data));
            //goi api lay data lottery
            this.getDataLotteryToServer();
        }).catch((error)=>{
            console.log(error)
        });
    }

 }

 export default connect(null, {addResultLottery, addResultDoSo, selectRegion})(SplashComponent);

 const styles = StyleSheet.create({
     container:{
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
     },
     text_loading:{
         color: 'black',
         fontWeight: 'bold',
         fontSize: 20,
         marginTop: 20,
     }
 })

