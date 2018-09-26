import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    ToastAndroid
 } from 'react-native';
 //Lấy ds kết quả các tỉnh quay của miền trung hoặc nam
 import {getListItemWithDate} from '../functions/GetItemWithDate';
 import GlobalValue from '../data/GlobalValue';
 //REDUX
 import { connect } from 'react-redux';
 //MOMENT
 import moment from 'moment';

 //LIBRARY VUỐT MÀN HÌNH TRÁI PHẢI
 import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

 var date_view;
 var arr_result_lottery;
 var checkWillUpdate;
 var type_swipe;

 //biến này dùng để lưu lại giá trị region được chọn khi vào màn, nếu người dùng click từ menu trái chọn miền khác thì set date về ngày có kết quả gần nhất
 var regionSelectedTam;

 class ResultMienTrungNamComponent extends Component {

    constructor(props){
        super(props);
        type_swipe = 0;
        regionSelectedTam = this.props.regionSelected;
        checkWillUpdate = false;
        const regionSelected = this.props.regionSelected;
        const {dataLottery} = this.props;
        date_view = new Date();
        //Lay ds ket qua cac tinh quay hom do
        arr_result_lottery = getListItemWithDate(date_view, regionSelected, dataLottery, 0);
        if(arr_result_lottery.length === 0){
            console.log('chay toi day roi 1')
            arr_result_lottery = getListItemWithDate(date_view, regionSelected, dataLottery, -1);
        }
        ToastAndroid.show('Vuốt màn hình để xem kết quả ngày khác', ToastAndroid.SHORT);
        
    }

    componentWillMount(){
        
    }

    shouldComponentUpdate(){
        return true;
    }

    componentWillUpdate(){
        console.log('RENDER LAI MAN KET QUA')
        checkWillUpdate = true;
    }

    //Vuốt màn hình sang trái
    onSwipeLeft(gestureState) {
        GlobalValue.dragLottery = '1';
        type_swipe = 1;
      }
    
      // on sự kiện vuốt màn hình sang phải
      onSwipeRight(gestureState) {
        GlobalValue.dragLottery = '-1';  
        type_swipe = -1;
      }
    
      onSwipe(gestureName, gestureState) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        this.setState({gestureName: gestureName});
        switch (gestureName) {
          case SWIPE_UP:
            // this.setState({backgroundColor: 'red'});
            break;
          case SWIPE_DOWN:
            // this.setState({backgroundColor: 'green'});
            break;
          case SWIPE_LEFT:
            // this.setState({backgroundColor: 'blue'});
            
            break;
          case SWIPE_RIGHT:
            // this.setState({backgroundColor: 'yellow'});
            
            break;
        }
      }

     render() {
        console.log('RENDER KET QUA MIEN NAM')
        if(GlobalValue.dragLottery === '0'){
            GlobalValue.dragLottery = '2'
            type_swipe = 0;
            regionSelectedTam = this.props.regionSelected;
            checkWillUpdate = false;
            const regionSelected = this.props.regionSelected;
            const {dataLottery} = this.props;
            date_view = new Date();
            //Lay ds ket qua cac tinh quay hom do
            arr_result_lottery = getListItemWithDate(date_view, regionSelected, dataLottery, 0);
            if(arr_result_lottery.length === 0){
                arr_result_lottery = getListItemWithDate(date_view, regionSelected, dataLottery, -1);
            }
        }

        //Cau hinh thu vien GestureRecognizer
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 30
          };

         if(checkWillUpdate === true && type_swipe === 0){
            checkWillUpdate = false
            this.updateWhenStateChange();
         }

        //SỬ LÝ DATA KHI NGƯỜI DÙNG VUỐT SANG TRÁI HOẶC PHẢI 
        if(type_swipe !== 0){
            let type_Tam = type_swipe;
            type_swipe = 0;
            console.log('Bat dau keo: ' + moment(date_view).format('DD-MM-YYYY') + ' voi type la: ' + type_Tam)
            this.swipeLeftOrRight(type_Tam);
        }
    
         return (
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, state)}
                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                onSwipeRight={(state) => this.onSwipeRight(state)}
                config={config}
                style={{flex: 1,}}
            >
             <View style={styles.container}>
                <Text style={styles.text_title_date}>{arr_result_lottery[0].title}</Text>
                {
                    (arr_result_lottery[0].comment !== null && arr_result_lottery[0].comment !== undefined)? 
                    <Text style={[styles.text_title_date,{padding:0, paddingBottom:2, color:'red', fontWeight:'normal'}]}>{arr_result_lottery[0].comment}</Text>:null
                }
            
                <View style={{width:'100%', flexDirection:'row', backgroundColor:GlobalValue.Color.yellow_light, alignItems:'center', borderBottomWidth:1, borderBottomColor:GlobalValue.Color.vien}}>
                        <Text style={{flex:0.6}}></Text>
                        <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                            <Text style={styles.text_name_provincial}>{arr_result_lottery[0].name}</Text>
                            <Text style={styles.text_name_provincial}>{arr_result_lottery[1].name}</Text>
                            {
                                arr_result_lottery.length >= 3 ?
                                <Text style={styles.text_name_provincial}>{arr_result_lottery[2].name}</Text>: null
                            }
                            {
                                arr_result_lottery.length === 4 ?
                                <Text style={styles.text_name_provincial}>{arr_result_lottery[3].name}</Text>:null
                            }
                        </View>     
                    </View>
                <ScrollView>
                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>G.8</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={[styles.row_text_result,{color:'red', fontWeight:'bold'}]}>{this.setItemResult(0,0)}</Text>
                        <Text style={[styles.row_text_result,{color:'red', fontWeight:'bold'}]}>{this.setItemResult(1,0)}</Text>
                        {
                            arr_result_lottery.length >= 3 ?
                            <Text style={[styles.row_text_result,{color:'red', fontWeight:'bold'}]}>{this.setItemResult(2,0)}</Text>: null
                        }
                        {
                            arr_result_lottery.length === 4 ?
                            <Text style={[styles.row_text_result,{color:'red', fontWeight:'bold'}]}>{this.setItemResult(3,0)}</Text>:null
                        }  
                     </View>
                </View>
                <View style={[styles.view_row,{backgroundColor:GlobalValue.Color.bg}]}>
                     <Text style={styles.row_text_title}>G.7</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>{this.setItemResult(0,1)}</Text>
                        <Text style={styles.row_text_result}>{this.setItemResult(1,1)}</Text>
                        {
                            arr_result_lottery.length >= 3 ?
                            <Text style={styles.row_text_result}>{this.setItemResult(2,1)}</Text>: null
                        }
                        {
                            arr_result_lottery.length === 4 ?
                            <Text style={styles.row_text_result}>{this.setItemResult(3,1)}</Text>:null
                        }  
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>G.6</Text>
                     <View style={{flex:4, borderLeftWidth:1, borderLeftColor:GlobalValue.Color.vien, height:'100%'}}>
                         <View style={styles.view_row}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>{this.setItemResult(0,2)}</Text>
                            <Text style={styles.row_text_result}>{this.setItemResult(1,2)}</Text>
                            {
                                arr_result_lottery.length >= 3 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(2,2)}</Text>: null
                            }
                            {
                                arr_result_lottery.length === 4 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(3,2)}</Text>:null
                            }                                 
                         </View>
                         
                         <View style={styles.view_row}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>{this.setItemResult(0,3)}</Text>
                            <Text style={styles.row_text_result}>{this.setItemResult(1,3)}</Text>
                            {
                                arr_result_lottery.length >= 3 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(2,3)}</Text>: null
                            }
                            {
                                arr_result_lottery.length === 4 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(3,3)}</Text>:null
                            }                               
                         </View> 

                         <View style={[styles.view_row, {borderBottomWidth:0}]}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>{this.setItemResult(0,4)}</Text>
                            <Text style={styles.row_text_result}>{this.setItemResult(1,4)}</Text>
                            {
                                arr_result_lottery.length >= 3 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(2,4)}</Text>: null
                            }
                            {
                                arr_result_lottery.length === 4 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(3,4)}</Text>:null
                            }   
                         </View> 
                     </View>  
                </View>

                <View style={[styles.view_row,{backgroundColor:GlobalValue.Color.bg}]}>
                     <Text style={styles.row_text_title}>G.5</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>{this.setItemResult(0,5)}</Text>
                        <Text style={styles.row_text_result}>{this.setItemResult(1,5)}</Text>
                        {
                            arr_result_lottery.length >= 3 ?
                            <Text style={styles.row_text_result}>{this.setItemResult(2,5)}</Text>: null
                        }
                        {
                            arr_result_lottery.length === 4 ?
                            <Text style={styles.row_text_result}>{this.setItemResult(3,5)}</Text>:null
                        }                      
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>G.4</Text>
                     <View style={{flex:4, borderLeftWidth:1, borderLeftColor:GlobalValue.Color.vien, height:'100%'}}>
                         <View style={styles.view_row}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>{this.setItemResult(0,6)}</Text>
                            <Text style={styles.row_text_result}>{this.setItemResult(1,6)}</Text>
                            {
                                arr_result_lottery.length >= 3 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(2,6)}</Text>: null
                            }
                            {
                                arr_result_lottery.length === 4 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(3,6)}</Text>:null
                            }                          
                         </View>
                         
                         <View style={styles.view_row}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>{this.setItemResult(0,7)}</Text>
                            <Text style={styles.row_text_result}>{this.setItemResult(1,7)}</Text>
                            {
                                arr_result_lottery.length >= 3 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(2,7)}</Text>: null
                            }
                            {
                                arr_result_lottery.length === 4 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(3,7)}</Text>:null
                            }                                   
                         </View> 

                         <View style={styles.view_row}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>{this.setItemResult(0,8)}</Text>
                            <Text style={styles.row_text_result}>{this.setItemResult(1,8)}</Text>
                            {
                                arr_result_lottery.length >= 3 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(2,8)}</Text>: null
                            }
                            {
                                arr_result_lottery.length === 4 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(3,8)}</Text>:null
                            }                                                          
                         </View> 
                         
                         <View style={styles.view_row}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>{this.setItemResult(0,9)}</Text>
                            <Text style={styles.row_text_result}>{this.setItemResult(1,9)}</Text>
                            {
                                arr_result_lottery.length >= 3 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(2,9)}</Text>: null
                            }
                            {
                                arr_result_lottery.length === 4 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(3,9)}</Text>:null
                            }                                                           
                         </View>  

                         <View style={styles.view_row}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>{this.setItemResult(0,10)}</Text>
                            <Text style={styles.row_text_result}>{this.setItemResult(1,10)}</Text>
                            {
                                arr_result_lottery.length >= 3 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(2,10)}</Text>: null
                            }
                            {
                                arr_result_lottery.length === 4 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(3,10)}</Text> :null
                            }                                                           
                         </View>  

                         <View style={styles.view_row}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>{this.setItemResult(0,11)}</Text>
                            <Text style={styles.row_text_result}>{this.setItemResult(1,11)}</Text>
                            {
                                arr_result_lottery.length >= 3 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(2,11)}</Text>: null
                            }
                            {
                                arr_result_lottery.length === 4 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(3,11)}</Text> :null
                            }                                                         
                         </View>  

                         <View style={[styles.view_row, {borderBottomWidth:0}]}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>{this.setItemResult(0,12)}</Text>
                            <Text style={styles.row_text_result}>{this.setItemResult(1,12)}</Text>
                            {
                                arr_result_lottery.length >= 3 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(2,12)}</Text>: null
                            }
                            {
                                arr_result_lottery.length === 4 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(3,12)}</Text> :null
                            }                                                          
                         </View> 
                     </View>  
                </View>

                <View style={[styles.view_row,{backgroundColor:GlobalValue.Color.bg}]}>
                     <Text style={styles.row_text_title}>G.3</Text>
                     <View style={{flex:4, borderLeftWidth:1, borderLeftColor:GlobalValue.Color.vien, height:'100%'}}>
                         <View style={styles.view_row}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>{this.setItemResult(0,13)}</Text>
                            <Text style={styles.row_text_result}>{this.setItemResult(1,13)}</Text>
                            {
                                arr_result_lottery.length >= 3 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(2,13)}</Text>: null
                            }
                            {
                                arr_result_lottery.length === 4 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(3,13)}</Text>:null
                            }                                                         
                         </View>
                         
                         <View style={[styles.view_row, {borderBottomWidth:0}]}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>{this.setItemResult(0,14)}</Text>
                            <Text style={styles.row_text_result}>{this.setItemResult(1,14)}</Text>
                            {
                                arr_result_lottery.length >= 3 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(2,14)}</Text>: null
                            }
                            {
                                arr_result_lottery.length === 4 ?
                                <Text style={styles.row_text_result}>{this.setItemResult(3,14)}</Text>:null
                            }                                                           
                         </View> 
                     </View>  
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>G.2</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>{this.setItemResult(0,15)}</Text>
                        <Text style={styles.row_text_result}>{this.setItemResult(1,15)}</Text>
                        {
                            arr_result_lottery.length >= 3 ?
                            <Text style={styles.row_text_result}>{this.setItemResult(2,15)}</Text>: null
                        }
                        {
                            arr_result_lottery.length === 4 ?
                            <Text style={styles.row_text_result}>{this.setItemResult(3,15)}</Text>:null
                        }                                                
                     </View>
                </View>

                <View style={[styles.view_row,{backgroundColor:GlobalValue.Color.bg}]}>
                     <Text style={styles.row_text_title}>G.1</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>{this.setItemResult(0,16)}</Text>
                        <Text style={styles.row_text_result}>{this.setItemResult(1,16)}</Text>
                        {
                            arr_result_lottery.length >= 3 ?
                            <Text style={styles.row_text_result}>{this.setItemResult(2,16)}</Text>: null
                        }
                        {
                            arr_result_lottery.length === 4 ?
                            <Text style={styles.row_text_result}>{this.setItemResult(3,16)}</Text>:null
                        }                                              
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>ĐB</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={[styles.row_text_result,{color:'red',fontWeight:'bold'}]}>{this.setItemResult(0,17)}</Text>
                        <Text style={[styles.row_text_result,{color:'red',fontWeight:'bold'}]}>{this.setItemResult(1,17)}</Text>
                        {
                            arr_result_lottery.length >= 3 ?
                            <Text style={[styles.row_text_result,{color:'red',fontWeight:'bold'}]}>{this.setItemResult(2,17)}</Text>: null
                        }
                        {
                            arr_result_lottery.length === 4 ?
                            <Text style={[styles.row_text_result,{color:'red',fontWeight:'bold'}]}>{this.setItemResult(3,17)}</Text>:null
                        }                                               
                     </View>
                </View>

                <View style={[styles.view_row,{marginTop:10, backgroundColor:GlobalValue.Color.bg}]}>
                    <Text style={[styles.text_name_provincial,{flex:0.6, paddingVertical:3}]}>Đầu</Text>
                    <Text style={[styles.text_name_provincial,{flex:4, paddingVertical:3}]}>Đuôi</Text>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>0</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>{this.setItemResult_loto(0,0)}</Text>
                        <Text style={styles.row_text_result}>{this.setItemResult_loto(1,0)}</Text>
                        {
                            arr_result_lottery.length >= 3 ?
                            <Text style={styles.row_text_result}>{this.setItemResult_loto(2,0)}</Text>: null
                        }
                        {
                            arr_result_lottery.length === 4 ?
                            <Text style={styles.row_text_result}>{this.setItemResult_loto(3,0)}</Text>:null
                        }                                        
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>1</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>{this.setItemResult_loto(0,1)}</Text>
                        <Text style={styles.row_text_result}>{this.setItemResult_loto(1,1)}</Text>
                        {
                            arr_result_lottery.length >= 3 ?
                            <Text style={styles.row_text_result}>{this.setItemResult_loto(2,1)}</Text>: null
                        }
                        {
                            arr_result_lottery.length === 4 ?
                            <Text style={styles.row_text_result}>{this.setItemResult_loto(3,1)}</Text>:null
                        }                                        
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>2</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>{this.setItemResult_loto(0,2)}</Text>
                        <Text style={styles.row_text_result}>{this.setItemResult_loto(1,2)}</Text>
                        {
                            arr_result_lottery.length >= 3 ?
                            <Text style={styles.row_text_result}>{this.setItemResult_loto(2,2)}</Text>: null
                        }
                        {
                            arr_result_lottery.length === 4 ?
                            <Text style={styles.row_text_result}>{this.setItemResult_loto(3,2)}</Text>:null
                        }                                        
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>3</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>{this.setItemResult_loto(0,3)}</Text>
                        <Text style={styles.row_text_result}>{this.setItemResult_loto(1,3)}</Text>
                        {
                            arr_result_lottery.length >= 3 ?
                            <Text style={styles.row_text_result}>{this.setItemResult_loto(2,3)}</Text>: null
                        }
                        {
                            arr_result_lottery.length === 4 ?
                            <Text style={styles.row_text_result}>{this.setItemResult_loto(3,3)}</Text>:null
                        }                                        
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>4</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>{this.setItemResult_loto(0,4)}</Text>
                        <Text style={styles.row_text_result}>{this.setItemResult_loto(1,4)}</Text>
                        {
                            arr_result_lottery.length >= 3 ?
                            <Text style={styles.row_text_result}>{this.setItemResult_loto(2,4)}</Text>: null
                        }
                        {
                            arr_result_lottery.length === 4 ?
                            <Text style={styles.row_text_result}>{this.setItemResult_loto(3,4)}</Text>:null
                        }                                        
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>5</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>{this.setItemResult_loto(0,5)}</Text>
                        <Text style={styles.row_text_result}>{this.setItemResult_loto(1,5)}</Text>
                        {
                            arr_result_lottery.length >= 3 ?
                            <Text style={styles.row_text_result}>{this.setItemResult_loto(2,5)}</Text>: null
                        }
                        {
                            arr_result_lottery.length === 4 ?
                            <Text style={styles.row_text_result}>{this.setItemResult_loto(3,5)}</Text>:null
                        }                                        
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>6</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>{this.setItemResult_loto(0,6)}</Text>
                        <Text style={styles.row_text_result}>{this.setItemResult_loto(1,6)}</Text>
                        {
                            arr_result_lottery.length >= 3 ?
                            <Text style={styles.row_text_result}>{this.setItemResult_loto(2,6)}</Text>: null
                        }
                        {
                            arr_result_lottery.length === 4 ?
                            <Text style={styles.row_text_result}>{this.setItemResult_loto(3,6)}</Text>:null
                        }                                        
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>7</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>{this.setItemResult_loto(0,7)}</Text>
                        <Text style={styles.row_text_result}>{this.setItemResult_loto(1,7)}</Text>
                        {
                            arr_result_lottery.length >= 3 ?
                            <Text style={styles.row_text_result}>{this.setItemResult_loto(2,7)}</Text>: null
                        }
                        {
                            arr_result_lottery.length === 4 ?
                            <Text style={styles.row_text_result}>{this.setItemResult_loto(3,7)}</Text>:null
                        }                                        
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>8</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>{this.setItemResult_loto(0,8)}</Text>
                        <Text style={styles.row_text_result}>{this.setItemResult_loto(1,8)}</Text>
                        {
                            arr_result_lottery.length >= 3 ?
                            <Text style={styles.row_text_result}>{this.setItemResult_loto(2,8)}</Text>: null
                        }
                        {
                            arr_result_lottery.length === 4 ?
                            <Text style={styles.row_text_result}>{this.setItemResult_loto(3,8)}</Text>:null
                        }                                        
                     </View>
                </View>

                <View style={[styles.view_row,{marginBottom:5}]}>
                     <Text style={styles.row_text_title}>9</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>{this.setItemResult_loto(0,9)}</Text>
                        <Text style={styles.row_text_result}>{this.setItemResult_loto(1,9)}</Text>
                        {
                            arr_result_lottery.length >= 3 ?
                            <Text style={styles.row_text_result}>{this.setItemResult_loto(2,9)}</Text>: null
                        }
                        {
                            arr_result_lottery.length === 4 ?
                            <Text style={styles.row_text_result}>{this.setItemResult_loto(3,9)}</Text>:null
                        }                                        
                     </View>
                </View>


                </ScrollView>

             </View>
             </GestureRecognizer>
         );
     }

     //FUNCTION UPDATE DATA WHEN STATE CHANGE
     updateWhenStateChange(){
        const {dataLottery} = this.props;
        console.log('WIllUPDATE: ' + this.props.regionSelected)
        if(regionSelectedTam !== this.props.regionSelected){
            regionSelectedTam = this.props.regionSelected;
            date_view = new Date();
        }
        //Lay ds ket qua cac tinh quay hom do
        arr_result_lottery = getListItemWithDate(date_view, this.props.regionSelected, dataLottery, 0);
        //Neu ngay hien tai chua co ket qua thi lui lai mot ngay
        if(arr_result_lottery.length === 0){
            arr_result_lottery = getListItemWithDate(date_view, this.props.regionSelected, dataLottery, -1);
        }

        //Nếu lùi lại một ngày mà vẫn ko có dữ liệu thì thông báo ====>>> LAM SAU

        
     }

    //HÀM XỬ LÝ KHI NGƯỜI DÙNG VUỐT TRÁI, PHẢI
    swipeLeftOrRight(action_type){
        const {dataLottery} = this.props;
        var arr_result_lottery_tam=[];
        if(action_type === -1){
            arr_result_lottery_tam = getListItemWithDate(date_view, this.props.regionSelected, dataLottery, -1);
        }else{
            arr_result_lottery_tam = getListItemWithDate(date_view, this.props.regionSelected, dataLottery, 1);
        }
        if(arr_result_lottery_tam.length>0){
            arr_result_lottery = arr_result_lottery_tam;
           console.log('Data ResultL: ' + arr_result_lottery.length);
        }else {
            // if ngày vuốt tới mà ko có kết quả thì thông báo và cập nhật date về ngày trước khi vuốt
            ToastAndroid.show('Chưa có kết quả xổ số cho ngày ' + moment(date_view).format('DD-MM-YYYY'), ToastAndroid.SHORT);
            if(action_type === 1){
                date_view.setDate(date_view.getDate()-1);
            }else {
                date_view.setDate(date_view.getDate()+1);
            }   
        }
     } 

     //HAM SET GIAO DIEN KET QUA
     setItemResult(index1, index2){
         return arr_result_lottery[index1].arr_kq!==undefined?(arr_result_lottery[index1].arr_kq[index2]!==null && arr_result_lottery[index1].arr_kq[index2]!==undefined)?arr_result_lottery[index1].arr_kq[index2] !== ''?arr_result_lottery[index1].arr_kq[index2]:' ':' ':' ';
     }

     setItemResult_loto(index1, index2){
        return arr_result_lottery[index1].arr_dau_loto!==undefined?arr_result_lottery[index1].arr_dau_loto[index2]!==null?arr_result_lottery[index1].arr_dau_loto[index2]:' ':' ';
    }
     

 }

 //map state to props
 function mapStateToProps(state){
    return{
        dataLottery: state.dataLottery,
        regionSelected: state.regionSelected,
        updateLottery: state.updateLottery,
    };
 };

 export default connect(mapStateToProps)(ResultMienTrungNamComponent);

 const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
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
    text_name_provincial:{
        flex:1,
        textAlign:'center', 
        alignItems:'center', 
        fontWeight:'bold', 
        color:'black',
        paddingVertical: 5,
        fontSize:14
    },
    view_row:{
        width:'100%',
        flexDirection:'row', 
        alignItems:'center', 
        borderBottomWidth:1, 
        borderBottomColor:GlobalValue.Color.vien
    },
    row_text_title:{
        flex:0.6, 
        fontWeight:'bold', 
        fontSize:16, 
        textAlign:'center', 
        alignItems:'center',
        paddingVertical:5
    },
    row_text_result:{
        flex:1, 
        height:'100%', 
        color:'black', 
        fontSize:18, 
        textAlign:'center', 
        alignItems:'center',
        paddingVertical:5, 
        borderLeftWidth:1, 
        borderLeftColor:GlobalValue.Color.vien
    }
 });