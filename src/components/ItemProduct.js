import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity
 } from 'react-native';
 import {updatePurcharse} from '../network/Server';
 import InAppBilling from "react-native-billing";
 const defaultState = {
    productDetails: null,
    transactionDetails: null,
    consumed: false,
    error: null
  };
 //REALM DATABASE
 const Realm = require('realm');
 let realm;
 var obj_data_cake;
 
 import GLobalValue from '../data/GlobalValue';
 var arr_products = [];
 
 export default class ItemProduct extends Component {

    constructor(props){
        super(props);
        this.state = {
            productId: "",
            ...defaultState
        };
        //REALM DATABASE
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
                token:'string',
                status_net:{ type: 'bool', default: true },
              }
            }]
          });
        obj_data_cake = realm.objects('Global_cake');
        arr_products = JSON.parse(obj_data_cake[0].data_products);
    }

    resetState = () => {
        this.setState(defaultState);
    };

     render() {
         return (
             <View style={{backgroundColor:'grey', marginVertical: 5, marginHorizontal:5}}>
                <View>
                    <Text style={{textAlign:'center', color:'white', paddingVertical: 5, fontWeight:'bold'}}>{this.props.item.name}</Text>
                </View>
                <Text style={{textAlign:'right', color:'red', paddingVertical:5, paddingHorizontal:5}}>{this.props.item.price}</Text>
                <TouchableOpacity onPress={()=>
                        this.pushIdProductToInAppPursCharge(this.props.item)
                }>
                   <Text style={{textAlign:'right', color:'blue', fontSize:18, paddingVertical: 5, paddingHorizontal:5}}>Mua</Text>
                </TouchableOpacity>
             </View>
         );
     }

     //get item
     getProductDetails = async () => {
        try {
          this.resetState();
          await InAppBilling.open();
          const details = await InAppBilling.getProductDetails(this.state.productId);
          await InAppBilling.close();
          if(details !== null && details.productId !== null && details.productId !== ''){
            //lay ds sp dang luu trong cake kiem tra xem san pham do nguoi dung da mua chua, neu da mua thi da consume chua
            this.setState({ 
              productDetails: JSON.stringify(details) 
            });
            this.getListProduct();
          }
        } catch (err) {
          this.setState({ error: JSON.stringify(err) });
          await InAppBilling.close();
        }
      };
    
      purchaseProduct = async () => {
        try {
          this.resetState();
          await InAppBilling.open();
          const details = await InAppBilling.purchase(this.state.productId);
          await InAppBilling.close();
          // alert('DU LIEU TRA VE KHI PURCHASE: ' + JSON.stringify(details));
          this.setState({ transactionDetails: JSON.stringify(details) });
          if(details !== null && details.purchaseState === 'PurchasedSuccessfully'){
            console.log('DU LIEU TRA VE KHI PURCHASE TMDK GOI CONSUME');
            this.forArrrSearchItemToAddProperty(0)
            //thong bao toi server mua thanh cong sp
            this.updatePurcharse(this.state.productId);
          }
          console.log('transactionDetails: ' + JSON.stringify(details));
        } catch (err) {
          this.setState({ error: JSON.stringify(err) });
          await InAppBilling.close();
        }
      };

      consumePurchase = async () => {
        try {
          this.resetState();
          await InAppBilling.open();
          const details = await InAppBilling.consumePurchase(this.state.productId);
          await InAppBilling.close();
          // alert('DU LIEU TRA VE KHI CONSUME: ' + JSON.stringify(details));
          if(details === true){
            this.forArrrSearchItemToAddProperty(1);
          }
        } catch (err) {
          this.setState({ error: JSON.stringify(err) });
          await InAppBilling.close();
        }
      };
    
      updateProductId = productId => {
        this.setState({ productId });
      };

     //Hàm truyền id product to in app purscharge
     pushIdProductToInAppPursCharge(item){ 
        this.setState({
            productId: item.id,
        });
        //KIEM TRA XEM SAN PHAM NAY DA MUA CHUA NEU DA MUA THI DA CONSUME CHUA
        for(let i=0; i<arr_products.length; i++){
          if(arr_products[i].id === this.state.productId){
              if(arr_products[i].isConsume === undefined || arr_products[i].isConsume === null || arr_products[i].isConsume === true){
                //cho phep mua item
                this.purchaseProduct();
              }else{
                  //consume roi moi cho phep mua
                  this.consumePurchase();
              }
              break;
          }
        }
     }

     //HAM FOR TIM KIEM ITEM PHU HOP TO ADD PROPERTY
     forArrrSearchItemToAddProperty(type){ //0 - mua xong sp chua consume, 1-consume sp xong
         //KIEM TRA XEM SAN PHAM NAY DA MUA CHUA NEU DA MUA THI DA CONSUME CHUA
        for(let i=0; i<arr_products.length; i++){
          if(arr_products[i].id === this.state.productId){
                if(type === 0){
                  arr_products[i].isConsume = false;
                }else {
                  arr_products[i].isConsume = true;
                }
                break
          }
        }
        //luu lai REALm DATABASE
        realm.write(() => {
            obj_data_cake[0].data_products = JSON.stringify(arr_products);
        })
     }

     //ham cap nhat toi server khi mua thanh cong sp
     updatePurcharse(package_id){
      // alert('CHAY HAM UPDATE: ' + package_id)
      updatePurcharse(package_id).then((data_)=>{
        // alert('UPDATE THAH CONG: ' + JSON.stringify(data_))
          //thuc hien consume
          this.consumePurchase();
      }).catch((error) =>{
          console.log("ERROR KET QUA PUSH TOKEN" + JSON.stringify(error));
      });
    }
 }