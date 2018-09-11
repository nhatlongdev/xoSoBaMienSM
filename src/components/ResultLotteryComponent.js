import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView, 
    Platform
 } from 'react-native';
 import ResultMienBacComponent from './ResultMienBacComponent';
 import ResultMienTrungNamComponent from './ResultMienTrungNamComponent';
 import ResultWithDaySelectedComponent from './ResultWithDaySelectedComponent';
 import { connect } from 'react-redux';
 import GlobaleValue from '../data/GlobalValue';

 //library exit app
import {
    handleAndroidBackButton,
    removeAndroidBackButtonHandler
  } from '../functions/BackHandlerXoSo';
import {exitAlert} from '../functions/AlertXoSo';

class ResultLotteryComponent extends Component {

    constructor(props){
        super(props);

    }

    shouldComponentUpdate(){
        return true;
    }

    componentWillUpdate(){
        console.log('WIllUPDATE: ' + this.props.regionSelected)
    }

    componentDidMount(){
        handleAndroidBackButton(exitAlert);
    }

     render() {
        console.log('RENDER: ' + this.props.regionSelected)
         return (
            <View style={[styles.container,{marginTop:Platform.OS === 'ios'?25:0}]}>
                <View style = {styles.header_style}>
                    <TouchableOpacity onPress = {()=>
                        {this.props.navigation.openDrawer()}
                    }>
                        <Image
                            style={{width:30, height: 30,}}
                            source = {require('../images/menu.png')}
                        />
                    </TouchableOpacity>
                    <Text style = {styles.text_title}>{this.setTitleResultWithDomain(this.props.regionSelected)}</Text>
                        {/*<TouchableOpacity onPress = {()=>{this.clickBaChamGocPhai()}}>
                            <Image
                                source = {require('../images/dots_vertical.png')}
                            />
                        </TouchableOpacity>*/}
                </View> 
                {
                  this.props.regionSelected === '1'?
                  <ResultMienBacComponent/>:this.props.regionSelected === '4'?GlobaleValue.codeProvincialSelected === 'MB'?<ResultMienBacComponent/>: <ResultWithDaySelectedComponent/>:
                  <ResultMienTrungNamComponent/>
                }
                        
             </View>
         );
     }

     //SET TITLE WITH DOMAIN SELECTED
     setTitleResultWithDomain(value_region){
        var str = 'KẾT QUẢ MIỀN BẮC'; 
        if(value_region === '1'){
            str = 'KẾT QUẢ MIỀN BẮC';
        }else if(value_region === '2'){
            str = 'KẾT QUẢ MIỀN TRUNG';
        }else if(value_region === '3'){
            str = 'KẾT QUẢ MIỀN NAM';
        }else if(value_region === '4'){
            str = 'KẾT QUẢ ' + GlobaleValue.nameProvincialSelected.toUpperCase();
        }
        return str;
     }
 }

 function mapStateToProps(state){
    return{
        regionSelected: state.regionSelected,
        clickCalendar: state.clickCalendar,
    };
 };

 export default connect(mapStateToProps)(ResultLotteryComponent);

 const styles = StyleSheet.create({
     container:{
        flex:1,
        backgroundColor: 'white',
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
    text_title_date:{
        width:'100%',
        backgroundColor:'#EEEEEE',
        textAlign:'center',
        fontWeight:'bold',
        padding: 5,
        fontSize:16,
        color:'black',
    },
    row_result:{
        width:'100%',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        borderLeftWidth:1,
        borderLeftColor:'#DDDDDD',
        borderRightWidth: 1,
        borderRightColor: '#DDDDDD',
        borderBottomWidth:1,
        borderBottomColor:'#DDDDDD'
    },
    text_db_g1_title:{
        flex:1, 
        textAlign:'center', 
        alignItems: 'center', 
        color:'grey',
        fontWeight:'bold',
        fontSize:16
    },
    text_db_g1_result:{
        flex:6, 
        textAlign:'center', 
        borderLeftWidth:1, 
        borderLeftColor:'#DDDDDD',
        alignSelf: 'stretch',
        paddingVertical: 5, 
        fontSize:18
    },
    dau:{
        flex:1, 
        textAlign:'center', 
        alignItems: 'center', 
        color:'grey',
        paddingVertical: 5,
        fontSize:16
    },
    duoi:{
        flex:3, 
        textAlign:'center', 
        borderLeftWidth:1, 
        borderLeftColor:'#DDDDDD',
        alignSelf: 'stretch',
        paddingVertical: 5, 
        fontSize:16
    },
 })