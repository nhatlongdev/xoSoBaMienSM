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

 export default class SplashComponent extends Component {


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
        //KIỂM TRA XEM LIST PROCDUCT ĐÃ CÓ TRONG CAKE CHƯA, CHƯA CÓ THÌ SAVE CAKE
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
                alert('CO WIFI')
                //CÓ MẠNG LẤY DATA TỪ SERVER
                // this.refreshFromServer();
            }else {
                alert('NO WIFI')
                //KO CÓ MẠNG LẤY DỮ LIỆU TRONG CAKE
                // this.getKey(false); 
            }
          return value;
        } catch (error) {
          console.log("Error retrieving data" + error);
        }
    }


 }

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

