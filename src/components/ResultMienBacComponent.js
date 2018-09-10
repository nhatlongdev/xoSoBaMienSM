import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    ToastAndroid
 } from 'react-native';
 import ItemRowDauDuoi from '../components/ItemRowDauDuoi';
 import moment from 'moment';

 //REDUX
 import { connect } from 'react-redux';
 import { isSwipe } from '../redux/actionCreators';

 import { getItemWithDate } from '../functions/GetItemWithDate';
 import { getKeyItemOneProvincial } from '../functions/GetKeyItemProvincial';
 //LIBRARY VUỐT MÀN HÌNH TRÁI PHẢI
 import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

 var date_view;
 var result;

 class ResultMienBacComponent extends Component {
    
    constructor(props){
        super(props);
        const {dataLottery} = this.props;
        date_view = new Date();
        var key_item = getKeyItemOneProvincial(date_view,'MB', 0);
        result = getItemWithDate(key_item, dataLottery);
        if(result === undefined){ //TH dữ liệu ngày date_view chưa có kết quả
            key_item = getKeyItemOneProvincial(date_view,'MB', -1);
            result = getItemWithDate(key_item, dataLottery);
        }
        console.log('OBJ RESULT: ' + JSON.stringify(result))
    }

    componentWillMount(){

    }

    shouldComponentUpdate(){
        return true;
    }

    componentWillUpdate(){
        console.log('RENDER LAI MAN KET QUA MB');
    }

    //Vuốt màn hình sang trái
    onSwipeLeft(gestureState) {
        this.swipeLeftOrRight(1);
      }
    
      // on sự kiện vuốt màn hình sang phải
      onSwipeRight(gestureState) {
        this.swipeLeftOrRight(-1);
      }
    
      onSwipe(gestureName, gestureState) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        this.setState({gestureName: gestureName});
        switch (gestureName) {
          case SWIPE_UP:
            // this.setState({backgroundColor: 'red'});
            break;
          case SWIPE_DOWN:
            // this.setState({backgroundColor: 'green'});
            break;
          case SWIPE_LEFT:
            // this.setState({backgroundColor: 'blue'});
            
            break;
          case SWIPE_RIGHT:
            // this.setState({backgroundColor: 'yellow'});
            
            break;
        }
      }

     render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 30
          };
         const {dataLottery} = this.props;
         console.log('DATA SAU KHI LAY SEVER VE ADD: ' + JSON.stringify(dataLottery));
         return (
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, state)}
                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                onSwipeRight={(state) => this.onSwipeRight(state)}
                config={config}
                style={{flex: 1,}}
            >
             <View style={styles.container}>
                <Text style={styles.text_title_date}>{result.title}</Text>

                <ScrollView>
                <View style={styles.row_result}>
                     <Text style={styles.text_db_g1_title}>ĐB</Text>  
                     <Text style={[styles.text_db_g1_result,{color:'red', fontWeight:'bold'}]}>{result.arr_kq[0]}</Text> 
                </View>

                <View style={[styles.row_result,{backgroundColor:'#EEEEEE'}]}>
                     <Text style={styles.text_db_g1_title}>G.1</Text>  
                     <Text style={styles.text_db_g1_result}>{result.arr_kq[1]}</Text> 
                </View>

                <View style={styles.row_result}>
                    <Text style={styles.text_db_g1_title}>G.2</Text>  
                    <Text style={[styles.text_db_g1_result,{flex:2.99}]}>{result.arr_kq[2]}</Text> 
                    <Text style={[styles.text_db_g1_result,{flex:2.99}]}>{result.arr_kq[3]}</Text> 
                </View>

                <View style={[styles.row_result,{backgroundColor:'#EEEEEE'}]}>
                    <Text style={styles.text_db_g1_title}>G.3</Text>  
                    <View style={{flex:6, borderLeftWidth:1, borderLeftColor:'#DDDDDD',}}>
                        <View style={{flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#DDDDDD'}}>
                            <Text style={[styles.text_db_g1_result,{flex:1, borderLeftWidth:0}]}>{result.arr_kq[4]}</Text>
                            <Text style={[styles.text_db_g1_result,{flex:1}]}>{result.arr_kq[5]}</Text> 
                            <Text style={[styles.text_db_g1_result,{flex:1}]}>{result.arr_kq[6]}</Text>  
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={[styles.text_db_g1_result,{flex:1, borderLeftWidth:0}]}>{result.arr_kq[7]}</Text>
                            <Text style={[styles.text_db_g1_result,{flex:1}]}>{result.arr_kq[8]}</Text> 
                            <Text style={[styles.text_db_g1_result,{flex:1}]}>{result.arr_kq[9]}</Text>  
                        </View>
                    </View>    
                </View>

                <View style={styles.row_result}>
                    <Text style={styles.text_db_g1_title}>G.4</Text>  
                    <Text style={[styles.text_db_g1_result,{flex:1.48}]}>{result.arr_kq[10]}</Text> 
                    <Text style={[styles.text_db_g1_result,{flex:1.48}]}>{result.arr_kq[11]}</Text>
                    <Text style={[styles.text_db_g1_result,{flex:1.48}]}>{result.arr_kq[12]}</Text> 
                    <Text style={[styles.text_db_g1_result,{flex:1.48}]}>{result.arr_kq[13]}</Text> 
                </View>

                <View style={[styles.row_result,{backgroundColor:'#EEEEEE'}]}>
                    <Text style={styles.text_db_g1_title}>G.5</Text>  
                    <View style={{flex:6, borderLeftWidth:1, borderLeftColor:'#DDDDDD',}}>
                        <View style={{flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#DDDDDD'}}>
                            <Text style={[styles.text_db_g1_result,{flex:1, borderLeftWidth:0}]}>{result.arr_kq[14]}</Text>
                            <Text style={[styles.text_db_g1_result,{flex:1}]}>{result.arr_kq[15]}</Text> 
                            <Text style={[styles.text_db_g1_result,{flex:1}]}>{result.arr_kq[16]}</Text>  
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={[styles.text_db_g1_result,{flex:1, borderLeftWidth:0}]}>{result.arr_kq[17]}</Text>
                            <Text style={[styles.text_db_g1_result,{flex:1}]}>{result.arr_kq[18]}</Text> 
                            <Text style={[styles.text_db_g1_result,{flex:1}]}>{result.arr_kq[19]}</Text>  
                        </View>
                    </View>    
                </View>

                <View style={styles.row_result}>
                    <Text style={styles.text_db_g1_title}>G.6</Text>  
                    <Text style={[styles.text_db_g1_result,{flex:1.99}]}>{result.arr_kq[20]}</Text> 
                    <Text style={[styles.text_db_g1_result,{flex:1.99}]}>{result.arr_kq[21]}</Text>
                    <Text style={[styles.text_db_g1_result,{flex:1.99}]}>{result.arr_kq[22]}</Text> 
                </View>

                <View style={[styles.row_result,{backgroundColor:'#EEEEEE'}]}>
                    <Text style={styles.text_db_g1_title}>G.7</Text>  
                    <Text style={[styles.text_db_g1_result,{flex:1.48}]}>{result.arr_kq[23]}</Text> 
                    <Text style={[styles.text_db_g1_result,{flex:1.48}]}>{result.arr_kq[24]}</Text>
                    <Text style={[styles.text_db_g1_result,{flex:1.48}]}>{result.arr_kq[25]}</Text> 
                    <Text style={[styles.text_db_g1_result,{flex:1.48}]}>{result.arr_kq[26]}</Text> 
                </View>

                <View style={{marginHorizontal:5, marginTop: 10, marginBottom:5, flexDirection:'row'}}>

                      <View style={{flex:1, marginRight:5}}>
                          <ItemRowDauDuoi dau={'Đầu'} duoi={'Đuôi'} 
                            styleView={[styles.row_result,{borderTopWidth:1, borderTopColor:'#DDDDDD', backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{fontWeight:'bold'}]} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/> 

                          <ItemRowDauDuoi dau={'0'} duoi={result.arr_dau_loto[0]} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/>

                          <ItemRowDauDuoi dau={'1'} duoi={result.arr_dau_loto[1]} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/>  

                          <ItemRowDauDuoi dau={'2'} duoi={result.arr_dau_loto[2]} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/> 

                          <ItemRowDauDuoi dau={'3'} duoi={result.arr_dau_loto[3]} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/> 

                          <ItemRowDauDuoi dau={'4'} duoi={result.arr_dau_loto[4]} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/> 

                         <ItemRowDauDuoi dau={'5'} duoi={result.arr_dau_loto[5]} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/> 

                         <ItemRowDauDuoi dau={'6'} duoi={result.arr_dau_loto[6]} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/> 

                         <ItemRowDauDuoi dau={'7'} duoi={result.arr_dau_loto[7]} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/> 

                         <ItemRowDauDuoi dau={'8'} duoi={result.arr_dau_loto[8]} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/> 

                         <ItemRowDauDuoi dau={'9'} duoi={result.arr_dau_loto[9]} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]}/>                   
                      </View>
                      
                      <View style={{flex:1, marginRight:5}}>
                          <ItemRowDauDuoi dau={'Đầu'} duoi={'Đuôi'} 
                            styleView={[styles.row_result,{borderTopWidth:1, borderTopColor:'#DDDDDD', backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1, fontWeight:'bold'}]}/> 

                          <ItemRowDauDuoi dau={result.arr_duoi_loto[0]} duoi={'0'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1}]}/> 

                          <ItemRowDauDuoi dau={result.arr_duoi_loto[1]} duoi={'1'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1}]}/>  

                          <ItemRowDauDuoi dau={result.arr_duoi_loto[2]} duoi={'2'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1}]}/> 

                          <ItemRowDauDuoi dau={result.arr_duoi_loto[3]} duoi={'3'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1}]}/> 

                          <ItemRowDauDuoi dau={result.arr_duoi_loto[4]} duoi={'4'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1}]}/> 

                         <ItemRowDauDuoi dau={result.arr_duoi_loto[5]} duoi={'5'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1}]}/> 

                         <ItemRowDauDuoi dau={result.arr_duoi_loto[6]} duoi={'6'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1}]}/> 

                         <ItemRowDauDuoi dau={result.arr_duoi_loto[7]} duoi={'7'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1}]}/> 

                         <ItemRowDauDuoi dau={result.arr_duoi_loto[8]} duoi={'8'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1}]}/> 

                         <ItemRowDauDuoi dau={result.arr_duoi_loto[9]} duoi={'9'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold'}]} styleDuoi={[styles.duoi,{flex:1}]}/>          
                      </View>  
                </View>
                </ScrollView>

             </View>
             </GestureRecognizer>
         );
     }

     //HÀM XỬ LÝ KHI NGƯỜI DÙNG VUỐT TRÁI, PHẢI
     swipeLeftOrRight(action_type){
        const {dataLottery} = this.props;
        var resultTam;
        if(action_type === -1){
            var key_item = getKeyItemOneProvincial(date_view,'MB', -1);
            resultTam = getItemWithDate(key_item, dataLottery);
        }else{
            var key_item = getKeyItemOneProvincial(date_view,'MB', 1);
            resultTam = getItemWithDate(key_item, dataLottery);
        }
        if(resultTam !== null && resultTam !== undefined){
            result = resultTam;
            //GOi action creator
            this.props.isSwipe();
        }else {
            // if ngày vuốt tới mà ko có kết quả thì thông báo và cập nhật date về ngày trước khi vuốt
            ToastAndroid.show('Chưa có kết quả xổ số cho ngày ' + moment(date_view).format('DD-MM-YYYY'), ToastAndroid.SHORT);
            if(action_type === 1){
                date_view.setDate(date_view.getDate()-1);
            }else {
                date_view.setDate(date_view.getDate()+1);
            }   
        }
     }
 }

 //function map state to props
 function mapStateToProps(state){
     return {
        dataLottery: state.dataLottery,
     }
 }

 export default connect(mapStateToProps,{isSwipe})(ResultMienBacComponent);

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