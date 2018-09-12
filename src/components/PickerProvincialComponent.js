import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Picker
 } from 'react-native';
 import GlobalValue from '../data/GlobalValue';
 import ListProvincial from '../data/ListProvincial';
 export default class PickerProvincial extends Component {

    constructor(props){
        super(props);
        this.state = {
            provincial_selected: ListProvincial[0],
        }
        GlobalValue.codeProvincialSelected = ListProvincial[0].code;
        GlobalValue.nameProvincialSelected = ListProvincial[0].name;
    }

     render() {
         return (
             <View >
                <Text style={styles.text_title}>Chọn tỉnh/thành phố:</Text>
                <Picker 
                    selectedValue = {this.state.provincial_selected}
                    onValueChange={
                        (itemValue, itemIndex, item) => {
                            this.setState({provincial_selected: itemValue})
                            GlobalValue.codeProvincialSelected = ListProvincial[itemIndex].code;
                            GlobalValue.nameProvincialSelected = ListProvincial[itemIndex].name;
                        }}
                    mode={'dropdown'}
                > 
                    {this.renderItem()}
                </Picker>
             </View>
         );
     }

     //ITEM PICKER
     renderItem(){
        items = [];
        for(let item of ListProvincial){
            items.push(<Picker.Item key = {item.code} label={item.name} value={item.code}/>)
        }
        return items;
    }
 }

 const styles = StyleSheet.create({
     container:{
         flex:1,
     },
     text_title:{
        fontSize: 15, 
        fontWeight: 'bold', 
        color: 'black', 
        marginTop: 10, 
        marginHorizontal:5
     }
 })