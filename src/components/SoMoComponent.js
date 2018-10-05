import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    BackHandler,
    TextInput,
    FlatList,
    ActivityIndicator,
    Platform
 } from 'react-native';
 import somo from '../data/somo';
 import ItemSoMo from './ItemSoMo';
 var dataSearch;
 var page;
 var checkStop;

 export default class SoMoComponent extends Component {

    constructor(props){
        super(props);
        checkStop = false;
        dataSearch = [];
        page = -1;
        dataSource = JSON.parse(JSON.stringify(somo));
        this.addData(0, dataSource);
        this.state={
            content_search:'',
            dataSearch: dataSearch,
            loading:false
        }
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }

    shouldComponentUpdate(){
        return true;
    }

    componentWillUpdate(){
       
    }

     render() {
         return (
             <View style={[styles.container,{marginTop:Platform.OS === 'ios'?25:0}]}>
                <View style = {styles.header_style}>
                    <TouchableOpacity onPress = {()=>
                        this.handleBackButtonClick()
                    }>
                        <Image
                            style={{width:30, height: 30, tintColor:'white'}}
                            source = {require('../images/arrow_back.png')}
                        />
                    </TouchableOpacity>
                    <Text style = {styles.text_title}>SỔ MƠ</Text>
                </View> 

                <View style = {{padding: 10, marginBottom: 5}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>Nhập gợi ý tìm kiếm:</Text>
                    <TextInput
                        style={{height:40, borderColor: 'gray', borderWidth: 1, marginBottom:10, paddingHorizontal:5}}
                        maxLength = {50}   
                        placeholder={'Ví dụ: Rắn hai đầu'}
                        placeholderTextColor = {'grey'}
                        onChangeText = {(text)=>this.setState({content_search: text})}
                        value={this.state.content_search} 
                        fontSize={18}  
                        underlineColorAndroid='rgba(0,0,0,0)'   
                    />
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center',borderRadius: 2, backgroundColor: '#CCCCCC', height: 50,padding: 5}}
                                onPress = {()=>this.state.content_search.length !== 0? 
                                this.searchData(this.state.content_search):
                                this.refreshAllData()}
                    >
                         <Text style={{flex: 1, textAlign: 'center', color: 'black', fontWeight: 'bold'}}>TÌM KIẾM</Text>   
                        <Image
                        source = {require('../images/right_arrow31.png')}
                        />
                    </TouchableOpacity>
                </View>  

                {
                    this.state.dataSearch.length >0?
                    <View style={{flexDirection:'row',marginHorizontal: 5,
                         borderBottomWidth: 1, borderBottomColor: 'grey',
                    }}> 
                        <Text style={{flex:2, fontWeight:'bold', textAlign:'center'}}>Giấc mơ</Text>
                        <Text style={{flex:1,  textAlign:'center', fontWeight:'bold'}}>Số đề</Text>
                    </View>:null
                }
                
                <FlatList
                    style={{marginHorizontal: 5,marginBottom: 5,}}
                    onEndReachedThreshold = {0.1}
                    onEndReached = {() => {
                    this.on_EndReached()
                    }}
                    data={this.state.dataSearch}
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
                {
                    this.state.loading?
                    <View style={{flex:0.2,marginBottom:10}}>
                        <ActivityIndicator size="small" color="red" />
                    </View>:null
                }    
               
             </View>
         );
     }


     on_EndReached() {
        if(dataSource.length > 30){
            this.setState({
                loading:true
            })
        } 
        var that = this;
        setTimeout(function(){
            that.addData(page, dataSource);
            that.setState({
                loading:false,
            })
        }, 3000);
      }

     //HAM LOAD MORE DATA
     addData(index, data){
        for(let i=index; i<=index + 30; i++){
            if(data[i] !== undefined && data[i] !== null){
                dataSearch.push(data[i]);
                page = page + 1;
            }
        }
     }

        //Sử dụng reg để kiểm tra chuỗi ký tự nhập vào có hợp lệ ko
    checkStringInputLegal(chuoi){
        var str ='ok';
        if(chuoi.length === 0){
            str = 'Bạn chưa nhập nội dung giấc mơ';
        }
        return str;
    }

    //set data full khi nguoi dung ko nhap gi ma nhan tim kiem
    refreshAllData(){
        // alert('vao day')
        page = -1;
        dataSearch=[];
        dataSource = JSON.parse(JSON.stringify(somo));
        this.addData(0, dataSource);
        this.setState({
            dataSearch:dataSearch,
        })
    }
   
    //Hàm tìm kiếm dữ liệu
    searchData(str){
        var soMoTam = JSON.parse(JSON.stringify(somo));
        var arr_str = str.split(' ');
        var arr_str_new = arr_str.filter((e) => {
            return e !== '';
        })
        dataSearch = [];
        var dataTam = [];
        if(arr_str_new.length >0){
            for(let i = 0; i< soMoTam.length; i++){
                var sum = 0;
                var arr_title = soMoTam[i].title.split(' ');
                var arr_khong_dau = soMoTam[i].khongDau.split(' ');
                for(let j=0; j<arr_title.length; j++){
                    for(let a =0; a<arr_str_new.length; a++){
                        if(arr_title[j].toLowerCase()=== arr_str_new[a].toLowerCase()){
                            console.log('VAO DK TITLE 1: ')
                            sum = sum + 1;
                        }else if(arr_title[j].toLowerCase().indexOf(arr_str_new[a].toLowerCase()) !== -1){
                            console.log('VAO DK TITLE 2: ')
                            sum = sum + 0.1;
                        }
                    }    
                }

                for(let j=0; j<arr_khong_dau.length; j++){
                    for(let a =0; a<arr_str_new.length; a++){
                        if(arr_khong_dau[j].toLowerCase()=== arr_str_new[a].toLowerCase()){
                            console.log('VAO DK TITLE 1: ')
                            sum = sum + 1;
                        }else if(arr_khong_dau[j].toLowerCase().indexOf(arr_str_new[a].toLowerCase()) !== -1){
                            console.log('VAO DK TITLE 2: ')
                            sum = sum + 0.1;
                        }
                    }    
                }
                if(sum >0){
                    soMoTam[i].priority = sum;
                    dataTam.push(soMoTam[i]);
                }  
            }    
        }

        //Loại bỏ các phần tử trùng nhau
        if(dataTam.length>0){
            //sắp xếp theo thư tự sum giảm dần
            var s = require('underscore');
            var dataTam_ = s.sortBy(dataTam,'priority');
            var dataTam__ = dataTam_.reverse();

            var _ = require('underscore');	
            dataSource = _.uniq(dataTam__);
        }
        if(dataSource.length === 0){
            dataSearch = [];
            alert('Không tìm thấy dữ liệu trùng với giấc mơ của bạn, vui lòng nhập nội dung khác')
        }else {
            this.addData(0, dataSource);
        }
        this.setState({
            dataSearch:dataSearch,
        })
    }
 }

 const styles = StyleSheet.create({
     container:{
         flex: 1,
         backgroundColor:'white',
     },
     header_style: {
        width: '100%',
        height: 45,
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
 })