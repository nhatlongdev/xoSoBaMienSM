import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    BackHandler,
    FlatList,
    Platform
 } from 'react-native';
 import ItemProduct from './ItemProduct';
 import GlobalValue from '../data/GlobalValue';
  //REALM DATABASE
  const Realm = require('realm');
  let realm;
  var obj_data_cake;  
  var arr_products = [];
 
 export default class ProductComponent extends Component {

    constructor(props){
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

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
              }
            }]
          });
        obj_data_cake = realm.objects('Global_cake');
        arr_products = JSON.parse(obj_data_cake[0].data_products);
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }

     render() {
        console.log('render')
         return (
            <View style={[styles.container,{marginTop:Platform.OS === 'ios'?25:0}]}>
                <View style = {styles.header_style}>
                    <TouchableOpacity onPress = {()=>
                        this.handleBackButtonClick()
                    }>
                        <Image
                            style={{width:30, height: 30, tintColor:'white'}}
                            source = {require('../images/arrow_back.png')}
                        />
                    </TouchableOpacity>
                    <Text style = {styles.text_title}>DANH SÁCH GÓI DỊCH VỤ</Text>
                </View>
                <FlatList
                    data={arr_products}
                    renderItem={({item, index})=>{
                        return(
                            <ItemProduct item={item}
                            /> 
                        );
                    }}
                    keyExtractor={(item, index)=>index.toString()}
                >
                </FlatList>    
            </View>
         );
     }

 }

 const styles = StyleSheet.create({
     container:{
         flex:1,
     },
     header_style: {
        width: '100%',
        height: 45,
        backgroundColor: '#3F51B5',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
    },
    text_title:{
        flex:1,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    button_style:{
        flexDirection: 'row', 
        alignItems: 'center',
        borderRadius: 2, 
        backgroundColor: '#CCCCCC', 
        height: 50,padding: 5
    }
 })