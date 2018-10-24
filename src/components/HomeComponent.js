import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
    Image,
    AsyncStorage
 } from 'react-native';

import { connect } from 'react-redux';
import { selectRegion } from '../redux/actionCreators';

//REALM DATABASE
const Realm = require('realm');
let realm;
var obj;

 class HomeComponent extends Component {

    constructor(props){
        super(props);
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
        obj = realm.objects('Global_cake');
    }

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
                    <TouchableOpacity style={{width:120}}
                      onPress={()=>this.clickRegion('1')
                    }>
                        <Image
                            style = {styles.image_style}
                            source = {require('../images/mienbac.png')}
                        />
                    </TouchableOpacity>
                    

                    <TouchableOpacity style={{marginLeft:100, width:120}}
                      onPress={()=>this.clickRegion('2')
                    }>
                        <Image
                            style = {styles.image_style}
                            source = {require('../images/mientrung.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft:200, width:120}}
                      onPress={()=>this.clickRegion('3')
                    }>
                        <Image
                        style = {styles.image_style}
                            source = {require('../images/miennam.png')}
                        />
                    </TouchableOpacity>

                </View>
                
            </View>
         );
     }

     //HÀM XỬ LÝ SỰ KIỆN CLICK VÀO VÙNG MIỀN
        clickRegion(value_region){
            //Chuyển sang màn xem kết quả --- ACTION CREATORS
            this.props.selectRegion(value_region);
            //save region to REALM DATABASE
            if(obj.length>0){
                realm.write(() => {
                    obj[0].region_value = value_region;
                })
            }
            this.props.navigation.replace('ResultLotteryComponent');
        }
 }

 export default connect(null,{selectRegion})(HomeComponent);

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
        width: 120,
        height:120, 
        marginBottom: 20
     }
 })