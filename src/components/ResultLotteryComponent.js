import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView, 
    Vibration,
    AppState,
    Platform
 } from 'react-native';
 import moment from 'moment';
 import ResultMienBacComponent from './ResultMienBacComponent';
 import ResultMienTrungNamComponent from './ResultMienTrungNamComponent';
 import ResultWithDaySelectedComponent from './ResultWithDaySelectedComponent';
 //FUNCTION FORMAT DATA
 import {formatDataLotteryToKeyValue} from '../functions/ConvertDataLotteryToKeyValue';
 import {createArrResultDoSo} from '../functions/CreateArrResultDoSo';
 import {getDataFromServerTrucTiep} from '../network/Server';

 //REDUX
 import { connect } from 'react-redux';
 import {addResultLottery, addResultDoSo, updateResultLottery} from '../redux/actionCreators';

 import GlobaleValue from '../data/GlobalValue';
 //library exit app
 import {
    handleAndroidBackButton,
    removeAndroidBackButtonHandler
  } from '../functions/BackHandlerXoSo';
 import {exitAlert} from '../functions/AlertXoSo';
//thoi gian bat dau quay, thoi gian dung quay
var dateTimeBatDauQuayMienNam, dateTimeDungQuayMienNam, dateTimeBatDauQuayMienTrung, dateTimeDungQuayMienTrung, dateTimeBatDauQuayMienBac, dateTimeDungQuayMienBac;

// Import the react-native-sound module
var SoundPlayer = require('react-native-sound');
var song;

//REALM DATABASE
const Realm = require('realm');
let realm;
var obj_data_cake;

//BIEN KIEM TRA CO KET QUAR MOI
var checkResultLotteryNew;

//FIREBASE ANALTYTICS
import Analytics from 'react-native-firebase-analytics';

class ResultLotteryComponent extends Component {

    constructor(props){
        super(props);
        checkResultLotteryNew
        song = null;
        //set thời điểm bắt đầu và kết thúc quay xổ số ba miền
        dateTimeBatDauQuayMienNam = moment(moment().format('YYYY-MM-DD') + ' 16:15'); //.format('YYYY/MM/DD HH:mm:ss')
        dateTimeDungQuayMienNam = moment(moment().format('YYYY-MM-DD' + ' 16:40'));
        dateTimeBatDauQuayMienTrung = moment(moment().format('YYYY-MM-DD') + ' 17:15'); //.format('YYYY/MM/DD HH:mm:ss')
        dateTimeDungQuayMienTrung = moment(moment().format('YYYY-MM-DD' + ' 17:40'));
        dateTimeBatDauQuayMienBac = moment(moment().format('YYYY-MM-DD') + ' 18:15'); //.format('YYYY/MM/DD HH:mm:ss')
        dateTimeDungQuayMienBac = moment(moment().format('YYYY-MM-DD' + ' 18:40'));

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

          //STATE COMPONENT
          this.state = {
            appState: AppState.currentState,
        };
    }

    componentWillMount(){
        if(Platform.OS !== 'ios'){
            Analytics.setUserId('11111');
            Analytics.setUserProperty('propertyName', 'propertyValue');
          
            Analytics.logEvent('view_item', {
              'item_id': 'login'
            });
            Analytics.setScreenName('RESULT LOTTERY SCREEN');
        }
    }

    shouldComponentUpdate(){
        return true;
    }

    componentWillUpdate(){
        console.log('WIllUPDATE: ' + this.props.regionSelected)
    }

    componentDidMount(){
        //CLICK PHONE BACK
        handleAndroidBackButton(exitAlert);

        //Nếu trong khung giờ quay trực tiếp thì 10s request lấy dữ liệu một lần
        var interval = setInterval(()=>{
            console.log("INTERVAL CHAY .....");
            var timeCurrent = moment();
            if((timeCurrent>= dateTimeBatDauQuayMienNam && timeCurrent< dateTimeDungQuayMienNam) || (timeCurrent>= dateTimeBatDauQuayMienTrung && timeCurrent< dateTimeDungQuayMienTrung) 
                || (timeCurrent>= dateTimeBatDauQuayMienBac && timeCurrent< dateTimeDungQuayMienBac)){
                // đến khung giờ quay trực tiếp thì 10s request server một lần lấy kết quả
                this.refreshFromServer10s();
            }
        },10000);

        //LOAD MUSIC
        song = new SoundPlayer('tin_nhan_moi.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
            if (error) {
              alert('failed to load the sound')
            return;
            }
            // loaded successfully
            // console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
        });

        //DK LANG NGHE SU KIEN APP THAY DOI TRANG THAI
        AppState.addEventListener('change', this._handleAppStateChange);
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
                {this.setView()}
             </View>
         );
     }

     //HAM XU LY KHI APP THAY DOI TRANG THAI FORE GROUND->BACKGROUND VA NGUOC LAI
     _handleAppStateChange = (nextAppState) => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
          //APP O TRANG THAI ACTIVE 
            this.refreshFromServer10s();
        }
        this.setState({appState: nextAppState});
    }

     //HAM SET VIEW
     setView(){
         if(Platform.OS === 'ios'){
            return (
                <ScrollView>
                    {
                    this.props.regionSelected === '1'?
                    <ResultMienBacComponent/>:this.props.regionSelected === '4'?GlobaleValue.codeProvincialSelected === 'MB'?<ResultMienBacComponent/>: <ResultWithDaySelectedComponent/>:
                    <ResultMienTrungNamComponent/>
                    }
                </ScrollView>
            )
         }else {
             if(this.props.regionSelected === '1') return (<ResultMienBacComponent/>);
             if(this.props.regionSelected === '4' && GlobaleValue.codeProvincialSelected === 'MB') return (<ResultMienBacComponent/>); 
             if(this.props.regionSelected === '4' && GlobaleValue.codeProvincialSelected !== 'MB') return (<ResultWithDaySelectedComponent/>); 
             return (<ResultMienTrungNamComponent/>);
         }
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

     //ham 10s goi api lay ket qua tu server
    refreshFromServer10s = ()=>{
        var dateCurrent = new Date();
        var paramsDateCurrent = moment(dateCurrent).format('YYYY-MM-DD');
        getDataFromServerTrucTiep(paramsDateCurrent).then((data_)=>{
            var dataLotteProvinces_ = data_;
            console.log("API TRA VE KET QUA TU REQUEST SERVER 10s: " + JSON.stringify(data_));
            if(dataLotteProvinces_.length > 0){ //Đã có kết quả quay trực tiếp
                if(checkResultLotteryNew !== JSON.stringify(data_)){
                    checkResultLotteryNew = JSON.stringify(data_);
                    this.onPlaySound();
                    this.onPlayVibrate();   
                }
                
                var d = formatDataLotteryToKeyValue(this.props.dataLottery, dataLotteProvinces_);    
                //CAP NHAT DU LIEU CHO STORE
                this.props.addResultLottery(d);
                this.props.updateResultLottery();

            }
        }).catch((error) =>{

        });
    }

    // HAM PLAY MUSIC
    onPlaySound(){
        if(song != null && obj_data_cake.is_sound === true){
            song.play((success)=>{
                if(!success) alert('play error');
            })
        }
    }

    //HAM VIBRATE
    onPlayVibrate(){
        if(obj_data_cake.is_vibrate === true){
            const DURATION = 1000
            const PATTERN = [1000, 2000, 3000]
            Vibration.vibrate(DURATION);
        }
    }
 }

 function mapStateToProps(state){
    return{
        regionSelected: state.regionSelected,
        clickCalendar: state.clickCalendar,
        dataLottery: state.dataLottery,
    };
 };

 export default connect(mapStateToProps,{addResultLottery, addResultDoSo, updateResultLottery})(ResultLotteryComponent);

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