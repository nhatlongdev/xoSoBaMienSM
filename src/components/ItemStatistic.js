import React, {Component} from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';
import GlobalValue from '../data/GlobalValue';

export default class ItemStatistic extends Component{

    //set color cho bieu do
    setBackgroundForChart(item, type){
        if(type == 'DB'){
            if(item.minDB == true){
                return GlobalValue.Color.green;
            }else if(item.maxDB == true){
                return GlobalValue.Color.red;
            }else {
                return GlobalValue.Color.bluee;
            }
        }else {
            if(item.minLoTo == true){
                return GlobalValue.Color.green;
            }else if(item.maxLoTo == true){
                return GlobalValue.Color.red;
            }else {
                return GlobalValue.Color.bluee;
            }
        } 
    }

    render(){
        const number = parseInt(this.props.item.name);
        return(
            <View style = {[styles.container,{backgroundColor: number%2 === 0?'white':GlobalValue.Color.bg}]}>
                <Text style = {{flex: 1, textAlign: 'center', color: 'black'}}>{this.props.item.name}</Text>
                <View style = {{flex: 3, flexDirection: 'row', borderLeftColor: 'grey', borderLeftWidth: 1, paddingHorizontal: 2, paddingVertical: 2, alignSelf:'stretch', alignItems:'center'}}>
                    <View style = {{flex:1.00, flexDirection:'row', alignItems:'center'}}>
                         <View style={{flex:parseFloat(this.props.item.lengthDB), height: 20, backgroundColor: this.setBackgroundForChart(this.props.item,'DB'), marginRight: 5}}></View>   
                         <View style={{flex:1 - parseFloat(this.props.item.lengthDB)}}></View>
                    </View>
                    <Text style={{flex:1}}>{this.props.item.phanTramDB}% ({this.props.item.countDB})</Text>
                </View>
                <View style = {{flex: 3, flexDirection: 'row', borderLeftColor: 'grey', borderLeftWidth: 1, 
                        borderRightColor: 'grey', borderRightWidth: 1,paddingHorizontal: 2, paddingVertical: 2,alignSelf:'stretch', alignItems:'center'}}>
                    <View style = {{flex:1.00, flexDirection:'row', alignItems:'center'}}>
                        <View style={{flex:parseFloat(this.props.item.lengthLoTo), height: 20, backgroundColor: this.setBackgroundForChart(this.props.item,'LoTo'), marginRight: 5}}></View>   
                        <View style={{flex:1 - parseFloat(this.props.item.lengthLoTo)}}></View>
                    </View>    
                    <Text style={{flex:1}}>{this.props.item.phanTramLoTo}% ({this.props.item.countLoTo})</Text>
                </View>
            </View>
        );
    }
    parseIntString(string_){
        var int_ = parseFloat(string_)*2;
        return int_;
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row', 
        borderBottomColor: 'grey', 
        borderBottomWidth: 1, 
        justifyContent:'center', 
        alignItems:'center', 
        borderLeftColor: 'grey', 
        borderLeftWidth: 1,
    }
})