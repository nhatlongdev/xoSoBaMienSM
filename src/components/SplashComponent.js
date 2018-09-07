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
 import {getDataLottery} from '../network/Server';
 import {formatDataLotteryToKeyValue} from '../functions/ConvertDataLotteryToKeyValue';
 import { connect } from 'react-redux';
 import {addResultLottery} from '../redux/actionCreators';

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
        //KIỂM TRA MẠNG
        this.getListProduct(isConnected);
     }

    //FUNCTION SAVE AND GET CAKE LIST PRODUCT IN APP PURCHARSE (AsyncStorage) 
    async saveListProduct(value) {
        try {
          await AsyncStorage.setItem('key_list_product',value);
        } catch (error) {
          console.log("Error saving data" + error);
        }
    }

    async getListProduct(isConnected) {
        try {
          const value = await AsyncStorage.getItem('key_list_product');
            if(value === null){
                this.saveListProduct(JSON.stringify(dataInAppPurchase))
            }
            if(isConnected.type === 'wifi' || isConnected.type === 'WIFI'){
                //CÓ MẠNG LẤY DATA TỪ SERVER
                this.getDataLottery();
            }else {
                //KO CÓ MẠNG LẤY DỮ LIỆU TRONG CAKE
                // this.getKey(false); 
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
            if(value === null){
                this.saveRegionSelected('0');
            }
            //GOI LENH VAO MAN HOME
            //TO DO
            this.props.navigation.replace('HomeComponent');
          return value;
        } catch (error) {
          console.log("Error retrieving data" + error);
        }
    }


    //LOAD DATA LOTTERY TO SERVER
    getDataLottery(){
        getDataLottery().then((data)=>{
            //CONVERT DATA TO FORMAT KEY_VALUE
            console.log("DATA KEY VALUE: " + JSON.stringify(data))
            var d = formatDataLotteryToKeyValue(data);       
            //CAP NHAT DU LIEU CHO STORE
            this.props.addResultLottery(d);
            this.getRegionSelected();
        }).catch((error)=>{
            console.log(error)
        });
    }

 }

 export default connect(null, {addResultLottery})(SplashComponent);

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

