import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Platform,
    Dimensions
 } from 'react-native';
 import ItemRowDauDuoi from '../components/ItemRowDauDuoi';
 import moment from 'moment';
 import GlobalValue from '../data/GlobalValue';

 //REDUX
 import { connect } from 'react-redux';
 
 //FUNCTION GET ITEM LOTTERY WITH DAY
 import { getItemWithDate } from '../functions/GetItemWithDate';
 import { getKeyItemOneProvincial } from '../functions/GetKeyItemProvincial';
 //LIBRARY VUỐT MÀN HÌNH TRÁI PHẢI
 import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

 //TOAS ANDROID , IOS
 import Toast, {DURATION} from 'react-native-easy-toast'
 
 var date_view;
 var result;

 class ResultMienBacComponent extends Component {
    
    constructor(props){
        super(props);
        const {dataLottery} = this.props;
        if(this.props.regionSelected === '1'){
            date_view = new Date();
        }else if(this.props.regionSelected === '4'){
            date_view = new Date(GlobalValue.daySelected);
        }
        var key_item = getKeyItemOneProvincial(date_view,'MB', 0);
        result = getItemWithDate(this.props.regionSelected, date_view, key_item, dataLottery);
        if(result === undefined || result === null){ //TH dữ liệu ngày date_view chưa có kết quả
            key_item = getKeyItemOneProvincial(date_view,'MB', -1);
            result = getItemWithDate(this.props.regionSelected, date_view, key_item, dataLottery);
        }
        //set gia tri dragLottery de khi chay vao render ko xu ly du lieu nua
        GlobalValue.dragLottery = '-2';
    }

    componentWillMount(){

    }

    shouldComponentUpdate(){
        return true;
    }

    componentWillUpdate(){
        
    }

    componentDidMount(){
        //msg goi y cho nguoi dung
        this.refs.toast.show('Vuốt màn hình để xem kết quả ngày khác',3000);
    }

    //Vuốt màn hình sang trái
    onSwipeLeft(gestureState) {
        GlobalValue.dragLottery = '1';
        this.swipeLeftOrRight(1);
      }
    
      // on sự kiện vuốt màn hình sang phải
      onSwipeRight(gestureState) {
        GlobalValue.dragLottery = '-1';
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
        //TH người dùng click từ màn xem kết quả theo ngày 
       if(GlobalValue.daySelected !== ''){
            date_view = new Date(GlobalValue.daySelected);
            var key_item = getKeyItemOneProvincial(date_view,'MB', 0);
            result = getItemWithDate(this.props.regionSelected, date_view, key_item, this.props.dataLottery);
            GlobalValue.daySelected = '';
        }else {
            if(GlobalValue.dragLottery === '0'){
                //Trường hợp click chọn miền bắc từ menuleft trong khi màn hình hiện tại đang là kết quả miền bắc
                GlobalValue.dragLottery = '2'
                const {dataLottery} = this.props;
                if(this.props.regionSelected === '1'){
                    date_view = new Date();
                }
                var key_item = getKeyItemOneProvincial(date_view,'MB', 0);
                result = getItemWithDate(this.props.regionSelected, date_view, key_item, dataLottery);
                if(result === undefined || result === null){ //TH dữ liệu ngày date_view chưa có kết quả
                    key_item = getKeyItemOneProvincial(date_view,'MB', -1);
                    result = getItemWithDate(this.props.regionSelected, date_view, key_item, dataLottery);
                }
            }else if(GlobalValue.dragLottery === '2'){
                //Cập nhật lại kết quả của chính hôm đó(trương hợp vuốt màn hình lên và trường hợp đang quay trực tiếp)
                var key_item = getKeyItemOneProvincial(date_view,'MB', 0);
                result = getItemWithDate(this.props.regionSelected, date_view, key_item, this.props.dataLottery);
            }else if(GlobalValue.dragLottery === '-2'){
                GlobalValue.dragLottery = '2';
            }
        }

        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 30
          };
         const {dataLottery} = this.props;
         return (
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, state)}
                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                onSwipeRight={(state) => this.onSwipeRight(state)}
                config={config}
                style={{flex: 1,}}
            >
                
                <Text style={[styles.text_title_date,{borderBottomWidth:0}]}>{result.title}</Text>
                {
                    (result.comment !== null && result.comment !== undefined)? 
                    <Text style={[styles.text_title_date,{padding:0, paddingBottom:2, color:'red', fontWeight:'normal'}]}>{result.comment}</Text>:null
                }
                <ScrollView 
                keyboardDismissMode='interactive'
                style={{flex:1}}>
                <View style={styles.row_result}>
                     <Text style={styles.text_db_g1_title}>ĐB</Text>  
                     <View style={[styles.view_text,{flex:6}]}>
                        <Text style={[styles.text_db_g1_result,{color:'red', fontWeight:'bold'}]}>{this.setItemResult(26)}</Text> 
                     </View>
                </View>

                <View style={[styles.row_result,{backgroundColor:'#EEEEEE'}]}>
                     <Text style={styles.text_db_g1_title}>G.1</Text>
                     <View style={[styles.view_text,{flex:6}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(0)}</Text>
                     </View>   
                </View>

                <View style={styles.row_result}>
                    <Text style={styles.text_db_g1_title}>G.2</Text>
                    <View style={[styles.view_text,{flex:2.99}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(1)}</Text> 
                     </View>
                     <View style={[styles.view_text,{flex:2.99}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(2)}</Text>
                     </View>     
                </View>

                <View style={[styles.row_result,{backgroundColor:'#EEEEEE'}]}>
                    <Text style={styles.text_db_g1_title}>G.3</Text>  
                    <View style={{flex:6, borderLeftWidth:1, borderLeftColor:'#DDDDDD',}}>
                        <View style={{flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#DDDDDD'}}>
                            <Text style={styles.text_db_g1_result}>{this.setItemResult(3)}</Text>
                            <View style={styles.view_text}>
                                <Text style={styles.text_db_g1_result}>{this.setItemResult(4)}</Text>   
                            </View>
                            <View style={styles.view_text}>
                                <Text style={styles.text_db_g1_result}>{this.setItemResult(5)}</Text>   
                            </View>     
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.text_db_g1_result}>{this.setItemResult(6)}</Text>
                            <View style={styles.view_text}>
                                <Text style={styles.text_db_g1_result}>{this.setItemResult(7)}</Text>   
                            </View>
                            <View style={styles.view_text}>
                                <Text style={styles.text_db_g1_result}>{this.setItemResult(8)}</Text>   
                            </View>   
                        </View>
                    </View>    
                </View>

                <View style={styles.row_result}>
                    <Text style={styles.text_db_g1_title}>G.4</Text>
                    <View style={[styles.view_text,{flex:1.485}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(9)}</Text>
                    </View>  
                    <View style={[styles.view_text,{flex:1.485}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(10)}</Text>
                    </View> 
                    <View style={[styles.view_text,{flex:1.485}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(11)}</Text>
                    </View> 
                    <View style={[styles.view_text,{flex:1.485}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(12)}</Text>
                    </View>  
                </View>

                <View style={[styles.row_result,{backgroundColor:'#EEEEEE'}]}>
                    <Text style={styles.text_db_g1_title}>G.5</Text>  
                    <View style={{flex:6, borderLeftWidth:1, borderLeftColor:'#DDDDDD',}}>
                        <View style={{flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#DDDDDD'}}>
                            <View style={[styles.view_text,{borderLeftWidth:0}]}>
                                <Text style={styles.text_db_g1_result}>{this.setItemResult(13)}</Text>
                            </View>  
                            <View style={styles.view_text}>
                                <Text style={styles.text_db_g1_result}>{this.setItemResult(14)}</Text>
                            </View>
                            <View style={styles.view_text}>
                                <Text style={styles.text_db_g1_result}>{this.setItemResult(15)}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={[styles.view_text,{borderLeftWidth:0}]}>
                                <Text style={styles.text_db_g1_result}>{this.setItemResult(16)}</Text>
                            </View>  
                            <View style={styles.view_text}>
                                <Text style={styles.text_db_g1_result}>{this.setItemResult(17)}</Text>
                            </View>
                            <View style={styles.view_text}>
                                <Text style={styles.text_db_g1_result}>{this.setItemResult(18)}</Text>
                            </View>  
                        </View>
                    </View>    
                </View>

                <View style={styles.row_result}>
                    <Text style={styles.text_db_g1_title}>G.6</Text>
                    <View style={[styles.view_text,{flex:1.99}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(19)}</Text>
                    </View>
                    <View style={[styles.view_text,{flex:1.99}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(20)}</Text>
                    </View>
                    <View style={[styles.view_text,{flex:1.99}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(21)}</Text>
                    </View>  
                </View>

                <View style={[styles.row_result,{backgroundColor:'#EEEEEE'}]}>
                    <Text style={styles.text_db_g1_title}>G.7</Text> 
                    <View style={[styles.view_text,{flex:1.485}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(22)}</Text>
                    </View>
                    <View style={[styles.view_text,{flex:1.485}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(23)}</Text>
                    </View> 
                    <View style={[styles.view_text,{flex:1.485}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(24)}</Text>
                    </View> 
                    <View style={[styles.view_text,{flex:1.485}]}>
                        <Text style={styles.text_db_g1_result}>{this.setItemResult(25)}</Text>
                    </View>  
                </View>

                <View style={{marginHorizontal:5, marginTop: 10, marginBottom:5, flexDirection:'row'}}>

                      <View style={{flex:1, marginRight:5}}>
                          <ItemRowDauDuoi dau={'Đầu'} duoi={'Đuôi'} 
                            styleView={[styles.row_result,{borderTopWidth:1, borderTopColor:'#DDDDDD', backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{fontWeight:'bold'}]} styleDuoi={[styles.duoi,{fontWeight:'bold'}]} flexDuoi={3}/> 

                          <ItemRowDauDuoi dau={'0'} duoi={result.arr_dau_loto[0]} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]} flexDuoi={3}/> 

                          <ItemRowDauDuoi dau={'1'} duoi={result.arr_dau_loto[1]} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]} flexDuoi={3}/> 

                          <ItemRowDauDuoi dau={'2'} duoi={result.arr_dau_loto[2]} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]} flexDuoi={3}/> 

                          <ItemRowDauDuoi dau={'3'} duoi={result.arr_dau_loto[3]} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]} flexDuoi={3}/> 

                          <ItemRowDauDuoi dau={'4'} duoi={result.arr_dau_loto[4]} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]} flexDuoi={3}/> 

                         <ItemRowDauDuoi dau={'5'} duoi={result.arr_dau_loto[5]} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]} flexDuoi={3}/> 

                         <ItemRowDauDuoi dau={'6'} duoi={result.arr_dau_loto[6]} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]} flexDuoi={3}/> 

                         <ItemRowDauDuoi dau={'7'} duoi={result.arr_dau_loto[7]} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]} flexDuoi={3}/> 

                         <ItemRowDauDuoi dau={'8'} duoi={result.arr_dau_loto[8]} 
                            styleView={styles.row_result} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]} flexDuoi={3}/> 

                         <ItemRowDauDuoi dau={'9'} duoi={result.arr_dau_loto[9]} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={styles.dau} styleDuoi={[styles.duoi,{fontWeight:'bold'}]} flexDuoi={3}/>               
                      </View>
                      
                      <View style={{flex:1, marginRight:5}}>
                          <ItemRowDauDuoi dau={'Đầu'} duoi={'Đuôi'} 
                            styleView={[styles.row_result,{borderTopWidth:1, borderTopColor:'#DDDDDD', backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold', color: 'grey'}]} styleDuoi={[styles.duoi,{fontWeight:'bold'}]} flexDuoi={1}/>  

                          <ItemRowDauDuoi dau={result.arr_duoi_loto[0]} duoi={'0'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold', color: 'grey' }]} styleDuoi={[styles.duoi,{color:'grey'}]} flexDuoi={1}/>  

                          <ItemRowDauDuoi dau={result.arr_duoi_loto[1]} duoi={'1'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold', color: 'grey' }]} styleDuoi={[styles.duoi,{color:'grey'}]} flexDuoi={1}/>  

                          <ItemRowDauDuoi dau={result.arr_duoi_loto[2]} duoi={'2'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold', color: 'grey' }]} styleDuoi={[styles.duoi,{color:'grey'}]} flexDuoi={1}/>  

                          <ItemRowDauDuoi dau={result.arr_duoi_loto[3]} duoi={'3'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold', color: 'grey' }]} styleDuoi={[styles.duoi,{color:'grey'}]} flexDuoi={1}/>  

                          <ItemRowDauDuoi dau={result.arr_duoi_loto[4]} duoi={'4'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold', color: 'grey' }]} styleDuoi={[styles.duoi,{color:'grey'}]} flexDuoi={1}/>  

                         <ItemRowDauDuoi dau={result.arr_duoi_loto[5]} duoi={'5'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold', color: 'grey' }]} styleDuoi={[styles.duoi,{color:'grey'}]} flexDuoi={1}/>  

                         <ItemRowDauDuoi dau={result.arr_duoi_loto[6]} duoi={'6'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold', color: 'grey' }]} styleDuoi={[styles.duoi,{color:'grey'}]} flexDuoi={1}/>  

                         <ItemRowDauDuoi dau={result.arr_duoi_loto[7]} duoi={'7'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold', color: 'grey' }]} styleDuoi={[styles.duoi,{color:'grey'}]} flexDuoi={1}/>  

                         <ItemRowDauDuoi dau={result.arr_duoi_loto[8]} duoi={'8'} 
                            styleView={styles.row_result} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold', color: 'grey' }]} styleDuoi={[styles.duoi,{color:'grey'}]} flexDuoi={1}/>  

                         <ItemRowDauDuoi dau={result.arr_duoi_loto[9]} duoi={'9'} 
                            styleView={[styles.row_result,{backgroundColor:'#EEEEEE'}]} 
                            styleDau={[styles.dau,{flex:3, fontWeight:'bold', color: 'grey' }]} styleDuoi={[styles.duoi,{color:'grey'}]} flexDuoi={1}/>        
                      </View>  
                </View>
                </ScrollView>
                <Toast ref="toast"/>  
             </GestureRecognizer>
         );
     }

     //HÀM XỬ LÝ KHI NGƯỜI DÙNG VUỐT TRÁI, PHẢI
     swipeLeftOrRight(action_type){
        const {dataLottery} = this.props;
        var resultTam;
        if(action_type === -1){
            var key_item = getKeyItemOneProvincial(date_view,'MB', -1);
            resultTam = getItemWithDate(this.props.regionSelected, date_view, key_item, dataLottery);
        }else{
            var key_item = getKeyItemOneProvincial(date_view,'MB', 1);
            resultTam = getItemWithDate(this.props.regionSelected, date_view, key_item, dataLottery);
        }
        if(resultTam !== null && resultTam !== undefined){
            result = resultTam;
        }else {
            // if ngày vuốt tới mà ko có kết quả thì thông báo và cập nhật date về ngày trước khi vuốt
            this.refs.toast.show('Chưa có kết quả xổ số cho ngày ' + moment(date_view).format('DD-MM-YYYY'), 3000);
            if(action_type === 1){
                date_view.setDate(date_view.getDate()-1);
            }else {
                date_view.setDate(date_view.getDate()+1);
            }   
        }
     }

     //HAM SET GIAO DIEN KET QUA
     setItemResult(index){
        return result.arr_kq!==undefined?(result.arr_kq[index]!==null && result.arr_kq[index]!==undefined && result.arr_kq[index]!=='')?result.arr_kq[index]:' ':' ';
     }
 }

 //function map state to props
 function mapStateToProps(state){
     return {
        regionSelected: state.regionSelected,
        dataLottery: state.dataLottery,
        updateLottery: state.updateLottery,
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
        borderLeftWidth: 1, 
        borderLeftColor:'#DDDDDD',
        alignSelf: 'stretch',
        paddingVertical: 5, 
        fontSize:18
    },
    view_text:{
        flex: 1, 
        borderLeftWidth: 1,
        borderLeftColor:'#DDDDDD'
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
        flex:1, 
        textAlign:'center', 
        alignSelf: 'stretch',
        paddingVertical: 5, 
        fontSize:16
    },
 })