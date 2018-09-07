import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView
 } from 'react-native';
 import ItemRowDauDuoi from '../components/ItemRowDauDuoi';
 import { connect } from 'react-redux';

 class ResultMienBacComponent extends Component {
     render() {
         const dataLottery = this.props;
         console.log('DATA SAU KHI LAY SEVER VE ADD: ' + JSON.stringify(dataLottery));
         return (
             <View style={styles.container}>
                <Text style={styles.text_title_date}>Thứ ba, 08/09/2018</Text>

                <ScrollView>
                <View style={styles.row_result}>
                     <Text style={styles.text_db_g1_title}>ĐB</Text>  
                     <Text style={[styles.text_db_g1_result,{color:'red', fontWeight:'bold'}]}>23456</Text> 
                </View>

                <View style={[styles.row_result,{backgroundColor:'#EEEEEE'}]}>
                     <Text style={styles.text_db_g1_title}>G.1</Text>  
                     <Text style={styles.text_db_g1_result}>23456</Text> 
                </View>

                <View style={styles.row_result}>
                    <Text style={styles.text_db_g1_title}>G.2</Text>  
                    <Text style={[styles.text_db_g1_result,{flex:2.99}]}>23456</Text> 
                    <Text style={[styles.text_db_g1_result,{flex:2.99}]}>23456</Text> 
                </View>

                <View style={[styles.row_result,{backgroundColor:'#EEEEEE'}]}>
                    <Text style={styles.text_db_g1_title}>G.3</Text>  
                    <View style={{flex:6, borderLeftWidth:1, borderLeftColor:'#DDDDDD',}}>
                        <View style={{flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#DDDDDD'}}>
                            <Text style={[styles.text_db_g1_result,{flex:1, borderLeftWidth:0}]}>23456</Text>
                            <Text style={[styles.text_db_g1_result,{flex:1}]}>23456</Text> 
                            <Text style={[styles.text_db_g1_result,{flex:1}]}>23456</Text>  
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={[styles.text_db_g1_result,{flex:1, borderLeftWidth:0}]}>23456</Text>
                            <Text style={[styles.text_db_g1_result,{flex:1}]}>23456</Text> 
                            <Text style={[styles.text_db_g1_result,{flex:1}]}>23456</Text>  
                        </View>
                    </View>    
                </View>

                <View style={styles.row_result}>
                    <Text style={styles.text_db_g1_title}>G.4</Text>  
                    <Text style={[styles.text_db_g1_result,{flex:1.48}]}>23456</Text> 
                    <Text style={[styles.text_db_g1_result,{flex:1.48}]}>23456</Text>
                    <Text style={[styles.text_db_g1_result,{flex:1.48}]}>23456</Text> 
                    <Text style={[styles.text_db_g1_result,{flex:1.48}]}>23456</Text> 
                </View>

                <View style={[styles.row_result,{backgroundColor:'#EEEEEE'}]}>
                    <Text style={styles.text_db_g1_title}>G.5</Text>  
                    <View style={{flex:6, borderLeftWidth:1, borderLeftColor:'#DDDDDD',}}>
                        <View style={{flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#DDDDDD'}}>
                            <Text style={[styles.text_db_g1_result,{flex:1, borderLeftWidth:0}]}>23456</Text>
                            <Text style={[styles.text_db_g1_result,{flex:1}]}>23456</Text> 
                            <Text style={[styles.text_db_g1_result,{flex:1}]}>23456</Text>  
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={[styles.text_db_g1_result,{flex:1, borderLeftWidth:0}]}>23456</Text>
                            <Text style={[styles.text_db_g1_result,{flex:1}]}>23456</Text> 
                            <Text style={[styles.text_db_g1_result,{flex:1}]}>23456</Text>  
                        </View>
                    </View>    
                </View>

                <View style={styles.row_result}>
                    <Text style={styles.text_db_g1_title}>G.6</Text>  
                    <Text style={[styles.text_db_g1_result,{flex:1.99}]}>456</Text> 
                    <Text style={[styles.text_db_g1_result,{flex:1.99}]}>234</Text>
                    <Text style={[styles.text_db_g1_result,{flex:1.99}]}>345</Text> 
                </View>

                <View style={[styles.row_result,{backgroundColor:'#EEEEEE'}]}>
                    <Text style={styles.text_db_g1_title}>G.7</Text>  
                    <Text style={[styles.text_db_g1_result,{flex:1.48}]}>23</Text> 
                    <Text style={[styles.text_db_g1_result,{flex:1.48}]}>45</Text>
                    <Text style={[styles.text_db_g1_result,{flex:1.48}]}>34</Text> 
                    <Text style={[styles.text_db_g1_result,{flex:1.48}]}>56</Text> 
                </View>

                <View style={{marginHorizontal:5, marginTop: 10, marginBottom:5, flexDirection:'row'}}>

                      <View style={{flex:1, marginRight:5}}>
                          <ItemRowDauDuoi dau={'Đầu'} duoi={'Đuôi'} 
                            styleView={[styles.row_result,{borderTopWidth:1, borderTopColor:'#DDDDDD', backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{fontWeight:'bold'}]} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/> 

                          <ItemRowDauDuoi dau={'0'} duoi={''} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/>

                          <ItemRowDauDuoi dau={'1'} duoi={'1,3,5,5,4,3,2'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/>  

                          <ItemRowDauDuoi dau={'2'} duoi={''} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/> 

                          <ItemRowDauDuoi dau={'3'} duoi={''} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/> 

                          <ItemRowDauDuoi dau={'4'} duoi={''} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/> 

                         <ItemRowDauDuoi dau={'5'} duoi={''} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/> 

                         <ItemRowDauDuoi dau={'6'} duoi={''} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/> 

                         <ItemRowDauDuoi dau={'7'} duoi={''} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/> 

                         <ItemRowDauDuoi dau={'8'} duoi={''} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/> 

                         <ItemRowDauDuoi dau={'9'} duoi={''} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/>                   
                      </View>
                      
                      <View style={{flex:1, marginRight:5}}>
                          <ItemRowDauDuoi dau={'Đầu'} duoi={'Đuôi'} 
                            styleView={[styles.row_result,{borderTopWidth:1, borderTopColor:'#DDDDDD', backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1, fontWeight:'bold'}]}/> 

                          <ItemRowDauDuoi dau={'2,3,4,5'} duoi={'0'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1}]}/> 

                          <ItemRowDauDuoi dau={''} duoi={'1'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1}]}/>  

                          <ItemRowDauDuoi dau={''} duoi={'2'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1}]}/> 

                          <ItemRowDauDuoi dau={''} duoi={'3'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1}]}/> 

                          <ItemRowDauDuoi dau={''} duoi={'4'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1}]}/> 

                         <ItemRowDauDuoi dau={''} duoi={'5'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1}]}/> 

                         <ItemRowDauDuoi dau={''} duoi={'6'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1}]}/> 

                         <ItemRowDauDuoi dau={''} duoi={'7'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1}]}/> 

                         <ItemRowDauDuoi dau={''} duoi={'8'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1}]}/> 

                         <ItemRowDauDuoi dau={''} duoi={'9'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1}]}/>          
                      </View>  
                </View>
                </ScrollView>

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

 export default connect(mapStateToProps)(ResultMienBacComponent);

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
        width:'100%',
        backgroundColor:'#EEEEEE',
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
        flex:6, 
        textAlign:'center', 
        alignItems: 'center', 
        borderLeftWidth:1, 
        borderLeftColor:'#DDDDDD',
        alignSelf: 'stretch',
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
        borderLeftWidth:1, 
        borderLeftColor:'#DDDDDD',
        alignSelf: 'stretch',
        paddingVertical: 5, 
        fontSize:16
    },
 })