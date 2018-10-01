import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    FlatList
 } from 'react-native';
 import ItemSoMo from './ItemSoMo';

 export default class FlatListSoMoComponent extends Component {

    constructor(props){
        super(props);

    }

     render() {
         return (
             <View style={styles.container}>
                <FlatList
                    style={{marginHorizontal: 5,marginBottom: 5,}}
                    onEndReachedThreshold = {0.1}
                    onEndReached = {() => {
                    this.on_EndReached()
                    }}
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

     on_EndReached() {
        // this.setState({
        //   loading: true
        // })
        // console.log('onreach', this.state.loading)
        // page = page + 10
        // this.getAPI(0,page)
        alert('red')
      }
 }

 const styles = StyleSheet.create({
     container:{
         flex:1,
     }
 })