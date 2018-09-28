import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Platform,
    BackHandler,
    TouchableOpacity,
    Image,
    Switch
 } from 'react-native';

 //REDUX
 import { connect } from 'react-redux';
 //ACTION CREATOR
 import {settingSound, settingVibrate} from '../redux/actionCreators';

//  var Realm = require('realm');
//  let realm ;

  class SettingComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            toggled_sound: this.props.valueSound,
            toggled_vibrate: this.props.valueVibrate,
        }
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

        // realm = new Realm({
        //     schema: [{name: 'User_Demo', 
        //     properties: 
        //     {
        //      id: {type: 'int',   default: 0},
        //      first_name: 'string', 
        //      last_name: 'string' 
        //     }}]
        //   });
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

        // realm.write(() => {
 
        //     var ID = realm.objects('User_Demo').length + 1;
      
        //     realm.create('User_Demo', {id: ID, first_name: 'Pooja', last_name: 'Sharma'});
             
        //    });
      
        //    var A = realm.objects('User_Demo');
        //    alert(A)
         return (
            <View style={styles.container}>
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
                        style={{flex:1}}
                        onValueChange={ (value) => this.clickSetting(value, 'sound')} 
                        value={ this.state.toggled_sound }
                    />
                </View>

                <View style={{flexDirection:'row', width:'100%', padding:10}}>
                    <Text style={{fontSize:18}}>Rung khi có giải mới</Text>
                    <Switch 
                        style={{flex:1}}
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
            this.props.settingSound(value);
            this.setState({ toggled_sound: value })
        }else {
            this.props.settingVibrate(value);
            this.setState({ toggled_vibrate: value})
        }
        
     }
 }

 function mapStateToProps(state){
     return {
        valueSound: state.valueSound,
        valueVibrate: state.valueVibrate,  
     }
 }

 export default connect(mapStateToProps,{settingSound, settingVibrate})(SettingComponent);

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