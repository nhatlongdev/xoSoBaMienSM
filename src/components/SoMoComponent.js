import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    BackHandler,
    TextInput,
 } from 'react-native';
 import somo from '../data/somo';
 import ItemSoMo from './ItemSoMo';
 import FlatlistSoMoComponent from './FlatListSoMoComponent';

 //REDUX
 import { connect } from 'react-redux';
 import { searchSoMo } from '../redux/actionCreators';

class SoMoComponent extends Component {

    constructor(props){
        super(props);
        dataSearch = JSON.parse(JSON.stringify(somo));
        this.state={
            content_search:'',
            dataSearch: dataSearch,
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

     render() {
         return (
             <View style={styles.container}>
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
                        maxLength = {50}   
                        placeholder={'Ví dụ: Rắn hai đầu'}
                        placeholderTextColor = {'grey'}
                        onChangeText = {(text)=>this.setState({content_search: text})}
                        value={this.state.content_search}    
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
                
                <FlatlistSoMoComponent data={this.state.dataSearch}/>
               
             </View>
         );
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
        this.setState({
            dataSearch:somo,
        })
        this.props.searchSoMo();
    }
   
    //Hàm tìm kiếm dữ liệu
    searchData(str){
        var arr_str = str.split(' ');
        dataSearch = [];
        var dataTam = [];
        if(arr_str.length >0){
            for(let i = 0; i< somo.length; i++){
                var sum = 0;
                var arr_title = somo[i].title.split(' ');
                var arr_khong_dau = somo[i].khongDau.split(' ');
                for(let j=0; j<arr_title.length; j++){
                    for(let a =0; a<arr_str.length; a++){
                        if(arr_title[j].toLowerCase()=== arr_str[a].toLowerCase()){
                            console.log('VAO DK TITLE 1: ')
                            sum = sum + 1;
                        }else if(arr_title[j].toLowerCase().indexOf(arr_str[a].toLowerCase()) !== -1){
                            console.log('VAO DK TITLE 2: ')
                            sum = sum + 0.1;
                        }
                    }    
                }

                for(let j=0; j<arr_khong_dau.length; j++){
                    for(let a =0; a<arr_str.length; a++){
                        if(arr_khong_dau[j].toLowerCase()=== arr_str[a].toLowerCase()){
                            console.log('VAO DK TITLE 1: ')
                            sum = sum + 1;
                        }else if(arr_khong_dau[j].toLowerCase().indexOf(arr_str[a].toLowerCase()) !== -1){
                            console.log('VAO DK TITLE 2: ')
                            sum = sum + 0.1;
                        }
                    }    
                }
                if(sum >0){
                    somo[i].priority = sum;
                    dataTam.push(somo[i]);
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
            dataSearch = _.uniq(dataTam__);
        }
        this.setState({
            dataSearch: dataSearch,
        })
        console.log('SEARCH: ' + JSON.stringify(dataSearch))
        if(dataSearch.length === 0){
            alert('Không tìm thấy dữ liệu trùng với giấc mơ của bạn, vui lòng nhập nội dung khác')
        }

        this.props.searchSoMo();
    }
 }

 export default connect(null,{searchSoMo})(SoMoComponent);

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