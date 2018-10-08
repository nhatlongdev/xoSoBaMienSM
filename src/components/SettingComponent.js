import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    BackHandler,
    TouchableOpacity,
    Image,
    Switch,
    Platform
 } from 'react-native';
 import GlobalValue from '../data/GlobalValue';

 //REALM DATABASE
 const Realm = require('realm');
 let realm;
 var obj_data_cake;

 export default class SettingComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            toggled_sound: GlobalValue.is_sound,
            toggled_vibrate: GlobalValue.is_vibrate,
        }
    
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
        alert(GlobalValue.is_sound)

        //Back app
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
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
                    <Text style = {styles.text_title}>CÀI ĐẶT</Text>
                </View> 

                <View style={{flexDirection:'row', width:'100%', padding:10}}>
                    <Text style={{fontSize:18}}>Âm thanh khi có giải mới</Text>
                    <Switch 
                        style={{flex:1, marginLeft:20}}
                        onValueChange={ (value) => this.clickSetting(value, 'sound')} 
                        value={ this.state.toggled_sound }
                    />
                </View>

                <View style={{flexDirection:'row', width:'100%', padding:10}}>
                    <Text style={{fontSize:18}}>Rung khi có giải mới</Text>
                    <Switch 
                        style={{flex:1, marginLeft:20}}
                        onValueChange={ (value) => this.clickSetting(value, 'vibrate')} 
                        value={ this.state.toggled_vibrate }
                    />
                </View>

             </View>
         );
     }

     //ham xu ly khi co su thay doi setting sound va vibrate
     clickSetting(value, type){
        if(type === 'sound'){
            GlobalValue.is_sound = value;
            this.setState({ toggled_sound: value })
            //SAVE REALM DATABASE
            realm.write(() => {
                obj_data_cake[0].is_sound = GlobalValue.is_sound;
            })
        }else {
            GlobalValue.is_vibrate = value;
            this.setState({ toggled_vibrate: value})
            //SAVE REALM DATABASE
            realm.write(() => {
                obj_data_cake[0].is_vibrate = GlobalValue.is_vibrate;
            })
        }
        
     }
 }
 const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white',
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
})