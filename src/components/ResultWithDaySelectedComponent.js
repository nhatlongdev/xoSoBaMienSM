import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    ScrollView
 } from 'react-native';
 import GlobalValue from '../data/GlobalValue';
 import ItemRowDauDuoi from '../components/ItemRowDauDuoi';
 import moment from 'moment';
 import { getItemWithDate } from '../functions/GetItemWithDate';
 import { getKeyItemOneProvincial } from '../functions/GetKeyItemProvincial';
 //REDUX
 import { connect } from 'react-redux';

 var date_view;
 var result;

 class ResultWithDaySelectedComponent extends Component {

    constructor(props){
        super(props);
        const {dataLottery} = this.props;
        date_view = new Date(GlobalValue.daySelected);
        var key_item = getKeyItemOneProvincial(date_view,GlobalValue.codeProvincialSelected, 0);
        result = getItemWithDate(this.props.regionSelected, date_view, key_item, dataLottery);
        if(result.s === '1'){
            result.moment = 'Đang quay ...';
        }
        console.log('OBJ RESULT: ' + JSON.stringify(result))
    }

    shouldComponentUpdate(){
        return true;
    }

    componentWillUpdate(){
        this.updateData();
    }

     render() {
         return (
            <View style={styles.container}>
                <Text style={[styles.text_title_date,{borderBottomWidth:(result.comment !== null && result.comment !== undefined)?0:1}]}>{result.title}</Text>
                {
                    (result.comment !== null && result.comment !== undefined)? 
                    <Text style={[styles.text_title_date,{padding:0, paddingBottom:2, color:'red', fontWeight:'normal'}]}>{result.comment}</Text>:null
                }
                <ScrollView>
                <View style={styles.row_result}>
                     <Text style={styles.text_db_g1_title}>G.8</Text>
                     <View style={[styles.view_text,{flex:6}]}>
                        <Text style={[styles.text_db_g1_result,{color:'red'}]}>{this.setItemResult(0)}
                        <Text style={styles.bold_loto}>{this.setItemResult_1(0)}</Text>
                        </Text> 
                     </View>  
                     
                </View>

                <View style={[styles.row_result,{backgroundColor:'#EEEEEE'}]}>
                     <Text style={styles.text_db_g1_title}>G.7</Text>  
                     <View style={[styles.view_text,{flex:6}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(1)}
                        <Text style={styles.bold_loto}>{this.setItemResult_1(1)}</Text>
                        </Text>
                     </View>                    
                </View>

                <View style={styles.row_result}>
                    <Text style={styles.text_db_g1_title}>G.6</Text> 
                     <View style={[styles.view_text,{flex:1.99}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(2)}
                        <Text style={styles.bold_loto}>{this.setItemResult_1(2)}</Text>
                        </Text>
                     </View> 
                     <View style={[styles.view_text,{flex:1.99}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(3)}
                        <Text style={styles.bold_loto}>{this.setItemResult_1(3)}</Text>
                        </Text>
                     </View>
                     <View style={[styles.view_text,{flex:1.99}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(4)}
                        <Text style={styles.bold_loto}>{this.setItemResult_1(4)}</Text>
                        </Text>
                     </View>
                </View>

                <View style={[styles.row_result,{backgroundColor:'#EEEEEE'}]}>
                     <Text style={styles.text_db_g1_title}>G.5</Text>  
                     <View style={[styles.view_text,{flex:6}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(5)}
                        <Text style={styles.bold_loto}>{this.setItemResult_1(5)}</Text>
                        </Text>
                     </View> 
                </View>

                <View style={styles.row_result}>
                    <Text style={styles.text_db_g1_title}>G.4</Text>  
                    <View style={{flex:6, borderLeftWidth:1, borderLeftColor:'#DDDDDD',}}>
                        <View style={{flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#DDDDDD'}}>
                            <Text style={styles.text_db_g1_result}>{this.setItemResult(6)}
                            <Text style={styles.bold_loto}>{this.setItemResult_1(6)}</Text>
                            </Text>
                            <View style={styles.view_text}>
                                <Text style={styles.text_db_g1_result}>{this.setItemResult(7)}
                                <Text style={styles.bold_loto}>{this.setItemResult_1(7)}</Text>
                                </Text>
                            </View>
                            <View style={styles.view_text}>
                                <Text style={styles.text_db_g1_result}>{this.setItemResult(8)}
                                <Text style={styles.bold_loto}>{this.setItemResult_1(8)}</Text>
                                </Text>
                            </View>
                            <View style={styles.view_text}>
                                <Text style={styles.text_db_g1_result}>{this.setItemResult(9)}
                                <Text style={styles.bold_loto}>{this.setItemResult_1(9)}</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.text_db_g1_result}>{this.setItemResult(10)}
                            <Text style={styles.bold_loto}>{this.setItemResult_1(10)}</Text>
                            </Text>    
                            <View style={styles.view_text}>
                                <Text style={styles.text_db_g1_result}>{this.setItemResult(11)}
                                <Text style={styles.bold_loto}>{this.setItemResult_1(11)}</Text>
                                </Text>
                            </View>
                            <View style={styles.view_text}>
                                <Text style={styles.text_db_g1_result}>{this.setItemResult(12)}
                                <Text style={styles.bold_loto}>{this.setItemResult_1(12)}</Text>
                                </Text>
                            </View>  
                        </View>
                    </View>    
                </View>

                <View style={[styles.row_result,{backgroundColor:'#EEEEEE'}]}>
                    <Text style={styles.text_db_g1_title}>G.3</Text> 
                    <View style={[styles.view_text,{flex:2.99}]}>
                            <Text style={styles.text_db_g1_result}>{this.setItemResult(13)}
                            <Text style={styles.bold_loto}>{this.setItemResult_1(13)}</Text>
                            </Text>
                     </View> 
                     <View style={[styles.view_text,{flex:2.99}]}>
                            <Text style={styles.text_db_g1_result}>{this.setItemResult(14)}
                            <Text style={styles.bold_loto}>{this.setItemResult_1(14)}</Text>
                            </Text>
                     </View> 
                </View>

                <View style={styles.row_result}>
                     <Text style={styles.text_db_g1_title}>G.2</Text>  
                     <View style={[styles.view_text,{flex:6}]}>
                            <Text style={styles.text_db_g1_result}>{this.setItemResult(15)}
                            <Text style={styles.bold_loto}>{this.setItemResult_1(15)}</Text>
                            </Text>
                     </View> 
                </View>

                <View style={[styles.row_result,{backgroundColor:'#EEEEEE'}]}>
                     <Text style={styles.text_db_g1_title}>G.1</Text>  
                     <View style={[styles.view_text,{flex:6}]}>
                            <Text style={styles.text_db_g1_result}>{this.setItemResult(16)}
                            <Text style={styles.bold_loto}>{this.setItemResult_1(16)}</Text>
                            </Text>
                     </View> 
                </View>

                <View style={styles.row_result}>
                     <Text style={styles.text_db_g1_title}>ĐB</Text>  
                     <View style={[styles.view_text,{flex:6}]}>
                        <Text style={[styles.text_db_g1_result,{color:'red'}]}>{this.setItemResult(17)}
                        <Text style={styles.bold_loto}>{this.setItemResult_1(17)}</Text>
                        </Text>
                     </View> 
                </View>

                <View style={{marginHorizontal:5, marginTop: 10, marginBottom:5, flexDirection:'row'}}>

                      <View style={{flex:1, marginRight:5}}>
                          <ItemRowDauDuoi dau={'Đầu'} duoi={'Đuôi'} 
                            styleView={[styles.row_result,{borderTopWidth:1, borderTopColor:'#DDDDDD', backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{fontWeight:'bold', color:'black'}]} styleDuoi={[styles.duoi,{fontWeight:'bold'}]} flexDuoi={3}/> 

                          <ItemRowDauDuoi dau={'0'} duoi={result.arr_dau_loto[0]} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={styles.duoi} flexDuoi={3}/>

                          <ItemRowDauDuoi dau={'1'} duoi={result.arr_dau_loto[1]} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={styles.duoi} flexDuoi={3}/>  

                          <ItemRowDauDuoi dau={'2'} duoi={result.arr_dau_loto[2]} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={styles.duoi} flexDuoi={3}/> 

                          <ItemRowDauDuoi dau={'3'} duoi={result.arr_dau_loto[3]} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={styles.duoi} flexDuoi={3}/> 

                          <ItemRowDauDuoi dau={'4'} duoi={result.arr_dau_loto[4]} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={styles.duoi} flexDuoi={3}/> 

                         <ItemRowDauDuoi dau={'5'} duoi={result.arr_dau_loto[5]} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={styles.duoi} flexDuoi={3}/> 

                         <ItemRowDauDuoi dau={'6'} duoi={result.arr_dau_loto[6]} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={styles.duoi} flexDuoi={3}/> 

                         <ItemRowDauDuoi dau={'7'} duoi={result.arr_dau_loto[7]} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={styles.duoi} flexDuoi={3}/> 

                         <ItemRowDauDuoi dau={'8'} duoi={result.arr_dau_loto[8]} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={styles.duoi} flexDuoi={3}/> 

                         <ItemRowDauDuoi dau={'9'} duoi={result.arr_dau_loto[9]} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={styles.duoi} flexDuoi={3}/>                   
                      </View>
                      
                      <View style={{flex:1, marginRight:5}}>
                          <ItemRowDauDuoi dau={'Đầu'} duoi={'Đuôi'} 
                            styleView={[styles.row_result,{borderTopWidth:1, borderTopColor:'#DDDDDD', backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold', color:'black'}]} styleDuoi={[styles.duoi,{flex:1, fontWeight:'bold'}]} flexDuoi={1}/> 

                          <ItemRowDauDuoi dau={result.arr_duoi_loto[0]} duoi={'0'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, color:'black'}]} styleDuoi={[styles.duoi,{flex:1, color:'grey'}]} flexDuoi={1}/> 

                          <ItemRowDauDuoi dau={result.arr_duoi_loto[1]} duoi={'1'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, color:'black'}]} styleDuoi={[styles.duoi,{flex:1, color:'grey'}]} flexDuoi={1}/>  

                          <ItemRowDauDuoi dau={result.arr_duoi_loto[2]} duoi={'2'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, color:'black'}]} styleDuoi={[styles.duoi,{flex:1, color:'grey'}]} flexDuoi={1}/> 

                          <ItemRowDauDuoi dau={result.arr_duoi_loto[3]} duoi={'3'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, color:'black'}]} styleDuoi={[styles.duoi,{flex:1, color:'grey'}]} flexDuoi={1}/> 

                          <ItemRowDauDuoi dau={result.arr_duoi_loto[4]} duoi={'4'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, color:'black'}]} styleDuoi={[styles.duoi,{flex:1, color:'grey'}]} flexDuoi={1}/> 

                         <ItemRowDauDuoi dau={result.arr_duoi_loto[5]} duoi={'5'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, color:'black'}]} styleDuoi={[styles.duoi,{flex:1, color:'grey'}]} flexDuoi={1}/> 

                         <ItemRowDauDuoi dau={result.arr_duoi_loto[6]} duoi={'6'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, color:'black'}]} styleDuoi={[styles.duoi,{flex:1, color:'grey'}]} flexDuoi={1}/> 

                         <ItemRowDauDuoi dau={result.arr_duoi_loto[7]} duoi={'7'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, color:'black'}]} styleDuoi={[styles.duoi,{flex:1, color:'grey'}]} flexDuoi={1}/> 

                         <ItemRowDauDuoi dau={result.arr_duoi_loto[8]} duoi={'8'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, color:'black'}]} styleDuoi={[styles.duoi,{flex:1, color:'grey'}]} flexDuoi={1}/> 

                         <ItemRowDauDuoi dau={result.arr_duoi_loto[9]} duoi={'9'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, color:'black'}]} styleDuoi={[styles.duoi,{flex:1, color:'grey'}]} flexDuoi={1}/>          
                      </View>  
                </View>
                </ScrollView>
             </View>
         );
     }

     //FUNCTION UPDATE LAI DATA 
     updateData(){
        const {dataLottery} = this.props;
        date_view = new Date(GlobalValue.daySelected);
        var key_item = getKeyItemOneProvincial(date_view,GlobalValue.codeProvincialSelected, 0);
        result = getItemWithDate(this.props.regionSelected, date_view, key_item, dataLottery);
        if(result.s === '1'){
            result.moment = 'Đang quay ...';
        }
     }

     //HAM SET GIAO DIEN KET QUA
     setItemResult(index){
        return result.arr_kq!==undefined?(result.arr_kq[index]!==null && result.arr_kq[index]!==undefined && result.arr_kq[index]!=='')?result.arr_kq[index]:' ':' ';
     }

      //HAM SET GIAO DIEN KET QUA
      setItemResult(index){
        var str = '';
        var s = '';
        if(result.arr_kq!==undefined && result.arr_kq[index]!==null && result.arr_kq[index]!==undefined && result.arr_kq[index]!==''){
            str = result.arr_kq[index];
        }
        if(str !== '' && str.length>2){
            s = str.substr(0, str.length -2);
            return s;
        }else if(str !== '' && str.length === 2){
            return '';
        }else {
            return ' ';
        }
        // return result.arr_kq!==undefined?(result.arr_kq[index]!==null && result.arr_kq[index]!==undefined && result.arr_kq[index]!=='')?result.arr_kq[index]:' ':' ';
     }

     setItemResult_1(index){
        var str = '';
        var s = '';
        if(result.arr_kq!==undefined && result.arr_kq[index]!==null && result.arr_kq[index]!==undefined && result.arr_kq[index]!==''){
            str = result.arr_kq[index];
        }
        if(str !== '' && str.length>2){
            s = str.substr(str.length -2,2);
            return s;
        }else if(str !== '' && str.length === 2){
            return str;
        }else {
            return ' ';
        }
        // return result.arr_kq!==undefined?(result.arr_kq[index]!==null && result.arr_kq[index]!==undefined && result.arr_kq[index]!=='')?result.arr_kq[index]:' ':' ';
     }

 }

 //function map state to props
 function mapStateToProps(state){
    return {
       dataLottery: state.dataLottery,
       clickCalendar: state.clickCalendar,
       updateLottery: state.updateLottery,
    }
}
export default connect(mapStateToProps)(ResultWithDaySelectedComponent);

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
        borderBottomWidth:1,
        borderBottomColor:'#DDDDDD',
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
        flex:1, 
        textAlign:'center', 
        alignItems: 'center', 
        alignSelf: 'stretch',
        color:'black',
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
        color:'black', 
        borderLeftWidth:1, 
        borderLeftColor:'#DDDDDD',
        alignSelf: 'stretch',
        paddingVertical: 5, 
        fontSize:16
    },
    view_text:{
        flex: 1, 
        borderLeftWidth: 1,
        borderLeftColor:'#DDDDDD'
    },
    bold_loto:{
        fontWeight:'bold',
    }
 })