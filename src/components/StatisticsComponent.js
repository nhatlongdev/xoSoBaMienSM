import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    BackHandler,
    Platform
 } from 'react-native';
 import PickerProvincialComponent from './PickerProvincialComponent';
 import InputSoLanQuayComponent from './InputSoLanQuayComponent';
 import GlobalValue from '../data/GlobalValue';
 import {thongKeDau_} from '../functions/ThongKeDau';
 import {thongKeDuoi_} from '../functions/ThongKeDuoi';
 import {thongKeTongHaiSoCuoi_} from '../functions/ThongKeTong2SoCuoi';
 import {thongKe_00_99} from '../functions/ThongKe_00_99';
 import {ThongKeLoKhan} from '../functions/ThongKeLoKhan';
 //REDUX
 import { connect } from 'react-redux';
 import { clickButtonStatistics } from '../redux/actionCreators';

class StatisticsComponent extends Component {

    constructor(props){
        super(props);
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
                    <Text style = {styles.text_title}>THỐNG KÊ</Text>
                </View> 
                <PickerProvincialComponent/>  
                <InputSoLanQuayComponent/> 

                <TouchableOpacity style={styles.button_style}
                    onPress = {()=>this.checkStringInputLegal(GlobalValue.soLanQuay) === 'ok'?this.thongKeDauDuoi():null}
                >
                        <Text style={{flex: 1, textAlign: 'center', color: 'black', fontWeight: 'bold'}}>THỐNG KÊ ĐẦU, ĐUÔI LÔ TÔ</Text>   
                        <Image
                            style={{tintColor:'#0000FF'}}
                            source={require('../images/arrow_next.png')}
                        />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_style}
                    onPress = {()=>this.checkStringInputLegal(GlobalValue.soLanQuay) === 'ok'?this.thongKeHaiSoCuoi():null}
                >
                        <Text style={{flex: 1, textAlign: 'center', color: 'black', fontWeight: 'bold'}}>THỐNG KÊ TỔNG 2 SỐ CUỐI</Text>   
                        <Image
                            style={{tintColor:'#0000FF'}}
                            source={require('../images/arrow_next.png')}
                        />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_style}
                    onPress = {()=>this.checkStringInputLegal(GlobalValue.soLanQuay) === 'ok'?this.thongKe0099():null}             
                >
                        <Text style={{flex: 1, textAlign: 'center', color: 'black', fontWeight: 'bold'}}>THỐNG KÊ 00 - 99</Text>   
                        <Image
                            style={{tintColor:'#0000FF'}}
                            source={require('../images/arrow_next.png')}
                        />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_style}
                    onPress = {()=>this.checkStringInputLegal(GlobalValue.soLanQuay) === 'ok'?this.thongKeCacSoVeNhieu():null}                   
                >
                        <Text style={{flex: 1, textAlign: 'center', color: 'black', fontWeight: 'bold'}}>THỐNG KÊ CÁC SỐ VỀ NHIỀU</Text>   
                        <Image
                            style={{tintColor:'#0000FF'}}
                            source={require('../images/arrow_next.png')}
                        />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_style}
                    onPress = {()=>this.checkStringInputLegal(GlobalValue.soLanQuay) === 'ok'?this.thongKeCacSoLauRa():null}                   
                >
                        <Text style={{flex: 1, textAlign: 'center', color: 'black', fontWeight: 'bold'}}>THỐNG KÊ CÁC SỐ LÂU RA</Text>   
                        <Image
                            style={{tintColor:'#0000FF'}}
                            source={require('../images/arrow_next.png')}
                        />
                </TouchableOpacity>

            </View>
         );
     }

     //Sử dụng reg để kiểm tra chuỗi ký tự nhập vào có hợp lệ ko
    checkStringInputLegal(soLanQuay){
        var str ='ok';
        if(soLanQuay.length === 0){
            str = '';
            alert('Bạn chưa nhập số lần quay');
        }else{
            var pattern_1 = /^[0-9]{1,2}$/;
            if(pattern_1.test(soLanQuay) === false){
                alert('Số lần quay không đúng định dạng, vui lòng nhập lại');
                str = '';
            }else if(soLanQuay === '0' || soLanQuay === '00'){
                alert('Số lần quay phải lớn hơn 0, vui lòng nhập lại');
                str = '';
            }
        }
        return str;
    }

      //HAM THONG KE DAU DUOI
      thongKeDauDuoi(){
        const {dataDoSo} = this.props;
        let data = dataDoSo[GlobalValue.codeProvincialSelected];
        GlobalValue.arrDau = thongKeDau_(data, GlobalValue.soLanQuay);
        GlobalValue.arrDuoi = thongKeDuoi_(data, GlobalValue.soLanQuay);
        //actionCreator
        this.props.clickButtonStatistics('DAU_DUOI');
        this.props.navigation.navigate('ResultStatisticsComponent');
     }  

     //HAM THONG KE TONG HAI SO CUOI
     thongKeHaiSoCuoi(){
        const {dataDoSo} = this.props;
        let data = dataDoSo[GlobalValue.codeProvincialSelected];
        GlobalValue.arrTongHaiSoCuoi = thongKeTongHaiSoCuoi_(data, GlobalValue.soLanQuay);
        //actionCreator
        this.props.clickButtonStatistics('TONG_2_SO_CUOI');
        this.props.navigation.navigate('ResultStatisticsComponent');
    }
    
    //HAM THONG KE 00 - 99
    thongKe0099(){
        const {dataDoSo} = this.props;
        let data = dataDoSo[GlobalValue.codeProvincialSelected];
        GlobalValue.arr0099 = thongKe_00_99(data, GlobalValue.soLanQuay);
        //actionCreator
        this.props.clickButtonStatistics('TK_00_99');
        this.props.navigation.navigate('ResultStatisticsComponent');
    }

    //HAM THONG KE CAC SO VE NHIEU
    thongKeCacSoVeNhieu(){
        const {dataDoSo} = this.props;
        let data = dataDoSo[GlobalValue.codeProvincialSelected];
        var arr_00_99 = thongKe_00_99(data, GlobalValue.soLanQuay);
        var _ = require('underscore');
        var arrVeNhieuTam = _.sortBy(arr_00_99, 'countLoTo');
        var arrVeNhieu_ = arrVeNhieuTam.reverse();
        GlobalValue.arrVeNhieu = arrVeNhieu_.slice(0, 40); 
        //actionCreator
        this.props.clickButtonStatistics('TK_VE_NHIEU');
        this.props.navigation.navigate('ResultStatisticsComponent');
    }

    //HAM THONG KE CAC SO LAU RA
    thongKeCacSoLauRa(){
        const {dataDoSo} = this.props;
        let data = dataDoSo[GlobalValue.codeProvincialSelected];
        var arr_lo_khan = ThongKeLoKhan(data, GlobalValue.soLanQuay);
        var _ = require('underscore');
        var arrLoKhan = _.sortBy(arr_lo_khan, 'soNgayLoKhan');
        GlobalValue.arrLauRa = arrLoKhan.reverse(); 
        //actionCreator
        this.props.clickButtonStatistics('TK_LAU_RA');
        this.props.navigation.navigate('ResultStatisticsComponent');
    }
 }

function mapStateToProps(state){
    return {
        dataDoSo: state.dataDoSo,
    }
}

 export default connect(mapStateToProps,{clickButtonStatistics})(StatisticsComponent);

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
        height: 50,padding: 5,
        marginBottom: 10,
    }
 })