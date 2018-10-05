import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
 } from 'react-native';
 import GlobalValue from '../data/GlobalValue';
 import ItemStatistic2 from './ItemStatistic2';

 export default class FlatlistCacSoVeNhieuComponent extends Component {
     render() {
         return (
            <View style = {{flex: 1, marginHorizontal: 2, marginBottom:5}}>
                <Text style = {{fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: 'black', paddingVertical: 2, margin:5}}>
                    Số xuất hiện nhiều trong {GlobalValue.soLanQuay} lần quay xổ số {GlobalValue.nameProvincialSelected}
                </Text>
                <View style={{flexDirection: 'row', backgroundColor: GlobalValue.Color.yellow_light, borderBottomColor: 'grey', borderBottomWidth: 1}}>
                    <Text style={{flex: 1, textAlign: 'center', color: 'black', fontWeight: 'bold'}}>Số</Text>
                    <Text style={{flex: 6, textAlign: 'center', color: 'black', fontWeight: 'bold'}}>Số lượt</Text>
                </View>
                <FlatList
                    data = {GlobalValue.arrVeNhieu}
                    renderItem = {({item, index})=>{
                        return(
                            <ItemStatistic2
                                item = {item} index = {index}
                            />
                        );
                    }}
                    keyExtractor={ (item, index) => index.toString() }
                >
                </FlatList>
            </View>
         );
     }
 }