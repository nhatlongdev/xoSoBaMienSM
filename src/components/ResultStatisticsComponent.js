import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    BackHandler,
    TouchableOpacity,
    Image,
    ScrollView
 } from 'react-native';
 import FlatlistThongKeDauDuoiComponent from './FlatlistThongKeDauDuoiComponent';
 import FlatlistThongKe0099Component from './FlatlistThongKe0099Component';
 import FlatlistCacSoVeNhieuComponent from './FlatlistCacSoVeNhieuComponent';
 //REDUX
 import { connect } from 'react-redux';
import FlatlistCacSoLauRaComponent from './FlatlistCacSoLauRaComponent';

class ResultStatisticsComponent extends Component {

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
        const clickButtonStatistics = this.props.clickButtonStatistics;
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
                    <Text style = {styles.text_title}>{this.props.clickButtonStatistics}</Text>
                </View> 
                
                {this.props.clickButtonStatistics === 'THỐNG KÊ 00 - 99'?<FlatlistThongKe0099Component action={'THONG_KE_00_99'}/>:
                this.props.clickButtonStatistics === 'THỐNG KÊ CÁC SỐ VỀ NHIỀU'?<FlatlistCacSoVeNhieuComponent/>:
                this.props.clickButtonStatistics === 'THỐNG KÊ CÁC SỐ LÂU RA'?<FlatlistCacSoLauRaComponent/>:
                <ScrollView>
                    {this.props.clickButtonStatistics === 'THỐNG KÊ ĐẦU ĐUÔI LÔ TÔ'?<FlatlistThongKeDauDuoiComponent action={'THONG_KE_DAU'}/>:null}
                    {this.props.clickButtonStatistics === 'THỐNG KÊ ĐẦU ĐUÔI LÔ TÔ'?<FlatlistThongKeDauDuoiComponent action={'THONG_KE_DUOI'}/>:null}
                    {this.props.clickButtonStatistics === 'THỐNG KÊ TỔNG 2 SỐ CUỐI'?<FlatlistThongKeDauDuoiComponent action={'THONG_KE_TONG_2_SO_CUOI'}/>:null}
                </ScrollView>}
             </View>
         );
     }

 }

 function mapStateToProps(state){
     return {
         clickButtonStatistics: state.clickButtonStatistics,
     }
 }

 export default connect(mapStateToProps)(ResultStatisticsComponent);

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
   }
})