import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    FlatList
 } from 'react-native';
 import GlobalValue from '../data/GlobalValue';
 import ItemStatistic from './ItemStatistic';

 export default class FlatlistThongKeDauDuoiComponent extends Component {
     render() {

         return (
             <View style={{paddingBottom:5}}>
                <Text style={{fontSize:16, fontWeight:'bold', textAlign:'center', padding:5}}>{this.setTitle()}</Text>
                <View style={styles.container_1}>
                    <Text style={[styles.text_title,{flex:1}]}>{this.setTitleDauOrTongOrSo()}</Text>
                    <Text style={[styles.text_title,{flex:3}]}>Đặc biệt</Text>
                    <Text style={[styles.text_title,{flex:3}]}>Lô tô</Text>
                </View>
                <FlatList
                    data = {this.setDataForFlatlist()}
                    renderItem = {({item, index})=>{
                        return(
                            <ItemStatistic 
                                item={item} index={index}
                            />
                        );
                    }}
                    keyExtractor={ (item, index) => index.toString() }
                >
                </FlatList>
             </View>
         );
     }

     //set title
     setTitle(){
         var str='';
         if(this.props.action === 'THONG_KE_DAU'){
            str = 'Đầu số xuất hiện trong ' + GlobalValue.soLanQuay + ' lần quay xổ số ' + GlobalValue.nameProvincialSelected;
         }else if(this.props.action === 'THONG_KE_DUOI'){
            str = 'Đuôi số xuất hiện trong ' + GlobalValue.soLanQuay + ' lần quay xổ số ' + GlobalValue.nameProvincialSelected;
         }else if(this.props.action === 'THONG_KE_TONG_2_SO_CUOI'){
            str = 'Thống kê tổng hai số cuối xuất hiện trong ' + GlobalValue.soLanQuay + ' lần quay xổ số ' + GlobalValue.nameProvincialSelected;
         }else if(this.props.action === 'THONG_KE_00_99'){
            str = 'Thống kê số lần 00 - 99 xuất hiện trong ' + GlobalValue.soLanQuay + ' lần quay xổ số ' + GlobalValue.nameProvincialSelected;
         }
         return str;
     }

     //set title Dau or tong or so
     setTitleDauOrTongOrSo(){
         var s = '';
         if(this.props.action === 'THONG_KE_DAU'){
            s = 'ĐẦU';
         }else if(this.props.action === 'THONG_KE_DUOI'){
             s = 'ĐUÔI';
         }else if(this.props.action === 'THONG_KE_TONG_2_SO_CUOI'){
            s = 'TỔNG';
         }else if(this.props.action === 'THONG_KE_00_99'){
            s = 'SỐ';
         }
         return s;
     }

     //set data for Flatlist
     setDataForFlatlist(){
         if(this.props.action === 'THONG_KE_DAU'){
            return GlobalValue.arrDau;
         }else if(this.props.action === 'THONG_KE_DUOI'){
            return GlobalValue.arrDuoi;
         }else if(this.props.action === 'THONG_KE_TONG_2_SO_CUOI'){
            return GlobalValue.arrTongHaiSoCuoi;
         }else if(this.props.action === 'THONG_KE_00_99'){
            return GlobalValue.arr0099;
         }else {
             return [];
         }
     }
 }

 const styles = StyleSheet.create({
     container_1:{
        flexDirection: 'row', 
        backgroundColor:GlobalValue.Color.yellow_light, 
        borderBottomColor: 'grey', 
        borderBottomWidth: 1, 
        paddingVertical: 2
     },
     text_title:{
        textAlign: 'center', 
        color: 'black', 
        fontWeight: 'bold'
     }
 })