import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image
 } from 'react-native';
 import GlobalValue from '../data/GlobalValue';
 import ItemRowDauDuoi from '../components/ItemRowDauDuoi';
 import moment from 'moment';
 import { getItemWithDate } from '../functions/GetItemWithDate';
 import { getKeyItemOneProvincial } from '../functions/GetKeyItemProvincial';
 import schedule_lottery_with_provincial from '../data/schedule_lottery_with_provincial';
 //REDUX
 import { connect } from 'react-redux';

 var date_view;
 var result;

    //Modal
    import Modal from "react-native-modal";
    //CALENDAR
    import {Calendar,LocaleConfig} from 'react-native-calendars';
    //cấu hình ngôn ngữ hiển thị cho calendar
    LocaleConfig.locales['fr'] = {
    monthNames: ['Tháng Một','Tháng Hai','Tháng Ba','Tháng Tư','Tháng Năm','Tháng sáu','Tháng bảy','Tháng Tám','Tháng Chín','Tháng Mười','Tháng 11','Tháng 12'],
    monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
    dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    dayNamesShort: ['CN','Hai','Ba','Tư','Năm','Sáu','Bảy']
    };
    LocaleConfig.defaultLocale = 'fr';
    var check = false;

 class ResultWithDaySelectedComponent extends Component {

    constructor(props){
        super(props);
        //state
        this.state={
            showModel:false,
        }
        const {dataLottery} = this.props;
        date_view = new Date(GlobalValue.daySelected);
        var key_item = getKeyItemOneProvincial(date_view,GlobalValue.codeProvincialSelected, 0);
        result = getItemWithDate(this.props.regionSelected, date_view, key_item, dataLottery);
        if(result.s === '1'){
            result.moment = 'Đang quay ...';
        }
        console.log('OBJ RESULT: ' + JSON.stringify(result))
    }

    shouldComponentUpdate(){
        return true;
    }

    componentWillUpdate(){
        if(check === false){
            this.updateData();
        }else{
            check = false;
        }
    }

     render() {
       
        if(GlobalValue.dragLottery === '3'){//dang quay truc tiep
            GlobalValue.dragLottery = '2';
            //Lay ds ket qua cac tinh quay hom do
            const {dataLottery} = this.props;
            var key_item = getKeyItemOneProvincial(date_view,GlobalValue.codeProvincialSelected, 0);
            result = getItemWithDate(this.props.regionSelected, date_view, key_item, dataLottery);
            if(result.s === '1'){
                result.moment = 'Đang quay ...';
            }
        }
         return (
            <View style={styles.container}>
                <View style={{flexDirection:'row', width:'100%',backgroundColor:'#EEEEEE', alignItems:'center', justifyContent:'center'}}>
                    <Text style={[styles.text_title_date,{borderBottomWidth:0, marginRight:10}]}>{this.setTitle()}</Text>
                    <TouchableOpacity onPress={()=>{
                        this.clickCalendar()
                    }}>
                        <Image
                            style={{width:30, height: 30}}
                            source = {require('../images/icon_calendar.png')}
                        />
                    </TouchableOpacity>
                </View>
                {
                    (result.comment !== null && result.comment !== undefined)? 
                    <Text style={[styles.text_title_date,{padding:0, paddingBottom:2, color:'red', fontWeight:'normal'}]}>{this.setComment()}</Text>:null
                }
                <ScrollView>
                <View style={styles.row_result}>
                     <Text style={styles.text_db_g1_title}>G.8</Text>
                     <View style={[styles.view_text,{flex:6}]}>
                        <Text style={[styles.text_db_g1_result,{color:'red'}]}>{this.setItemResult(0)}
                        <Text style={styles.bold_loto}>{this.setItemResult_1(0)}</Text>
                        </Text> 
                     </View>  
                     
                </View>

                <View style={[styles.row_result,{backgroundColor:'#EEEEEE'}]}>
                     <Text style={styles.text_db_g1_title}>G.7</Text>  
                     <View style={[styles.view_text,{flex:6}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(1)}
                        <Text style={styles.bold_loto}>{this.setItemResult_1(1)}</Text>
                        </Text>
                     </View>                    
                </View>

                <View style={styles.row_result}>
                    <Text style={styles.text_db_g1_title}>G.6</Text> 
                     <View style={[styles.view_text,{flex:1.99}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(2)}
                        <Text style={styles.bold_loto}>{this.setItemResult_1(2)}</Text>
                        </Text>
                     </View> 
                     <View style={[styles.view_text,{flex:1.99}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(3)}
                        <Text style={styles.bold_loto}>{this.setItemResult_1(3)}</Text>
                        </Text>
                     </View>
                     <View style={[styles.view_text,{flex:1.99}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(4)}
                        <Text style={styles.bold_loto}>{this.setItemResult_1(4)}</Text>
                        </Text>
                     </View>
                </View>

                <View style={[styles.row_result,{backgroundColor:'#EEEEEE'}]}>
                     <Text style={styles.text_db_g1_title}>G.5</Text>  
                     <View style={[styles.view_text,{flex:6}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(5)}
                        <Text style={styles.bold_loto}>{this.setItemResult_1(5)}</Text>
                        </Text>
                     </View> 
                </View>

                <View style={styles.row_result}>
                    <Text style={styles.text_db_g1_title}>G.4</Text>  
                    <View style={{flex:6, borderLeftWidth:1, borderLeftColor:'#DDDDDD',}}>
                        <View style={{flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#DDDDDD'}}>
                            <Text style={styles.text_db_g1_result}>{this.setItemResult(6)}
                            <Text style={styles.bold_loto}>{this.setItemResult_1(6)}</Text>
                            </Text>
                            <View style={styles.view_text}>
                                <Text style={styles.text_db_g1_result}>{this.setItemResult(7)}
                                <Text style={styles.bold_loto}>{this.setItemResult_1(7)}</Text>
                                </Text>
                            </View>
                            <View style={styles.view_text}>
                                <Text style={styles.text_db_g1_result}>{this.setItemResult(8)}
                                <Text style={styles.bold_loto}>{this.setItemResult_1(8)}</Text>
                                </Text>
                            </View>
                            <View style={styles.view_text}>
                                <Text style={styles.text_db_g1_result}>{this.setItemResult(9)}
                                <Text style={styles.bold_loto}>{this.setItemResult_1(9)}</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.text_db_g1_result}>{this.setItemResult(10)}
                            <Text style={styles.bold_loto}>{this.setItemResult_1(10)}</Text>
                            </Text>    
                            <View style={styles.view_text}>
                                <Text style={styles.text_db_g1_result}>{this.setItemResult(11)}
                                <Text style={styles.bold_loto}>{this.setItemResult_1(11)}</Text>
                                </Text>
                            </View>
                            <View style={styles.view_text}>
                                <Text style={styles.text_db_g1_result}>{this.setItemResult(12)}
                                <Text style={styles.bold_loto}>{this.setItemResult_1(12)}</Text>
                                </Text>
                            </View>  
                        </View>
                    </View>    
                </View>

                <View style={[styles.row_result,{backgroundColor:'#EEEEEE'}]}>
                    <Text style={styles.text_db_g1_title}>G.3</Text> 
                    <View style={[styles.view_text,{flex:2.99}]}>
                            <Text style={styles.text_db_g1_result}>{this.setItemResult(13)}
                            <Text style={styles.bold_loto}>{this.setItemResult_1(13)}</Text>
                            </Text>
                     </View> 
                     <View style={[styles.view_text,{flex:2.99}]}>
                            <Text style={styles.text_db_g1_result}>{this.setItemResult(14)}
                            <Text style={styles.bold_loto}>{this.setItemResult_1(14)}</Text>
                            </Text>
                     </View> 
                </View>

                <View style={styles.row_result}>
                     <Text style={styles.text_db_g1_title}>G.2</Text>  
                     <View style={[styles.view_text,{flex:6}]}>
                            <Text style={styles.text_db_g1_result}>{this.setItemResult(15)}
                            <Text style={styles.bold_loto}>{this.setItemResult_1(15)}</Text>
                            </Text>
                     </View> 
                </View>

                <View style={[styles.row_result,{backgroundColor:'#EEEEEE'}]}>
                     <Text style={styles.text_db_g1_title}>G.1</Text>  
                     <View style={[styles.view_text,{flex:6}]}>
                            <Text style={styles.text_db_g1_result}>{this.setItemResult(16)}
                            <Text style={styles.bold_loto}>{this.setItemResult_1(16)}</Text>
                            </Text>
                     </View> 
                </View>

                <View style={styles.row_result}>
                     <Text style={styles.text_db_g1_title}>ĐB</Text>  
                     <View style={[styles.view_text,{flex:6}]}>
                        <Text style={[styles.text_db_g1_result,{color:'red'}]}>{this.setItemResult(17)}
                        <Text style={styles.bold_loto}>{this.setItemResult_1(17)}</Text>
                        </Text>
                     </View> 
                </View>

                <View style={{marginHorizontal:5, marginTop: 10, marginBottom:5, flexDirection:'row'}}>

                      <View style={{flex:1, marginRight:5}}>
                          <ItemRowDauDuoi dau={'Đầu'} duoi={'Đuôi'} 
                            styleView={[styles.row_result,{borderTopWidth:1, borderTopColor:'#DDDDDD', backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{fontWeight:'bold', color:'black'}]} styleDuoi={[styles.duoi,{fontWeight:'bold'}]} flexDuoi={3}/> 

                          <ItemRowDauDuoi dau={'0'} duoi={result.arr_dau_loto[0]} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={styles.duoi} flexDuoi={3}/>

                          <ItemRowDauDuoi dau={'1'} duoi={result.arr_dau_loto[1]} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={styles.duoi} flexDuoi={3}/>  

                          <ItemRowDauDuoi dau={'2'} duoi={result.arr_dau_loto[2]} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={styles.duoi} flexDuoi={3}/> 

                          <ItemRowDauDuoi dau={'3'} duoi={result.arr_dau_loto[3]} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={styles.duoi} flexDuoi={3}/> 

                          <ItemRowDauDuoi dau={'4'} duoi={result.arr_dau_loto[4]} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={styles.duoi} flexDuoi={3}/> 

                         <ItemRowDauDuoi dau={'5'} duoi={result.arr_dau_loto[5]} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={styles.duoi} flexDuoi={3}/> 

                         <ItemRowDauDuoi dau={'6'} duoi={result.arr_dau_loto[6]} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={styles.duoi} flexDuoi={3}/> 

                         <ItemRowDauDuoi dau={'7'} duoi={result.arr_dau_loto[7]} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={styles.duoi} flexDuoi={3}/> 

                         <ItemRowDauDuoi dau={'8'} duoi={result.arr_dau_loto[8]} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={styles.duoi} flexDuoi={3}/> 

                         <ItemRowDauDuoi dau={'9'} duoi={result.arr_dau_loto[9]} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={styles.duoi} flexDuoi={3}/>                   
                      </View>
                      
                      <View style={{flex:1, marginRight:5}}>
                          <ItemRowDauDuoi dau={'Đầu'} duoi={'Đuôi'} 
                            styleView={[styles.row_result,{borderTopWidth:1, borderTopColor:'#DDDDDD', backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold', color:'black'}]} styleDuoi={[styles.duoi,{flex:1, fontWeight:'bold'}]} flexDuoi={1}/> 

                          <ItemRowDauDuoi dau={result.arr_duoi_loto[0]} duoi={'0'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, color:'black'}]} styleDuoi={[styles.duoi,{flex:1, color:'grey'}]} flexDuoi={1}/> 

                          <ItemRowDauDuoi dau={result.arr_duoi_loto[1]} duoi={'1'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, color:'black'}]} styleDuoi={[styles.duoi,{flex:1, color:'grey'}]} flexDuoi={1}/>  

                          <ItemRowDauDuoi dau={result.arr_duoi_loto[2]} duoi={'2'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, color:'black'}]} styleDuoi={[styles.duoi,{flex:1, color:'grey'}]} flexDuoi={1}/> 

                          <ItemRowDauDuoi dau={result.arr_duoi_loto[3]} duoi={'3'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, color:'black'}]} styleDuoi={[styles.duoi,{flex:1, color:'grey'}]} flexDuoi={1}/> 

                          <ItemRowDauDuoi dau={result.arr_duoi_loto[4]} duoi={'4'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, color:'black'}]} styleDuoi={[styles.duoi,{flex:1, color:'grey'}]} flexDuoi={1}/> 

                         <ItemRowDauDuoi dau={result.arr_duoi_loto[5]} duoi={'5'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, color:'black'}]} styleDuoi={[styles.duoi,{flex:1, color:'grey'}]} flexDuoi={1}/> 

                         <ItemRowDauDuoi dau={result.arr_duoi_loto[6]} duoi={'6'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, color:'black'}]} styleDuoi={[styles.duoi,{flex:1, color:'grey'}]} flexDuoi={1}/> 

                         <ItemRowDauDuoi dau={result.arr_duoi_loto[7]} duoi={'7'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, color:'black'}]} styleDuoi={[styles.duoi,{flex:1, color:'grey'}]} flexDuoi={1}/> 

                         <ItemRowDauDuoi dau={result.arr_duoi_loto[8]} duoi={'8'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, color:'black'}]} styleDuoi={[styles.duoi,{flex:1, color:'grey'}]} flexDuoi={1}/> 

                         <ItemRowDauDuoi dau={result.arr_duoi_loto[9]} duoi={'9'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, color:'black'}]} styleDuoi={[styles.duoi,{flex:1, color:'grey'}]} flexDuoi={1}/>          
                      </View>  
                </View>
                </ScrollView>
                <Modal isVisible={this.state.showModel}
                    backdropOpacity={0.1}
                    backdropColor='red'
                >
                    <View style={{backgroundColor:'grey'}}>
                        <View style={{flexDirection:'row', width:'100%', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{flex:1, textAlign:'center', fontSize:18, fontWeight:'bold', color:'white', padding:5}}>Chọn ngày xem kết quả</Text>
                            <TouchableOpacity
                                onPress={()=>{
                                    this.setState({
                                        showModel:false
                                    })
                                }}
                            >
                                <Image
                                    style={{width:30, height: 30, tintColor:'white', marginRight:5}}
                                    source = {require('../images/exit_calendar.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <Calendar
                            // Specify style for calendar container element. Default = {}
                            style={{
                                borderWidth: 1,
                                borderColor: 'gray',
                                height: 350
                            }}
                            // Specify theme properties to override specific styles for calendar parts. Default = {}
                            theme={{
                                backgroundColor: '#ffffff',
                                calendarBackground: '#ffffff',
                                textSectionTitleColor: '#b6c1cd',
                                selectedDayBackgroundColor: '#00adf5',
                                selectedDayTextColor: '#ffffff',
                                todayTextColor: '#00adf5',
                                dayTextColor: '#2d4150',
                                textDisabledColor: '#d9e1e8',
                                dotColor: '#00adf5',
                                selectedDotColor: '#ffffff',
                                arrowColor: 'orange',
                                monthTextColor: 'blue',
                                textDayFontFamily: 'Roboto',
                                textMonthFontFamily: 'Roboto',
                                textDayHeaderFontFamily: 'Roboto',
                                textMonthFontWeight: 'bold',
                                textDayFontSize: 16,
                                textMonthFontSize: 16,
                                textDayHeaderFontSize: 16
                            }}
                            // onDayPress={(day) => alert()} ==>ON event user click date
                            onDayPress={(day) => {
                                let d = new Date(day.dateString);
                                var key_item = getKeyItemOneProvincial(d,GlobalValue.codeProvincialSelected, 0);
                                let result_tam = getItemWithDate(this.props.regionSelected, d, key_item, this.props.dataLottery);
                                if(result_tam !== null && result_tam !== undefined){
                                    result = result_tam;
                                    date_view = new Date(day.dateString);
                                    GlobalValue.daySelected = day.dateString;
                                    //exit modal
                                    this.setState({
                                        showModel:false
                                    })
                                    check = true;
                                }else {
                                    let indexDay = d.getDay() + 1;
                                    if(schedule_lottery_with_provincial[GlobalValue.codeProvincialSelected].weekdays.indexOf(indexDay+'') === -1){
                                        alert('Ngày ' + moment(d).format('DD/MM/YYYY') + ' xổ số ' + GlobalValue.nameProvincialSelected + ' không có lịch quay')
                                    }else {
                                        alert('Chưa có kết quả xổ số cho ngày ' + moment(d).format('DD/MM/YYYY'))
                                    }   
                                }   
                            }}
                         />
                    </View>
                </Modal>  
             </View>
         );
     }

     //FUNCTION UPDATE LAI DATA 
     updateData(){
        const {dataLottery} = this.props;
        date_view = new Date(GlobalValue.daySelected);
        var key_item = getKeyItemOneProvincial(date_view,GlobalValue.codeProvincialSelected, 0);
        result = getItemWithDate(this.props.regionSelected, date_view, key_item, dataLottery);
        if(result.s === '1'){
            result.moment = 'Đang quay ...';
        }
     }

     //Click calendar
     clickCalendar(){
        this.setState({
            showModel:true,
        })
    }

     //SET TITLE THEO NGAY
     setTitle(){
        if(result !== undefined && result !== null && result.title !== undefined && result.title !== null){
            return result.title;
        }else {
            return ' ';
        }
     }
     setComment(){ // set comment
        if(result !== undefined && result !== null && result.comment !== undefined && result.comment !== null){
            return result.comment;
        }else {
            return ' ';
        }
     }

      //HAM SET GIAO DIEN KET QUA
      setItemResult(index){
        if(result !== undefined && result !== null){
            var str = '';
            var s = '';
            if(result.arr_kq!==undefined && result.arr_kq[index]!==null && result.arr_kq[index]!==undefined && result.arr_kq[index]!==''){
                str = result.arr_kq[index];
            }
            if(str !== '' && str.length>2){
                s = str.substr(0, str.length -2);
                return s;
            }else if(str !== '' && str.length === 2){
                return '';
            }else {
                return ' ';
            }
        }else {
            return ' ';
        }
     }

     setItemResult_1(index){
        if(result !== undefined && result !== null){
            var str = '';
            var s = '';
            if(result.arr_kq!==undefined && result.arr_kq[index]!==null && result.arr_kq[index]!==undefined && result.arr_kq[index]!==''){
                str = result.arr_kq[index];
            }
            if(str !== '' && str.length>2){
                s = str.substr(str.length -2,2);
                return s;
            }else if(str !== '' && str.length === 2){
                return str;
            }else {
                return ' ';
            }
        }else {
            return ' ';
        } 
     }

 }

 //function map state to props
 function mapStateToProps(state){
    return {
       dataLottery: state.dataLottery,
       clickCalendar: state.clickCalendar,
       updateLottery: state.updateLottery,
    }
}
export default connect(mapStateToProps)(ResultWithDaySelectedComponent);

 const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
    },
    text_title:{
        flex:1,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    text_title_date:{
        backgroundColor:'#EEEEEE',
        borderBottomWidth:1,
        borderBottomColor:'#DDDDDD',
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
        flex:1, 
        textAlign:'center', 
        alignItems: 'center', 
        alignSelf: 'stretch',
        color:'black',
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
        color:'black', 
        borderLeftWidth:1, 
        borderLeftColor:'#DDDDDD',
        alignSelf: 'stretch',
        paddingVertical: 5, 
        fontSize:16
    },
    view_text:{
        flex: 1, 
        borderLeftWidth: 1,
        borderLeftColor:'#DDDDDD'
    },
    bold_loto:{
        fontWeight:'bold',
    }
 })