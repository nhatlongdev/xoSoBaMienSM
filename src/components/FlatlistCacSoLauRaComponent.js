import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    Platform
 } from 'react-native';
 import GlobalValue from '../data/GlobalValue';
 import ItemStatistic3 from './ItemStatistic3';

 export default class FlatlistCacSoLauRaComponent extends Component {
     render() {
         return (
            <SafeAreaView style = {{flex: 1, marginHorizontal: 2,marginBottom:5}}>
                <Text style = {{fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: 'black', margin:5}}>
                    Thống kê các số lâu ra trong {GlobalValue.soLanQuay} lần quay xổ số {GlobalValue.nameProvincialSelected}
                </Text>
                <View style={{flexDirection: 'row', backgroundColor: 'red', borderBottomColor: 'grey', borderBottomWidth: 1, paddingVertical: 2}}>
                    <Text style={{flex: 1, textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Số</Text>
                    <Text style={{flex: 6, textAlign: 'center', justifyContent: 'center' , color: 'white', fontWeight: 'bold'}}>Số ngày chưa ra</Text>
                </View>
                <FlatList
                    data = {GlobalValue.arrLauRa}
                    renderItem = {({item, index})=>{
                        return(
                            <ItemStatistic3
                                item = {item} index = {index}
                            />
                        );
                    }}
                    keyExtractor={ (item, index) => index.toString() }
                >
                </FlatList>
            </SafeAreaView>
         );
     }
 }