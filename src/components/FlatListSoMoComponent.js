import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    FlatList
 } from 'react-native';
 import ItemSoMo from './ItemSoMo';

 //REDUX
 import { connect } from 'react-redux';
 
 class FlatListSoMoComponent extends Component {
     render() {
         return (
             <View style={styles.container}>
                <FlatList
                    style={{marginHorizontal: 5,marginBottom: 5,}}
                    data={this.props.data}
                    renderItem = {({item, index})=>{
                        return(
                        <ItemSoMo
                                item={item} index={index}
                        />         
                        );
                    }}
                    keyExtractor={(item, index)=> item.toString()}
                >
                </FlatList>
             </View>
         );
     }
 }

 function mapStateToProps(state){
     return{
        isSearchSoMo: state.isSearchSoMo
     }
 }

 export default connect(mapStateToProps)(FlatListSoMoComponent);

 const styles = StyleSheet.create({
     container:{
         flex:1,
     }
 })