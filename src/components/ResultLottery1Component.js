import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
 } from 'react-native';

 export default class ResultLottery1Component extends Component {
     render() {
         return (
             <View style={styles.container}>
                <View style = {styles.header_style}>
                    <TouchableOpacity onPress = {()=>
                        {this.props.navigation.openDrawer()}
                    }>
                        <Image
                            style={{width:30, height: 30,}}
                            source = {require('../images/menu.png')}
                        />
                    </TouchableOpacity>
                    <Text style = {styles.text_title}>KẾT QUẢ MIỀN BẮC</Text>
                        {/*<TouchableOpacity onPress = {()=>{this.clickBaChamGocPhai()}}>
                            <Image
                                source = {require('../images/dots_vertical.png')}
                            />
                        </TouchableOpacity>*/}
                </View> 
                
                <Text style={styles.text_title_date}>Thứ ba, 08/09/2018</Text>

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
                          <View style={[styles.row_result,{borderTopWidth:1, borderTopColor:'#DDDDDD', backgroundColor:'#EEEEEE'}]}>
                            <Text style={styles.dau}>Đầu</Text>  
                            <Text style={[styles.duoi,{fontWeight:'bold'}]}>Đuôi</Text> 
                          </View>  
                      </View>
                      
                      <View style={{flex:1, marginRight:5}}>
                            <View style={[styles.row_result,{borderTopWidth:1, borderTopColor:'#DDDDDD', backgroundColor:'#EEEEEE'}]}>
                                <Text style={styles.dau}>Đầu</Text>  
                                <Text style={[styles.duoi,{fontWeight:'bold'}]}>Đuôi</Text> 
                            </View>
                      </View>  

                </View>

             </View>
         );
     }
 }

 const styles = StyleSheet.create({
     container:{
        flex:1,
        backgroundColor: 'white',
     },
     header_style: {
        width: '100%',
        height: 50,
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
        fontWeight:'bold',
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