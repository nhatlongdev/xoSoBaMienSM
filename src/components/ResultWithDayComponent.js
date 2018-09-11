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
import GlobalValue from '../data/GlobalValue';
import moment from 'moment';
import schedule_lottery_with_provincial from '../data/schedule_lottery_with_provincial';
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
//REDUX
import { connect } from 'react-redux';
import { selectRegion, clickCalendar } from '../redux/actionCreators';

class ResultWithDayComponent extends Component {

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
         const {dataLottery} = this.props;
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
                    <Text style = {styles.text_title}>KẾT QUẢ THEO NGÀY</Text>
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
                        textDayFontFamily: 'monospace',
                        textMonthFontFamily: 'monospace',
                        textDayHeaderFontFamily: 'monospace',
                        textMonthFontWeight: 'bold',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16
                    }}
                    // onDayPress={(day) => alert()} ==>ON event user click date
                    onDayPress={(day) => {
                        GlobalValue.daySelected = day.dateString;
                        let key = GlobalValue.codeProvincialSelected + '_' + moment(GlobalValue.daySelected).format('YYYYMMDD');
                        if(dataLottery[key] !== null && dataLottery[key] !== undefined){
                            //Goi actionCreator
                            this.props.selectRegion('4');
                            this.props.clickCalendar();
                            //chuyển tới màn hình xem kết quả theo ngày của từng tỉnh
                            this.props.navigation.navigate('ResultLotteryComponent');
                        }else {
                            var d = new Date(GlobalValue.daySelected);
                            let indexDay = d.getDay() + 1;
                            if(schedule_lottery_with_provincial[GlobalValue.codeProvincialSelected].weekdays.indexOf(indexDay+'') !== -1){
                                alert('Ngày ' + moment(d).format('DD/MM/YYYY') + ' xổ số ' + GlobalValue.nameProvincialSelected + ' không có lịch quay')
                            }else {
                                alert('Chưa có kết quả xổ số cho ngày ' + moment(d).format('DD/MM/YYYY'))
                            }   
                        }
                    }}
                />
                <PickerProvincialComponent/>
             </View>
         );
     }
 }

 //function map state to props
 function mapStateToProps(state){
    return {
       dataLottery: state.dataLottery,
    }
}

 export default connect(mapStateToProps, {selectRegion, clickCalendar})(ResultWithDayComponent);

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
 })