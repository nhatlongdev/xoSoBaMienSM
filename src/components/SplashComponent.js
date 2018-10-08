import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    NetInfo,
    Image
 } from 'react-native';
 //API LAY DATA
 import {getDataLottery, apiGetListProducts} from '../network/Server';
 //FORMAT DATA LOTTERY
 import {formatDataLotteryToKeyValue} from '../functions/ConvertDataLotteryToKeyValue';
 import {createArrResultDoSo} from '../functions/CreateArrResultDoSo';
 //REDUX
 import { connect } from 'react-redux';
 import {addResultLottery, addResultDoSo, selectRegion} from '../redux/actionCreators';
 //import data lott default
 import data_lottery_default from '../data/data_lottery_default';

 import GlobalValue from '../data/GlobalValue';

 //REALM DATABASE
 const Realm = require('realm');
 let realm;
 var obj_data_cake;

 class SplashComponent extends Component {

    constructor(props){
        super(props);
        realm = new Realm({
            schema: [{
              name: 'Global_cake',
              properties:
              {
                emp_id: { type: 'int', default: 0 },
                data_lottery: 'string',
                region_value: 'string',
                data_products: 'string',
                is_sound:{ type: 'bool', default: true },
                is_vibrate:{ type: 'bool', default: true },
              }
            }]
          });
          obj_data_cake = realm.objects('Global_cake');
          if(obj_data_cake.length === 0){
            //khoi tao cake
            realm.write(() => {
                var ID = realm.objects('Global_cake').length + 1;
                realm.create('Global_cake', {
                emp_id: ID,
                data_lottery: '',
                region_value: '',
                data_products: '',
                is_sound:true,   //0-ko co am thanh, 1- co am thanh
                is_vibrate:true, //0-ko rung, 1-co rung
                });
            }); 
            obj_data_cake = realm.objects('Global_cake');  
          }
          //add vaule sound and vibrate for global
          GlobalValue.is_sound = obj_data_cake[0].is_sound;
          GlobalValue.is_vibrate = obj_data_cake[0].is_vibrate;
    }

    componentWillMount(){
       
    }

    componentDidMount(){
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
            if(obj_data_cake[0].data_lottery === ''){
                realm.write(() => {
                    obj_data_cake[0].data_lottery = JSON.stringify(data_lottery_default.bodyitems);
                })
            }
            
            //CONVERT DATA TO FORMAT KEY_VALUE
            var d_ = {};
            var d = formatDataLotteryToKeyValue(d_, JSON.parse(obj_data_cake[0].data_lottery));  
            var dataDoSo = createArrResultDoSo(JSON.parse(obj_data_cake[0].data_lottery));
    
            //CAP NHAT DU LIEU CHO STORE
            this.props.addResultLottery(d);
            this.props.addResultDoSo(dataDoSo);

            //kiểm tra xem giá trị vùng miền được chọn, nếu giá trị khác null thì app đã từng đăng nhập
             //lay duoc du lieu save REALM
             if(obj_data_cake.length >0){
                if(obj_data_cake[0].region_value === ''){
                    //lam dau dang nhap
                    //GOI LENH VAO MAN HOME
                    this.props.navigation.replace('HomeComponent');   
                }else {
                    //Đã từng đăng nhập vào thẳng màn kết quả
                    //GOI LENH VAO MAN KET QUA
                        this.props.selectRegion(obj_data_cake[0].region_value);
                        this.props.navigation.replace('ResultLotteryComponent');
                }  
            }

        }    
     }

    //LOAD DATA LOTTERY TO SERVER
    getDataLotteryToServer(){
        getDataLottery().then((data)=>{
            //CONVERT DATA TO FORMAT KEY_VALUE
            var d_ = {};
            var d = formatDataLotteryToKeyValue(d_, data);  
            var dataDoSo = createArrResultDoSo(data);
            //CAP NHAT DU LIEU CHO STORE
            this.props.addResultLottery(d);
            this.props.addResultDoSo(dataDoSo);
            // this.props.updateResultLottery();
            //kiểm tra xem giá trị vùng miền được chọn, nếu giá trị khác null thì app đã từng đăng nhập
             //lay duoc du lieu save REALM
            if(obj_data_cake.length >0){
                realm.write(() => {
                    obj_data_cake[0].data_lottery = JSON.stringify(data);
                })
                if(obj_data_cake[0].region_value === ''){
                    //lam dau dang nhap
                    //GOI LENH VAO MAN HOME
                    this.props.navigation.replace('HomeComponent');   
                }else {
                    //Đã từng đăng nhập vào thẳng màn kết quả
                    //GOI LENH VAO MAN KET QUA
                        this.props.selectRegion(obj_data_cake[0].region_value);
                        this.props.navigation.replace('ResultLotteryComponent');
                }  
            }
        }).catch((error)=>{
            console.log(error)
        });
    }

    //LOAD DS GOI DV TU SERVER
    getListProductToServer(){
        apiGetListProducts().then((data)=>{
            //lay duoc du lieu save REALM
            if(obj_data_cake.length >0){
                realm.write(() => {
                    obj_data_cake[0].data_products = JSON.stringify(data);
                  })
            }
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

