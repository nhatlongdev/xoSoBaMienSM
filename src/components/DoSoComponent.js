import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    BackHandler,
 } from 'react-native';
 import PickerProvincialComponent from './PickerProvincialComponent';
 import InputSoLanQuayComponent from './InputSoLanQuayComponent';
 import InputChuoiSoDoComponent from './InputChuoiSoDoComponent';
 import GlobalValue from '../data/GlobalValue';
 import ListProvincial from '../data/ListProvincial';
 import dataBongSo from '../data/BongSo';
 import {filterArrDoSo} from '../functions/FilterArrDoSo';
 import ResultDoSoComponent from './ResultDoSoComponent';
 //REDUX
 import { connect } from 'react-redux';
 import { clickButtonDoSo } from '../redux/actionCreators';

 var item_provincial;
 var objResultDoSo = {};
 var arrSoDo;

 class DoSoComponent extends Component {

    constructor(props){
        super(props);
        arrSoDo = [];
        item_provincial = ListProvincial[0];
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        GlobalValue.arrSoDo = [];
        GlobalValue.objResultDoSo = {};
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
                    <Text style = {styles.text_title}>DÒ SỐ</Text>
                </View> 
                <PickerProvincialComponent/>  
                <InputSoLanQuayComponent/>  
                <InputChuoiSoDoComponent/>
                <TouchableOpacity style={styles.button_style}
                                    onPress = {()=>this.checkStringInputLegal() === 'ok'? 
                                    this.numberDetector(item_provincial, GlobalValue.chuoiSoDo, GlobalValue.soLanQuay):alert(this.checkStringInputLegal())}
                >
                        <Text style={{flex: 1, textAlign: 'center', color: 'black', fontWeight: 'bold'}}>TRA CỨU LÔ TÔ, DÒ SỐ</Text>   
                        <Image
                        source={require('../images/right_arrow31.png')}
                        />
                </TouchableOpacity>
                <ResultDoSoComponent arrSoDo={arrSoDo} objResultDoSo={objResultDoSo}/>    
            </View>
         );
     }

     //HAM KIEM TRA DU LIEU DAU VAO DA HOP LE CHUA DE TIM KIEM
     checkStringInputLegal(){
        var str ='ok';
        if(GlobalValue.soLanQuay.length === 0){
            str = 'Bạn chưa nhập số lần quay';
        }else if(GlobalValue.chuoiSoDo.length === 0){
            str = 'Bạn chưa nhập số cần dò';
        }else{
            var pattern_1 = /^[0-9]{1,2}$/;
            var pattern_2 = /^[0-9]{2},[0-9]{2}$/;
            if(pattern_1.test(GlobalValue.soLanQuay) === false){
                str = 'Số lần quay không đúng định dạng, vui lòng nhập lại';
            }else if(pattern_1.test(GlobalValue.chuoiSoDo)=== false && pattern_2.test(GlobalValue.chuoiSoDo) === false) {
                 str= 'Số dò nhập không đúng định dạng, vui lòng kiểm tra lại';
            }
        }
        return str;
    }

    //TIM MANG KET QUA TU CHUOI SO NGUOI DUNG NHAP VAO
    numberDetector(item_provincial, chuoiSoDo, soLanQuay){
       //Tách chuỗi nhập vào ra thành mảng number
       arrSoDo = [];
       objResultDoSo = {};
       var arrSoDoTam  = [];
       var arrNumber = chuoiSoDo.split(','); 
        console.log("SO DO: " + arrNumber.length)
       for(let i =0;i<arrNumber.length;i++){
            if(arrNumber[i].length !== 2) break;
            if(dataBongSo[arrNumber[i]] != null){
                console.log("CHAY VAO DK khac null ")
                arrSoDoTam = arrSoDoTam.concat(dataBongSo[arrNumber[i]]);
            }
       } 
       
       //Loại bỏ phần tử trùng nhau trong mảng
       if(arrSoDoTam.length >0){
            // set min count db, loto
            var _ = require('underscore');	
            arrSoDo = _.uniq(arrSoDoTam);
            // alert(arrSoDo.length)
       }

        //Lấy mảng kết quả của tỉnh được chọn
        var arrLotteryOfProvinces = {};
        const {dataDoSo} = this.props;
        arrLotteryOfProvinces = dataDoSo[item_provincial.code];
        console.log('Data dua vao: ' + JSON.stringify(arrLotteryOfProvinces) + " -----" + arrLotteryOfProvinces.length)


        for(let n=0; n<arrSoDo.length; n++){
            let arr_kq = filterArrDoSo(arrLotteryOfProvinces,arrSoDo[n],soLanQuay);
            objResultDoSo[arrSoDo[n]] = arr_kq;
        }
        GlobalValue.arrSoDo = arrSoDo;
        GlobalValue.objResultDoSo = objResultDoSo;
        //GOI ACTION CREATOR
        this.props.clickButtonDoSo();
    }

 }

 function mapStateToProps(state){
     return {
         dataDoSo: state.dataDoSo,
     }
 }

 export default connect(mapStateToProps,{clickButtonDoSo})(DoSoComponent);

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