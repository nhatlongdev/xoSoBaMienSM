import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    ScrollView
 } from 'react-native';
 import GlobalValue from '../data/GlobalValue';
 import { connect } from 'react-redux';

 class ResultMienTrungNamComponent extends Component {
     render() {
         const regionSelected = this.props.regionSelected;
         const weekday = '6';
         return (
             <View style={styles.container}>
                <Text style={styles.text_title_date}>Thứ ba, 08/09/2018</Text>

                
                <View style={{width:'100%', flexDirection:'row', backgroundColor:GlobalValue.Color.yellow_light, alignItems:'center', borderBottomWidth:1, borderBottomColor:GlobalValue.Color.vien}}>
                        <Text style={{flex:0.6}}></Text>
                        <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                            <Text style={styles.text_name_provincial}>TP Hồ Chí Minh</Text>
                            <Text style={styles.text_name_provincial}>Long An</Text>
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                                <Text style={styles.text_name_provincial}>Bình Phước</Text>: null
                            }
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                                <Text style={styles.text_name_provincial}>Bình Phước</Text>:null
                            }
                        </View>     
                    </View>
                <ScrollView>
                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>G.8</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={[styles.row_text_result,{color:'red', fontWeight:'bold'}]}>56</Text>
                        <Text style={[styles.row_text_result,{color:'red', fontWeight:'bold'}]}>56</Text>
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                            <Text style={[styles.row_text_result,{color:'red', fontWeight:'bold'}]}>56</Text>: null
                        }
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                            <Text style={[styles.row_text_result,{color:'red', fontWeight:'bold'}]}></Text>:null
                        }  
                     </View>
                </View>
                <View style={[styles.view_row,{backgroundColor:GlobalValue.Color.bg}]}>
                     <Text style={styles.row_text_title}>G.7</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>567</Text>
                        <Text style={styles.row_text_result}>566</Text>
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                            <Text style={styles.row_text_result}>564</Text>: null
                        }
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                            <Text style={styles.row_text_result}>566</Text>:null
                        }  
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>G.6</Text>
                     <View style={{flex:4, borderLeftWidth:1, borderLeftColor:GlobalValue.Color.vien, height:'100%'}}>
                         <View style={styles.view_row}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>567</Text>
                            <Text style={styles.row_text_result}>346</Text>
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                                <Text style={styles.row_text_result}>457</Text>: null
                            }
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                                <Text style={styles.row_text_result}>243</Text>:null
                            }                                 
                         </View>
                         
                         <View style={styles.view_row}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>567</Text>
                            <Text style={styles.row_text_result}>546</Text>
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                                <Text style={styles.row_text_result}>564</Text>: null
                            }
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                                <Text style={styles.row_text_result}>588</Text>:null
                            }                               
                         </View> 

                         <View style={[styles.view_row, {borderBottomWidth:0}]}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>567</Text>
                            <Text style={styles.row_text_result}>328</Text>
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                                <Text style={styles.row_text_result}>496</Text>: null
                            }
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                                <Text style={styles.row_text_result}>555</Text>:null
                            }   
                         </View> 
                     </View>  
                </View>

                <View style={[styles.view_row,{backgroundColor:GlobalValue.Color.bg}]}>
                     <Text style={styles.row_text_title}>G.5</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>567</Text>
                        <Text style={styles.row_text_result}>566</Text>
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                            <Text style={styles.row_text_result}>564</Text>: null
                        }
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                            <Text style={styles.row_text_result}>566</Text>:null
                        }                      
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>G.4</Text>
                     <View style={{flex:4, borderLeftWidth:1, borderLeftColor:GlobalValue.Color.vien, height:'100%'}}>
                         <View style={styles.view_row}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>567</Text>
                            <Text style={styles.row_text_result}>346</Text>
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                                <Text style={styles.row_text_result}>457</Text>: null
                            }
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                                <Text style={styles.row_text_result}>243</Text>:null
                            }                          
                         </View>
                         
                         <View style={styles.view_row}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>567</Text>
                            <Text style={styles.row_text_result}>546</Text>
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                                <Text style={styles.row_text_result}>564</Text>: null
                            }
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                                <Text style={styles.row_text_result}>588</Text>:null
                            }                                   
                         </View> 

                         <View style={styles.view_row}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>567</Text>
                            <Text style={styles.row_text_result}>546</Text>
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                                <Text style={styles.row_text_result}>564</Text>: null
                            }
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                                <Text style={styles.row_text_result}>588</Text>:null
                            }                                                          
                         </View> 
                         
                         <View style={styles.view_row}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>567</Text>
                            <Text style={styles.row_text_result}>546</Text>
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                                <Text style={styles.row_text_result}>564</Text>: null
                            }
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                                <Text style={styles.row_text_result}>588</Text>:null
                            }                                                           
                         </View>  

                         <View style={styles.view_row}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>567</Text>
                            <Text style={styles.row_text_result}>546</Text>
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                                <Text style={styles.row_text_result}>564</Text>: null
                            }
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                                <Text style={styles.row_text_result}>588</Text> :null
                            }                                                           
                         </View>  

                         <View style={styles.view_row}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>567</Text>
                            <Text style={styles.row_text_result}>546</Text>
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                                <Text style={styles.row_text_result}>564</Text>: null
                            }
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                                <Text style={styles.row_text_result}>588</Text> :null
                            }                                                         
                         </View>  

                         <View style={[styles.view_row, {borderBottomWidth:0}]}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>567</Text>
                            <Text style={styles.row_text_result}></Text>
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                                <Text style={styles.row_text_result}>496</Text>: null
                            }
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                                <Text style={styles.row_text_result}>555</Text> :null
                            }                                                          
                         </View> 
                     </View>  
                </View>

                <View style={[styles.view_row,{backgroundColor:GlobalValue.Color.bg}]}>
                     <Text style={styles.row_text_title}>G.3</Text>
                     <View style={{flex:4, borderLeftWidth:1, borderLeftColor:GlobalValue.Color.vien, height:'100%'}}>
                         <View style={styles.view_row}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>567</Text>
                            <Text style={styles.row_text_result}>346</Text>
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                                <Text style={styles.row_text_result}></Text>: null
                            }
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                                <Text style={styles.row_text_result}>243</Text>:null
                            }                                                         
                         </View>
                         
                         <View style={[styles.view_row, {borderBottomWidth:0}]}>
                            <Text style={[styles.row_text_result, {borderLeftWidth:0}]}>567</Text>
                            <Text style={styles.row_text_result}>328</Text>
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                                <Text style={styles.row_text_result}>496</Text>: null
                            }
                            {
                                this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                                <Text style={styles.row_text_result}>555</Text>:null
                            }                                                           
                         </View> 
                     </View>  
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>G.2</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>567</Text>
                        <Text style={styles.row_text_result}>566</Text>
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                            <Text style={styles.row_text_result}>564</Text>: null
                        }
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                            <Text style={styles.row_text_result}>566</Text>:null
                        }                                                
                     </View>
                </View>

                <View style={[styles.view_row,{backgroundColor:GlobalValue.Color.bg}]}>
                     <Text style={styles.row_text_title}>G.1</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>567</Text>
                        <Text style={styles.row_text_result}>566</Text>
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                            <Text style={styles.row_text_result}>564</Text>: null
                        }
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                            <Text style={styles.row_text_result}>566</Text>:null
                        }                                              
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>ĐB</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={[styles.row_text_result,{color:'red',fontWeight:'bold'}]}>172422</Text>
                        <Text style={[styles.row_text_result,{color:'red',fontWeight:'bold'}]}>042192</Text>
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                            <Text style={[styles.row_text_result,{color:'red',fontWeight:'bold'}]}>821118</Text>: null
                        }
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                            <Text style={[styles.row_text_result,{color:'red',fontWeight:'bold'}]}>358272</Text>:null
                        }                                               
                     </View>
                </View>

                <View style={[styles.view_row,{marginTop:10, backgroundColor:GlobalValue.Color.bg}]}>
                    <Text style={[styles.text_name_provincial,{flex:0.6, paddingVertical:3}]}>Đầu</Text>
                    <Text style={[styles.text_name_provincial,{flex:4, paddingVertical:3}]}>Đuôi</Text>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>0</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>5,6,7</Text>
                        <Text style={styles.row_text_result}>5,6,6</Text>
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                            <Text style={styles.row_text_result}>5,6,4</Text>: null
                        }
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                            <Text style={styles.row_text_result}>5,6,6</Text>:null
                        }                                        
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>1</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>5,6,7</Text>
                        <Text style={styles.row_text_result}>5,6,6</Text>
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                            <Text style={styles.row_text_result}>5,6,4</Text>: null
                        }
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                            <Text style={styles.row_text_result}>5,6,6</Text>:null
                        }                                        
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>2</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>5,6,7</Text>
                        <Text style={styles.row_text_result}>5,6,6</Text>
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                            <Text style={styles.row_text_result}>5,6,4</Text>: null
                        }
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                            <Text style={styles.row_text_result}>5,6,6</Text>:null
                        }                                        
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>3</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>5,6,7</Text>
                        <Text style={styles.row_text_result}>5,6,6</Text>
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                            <Text style={styles.row_text_result}>5,6,4</Text>: null
                        }
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                            <Text style={styles.row_text_result}>5,6,6</Text>:null
                        }                                        
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>4</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>5,6,7</Text>
                        <Text style={styles.row_text_result}>5,6,6</Text>
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                            <Text style={styles.row_text_result}>5,6,4</Text>: null
                        }
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                            <Text style={styles.row_text_result}>5,6,6</Text>:null
                        }                                        
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>5</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>5,6,7</Text>
                        <Text style={styles.row_text_result}>5,6,6</Text>
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                            <Text style={styles.row_text_result}>5,6,4</Text>: null
                        }
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                            <Text style={styles.row_text_result}>5,6,6</Text>:null
                        }                                        
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>6</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}></Text>
                        <Text style={styles.row_text_result}>5,6,6</Text>
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                            <Text style={styles.row_text_result}>5,6,4</Text>: null
                        }
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                            <Text style={styles.row_text_result}>5,6,6</Text>:null
                        }                                        
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>7</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>5,6,7</Text>
                        <Text style={styles.row_text_result}>5,6,6</Text>
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                            <Text style={styles.row_text_result}>5,6,4</Text>: null
                        }
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                            <Text style={styles.row_text_result}></Text>:null
                        }                                        
                     </View>
                </View>

                <View style={styles.view_row}>
                     <Text style={styles.row_text_title}>8</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}></Text>
                        <Text style={styles.row_text_result}>5,6,6</Text>
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                            <Text style={styles.row_text_result}>5,6,4</Text>: null
                        }
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                            <Text style={styles.row_text_result}>5,6,6</Text>:null
                        }                                        
                     </View>
                </View>

                <View style={[styles.view_row,{marginBottom:5}]}>
                     <Text style={styles.row_text_title}>9</Text>
                     <View style={{flex:4, flexDirection:'row', height:'100%'}}>
                        <Text style={styles.row_text_result}>5,6,7</Text>
                        <Text style={styles.row_text_result}>5,6,6</Text>
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)>= 3 ?
                            <Text style={styles.row_text_result}></Text>: null
                        }
                        {
                            this.checkCountProvincialRotateThisDay(regionSelected,weekday)== 4 ?
                            <Text style={styles.row_text_result}>5,6,6</Text>:null
                        }                                        
                     </View>
                </View>


                </ScrollView>

             </View>
         );
     }


     //HÀM KIỂM TRA XEM NGÀY NGƯỜI DÙNG ĐANG XEM CÓ BAO NHIÊU TỈNH QUAY
     checkCountProvincialRotateThisDay(regionSelected, weekday){
        if(regionSelected === '2'){
            if(weekday === '5' || weekday === '7'){
                return 3;
            }else {
                return 2;
            }
        }else if(regionSelected === '3'){
            if(weekday === '7'){
                return 4;
            }else {
                return 3;
            }
        }
     }
 }

 //map state to props
 function mapStateToProps(state){
    return{
        regionSelected: state.regionSelected,
    };
 };

 export default connect(mapStateToProps)(ResultMienTrungNamComponent);

 const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
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
    text_name_provincial:{
        flex:1,
        textAlign:'center', 
        alignItems:'center', 
        fontWeight:'bold', 
        color:'black',
        paddingVertical: 5,
        fontSize:14
    },
    view_row:{
        width:'100%',
        flexDirection:'row', 
        alignItems:'center', 
        borderBottomWidth:1, 
        borderBottomColor:GlobalValue.Color.vien
    },
    row_text_title:{
        flex:0.6, 
        fontWeight:'bold', 
        fontSize:16, 
        textAlign:'center', 
        alignItems:'center',
        paddingVertical:5
    },
    row_text_result:{
        flex:1, 
        height:'100%', 
        color:'black', 
        fontSize:18, 
        textAlign:'center', 
        alignItems:'center',
        paddingVertical:5, 
        borderLeftWidth:1, 
        borderLeftColor:GlobalValue.Color.vien
    }
 });