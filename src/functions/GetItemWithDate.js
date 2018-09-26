
import moment from 'moment';
import {getListProvincialRotateWithDay} from './GetListProvincialRotateWithDay';
import { setTitleResultLottery } from '../functions/SetTitleResultLottery';
//lay ds ket qua mien bac
function getItemWithDate(regionSelected, date_view, key_item, dataLottery){
    //thoi gian bat dau quay, thoi gian dung quay
    var dateTimeBatDauQuayMienBac, dateTimeDungQuayMienBac;
    //set thời điểm bắt đầu và kết thúc quay xổ số ba miền
    dateTimeBatDauQuayMienBac = moment(moment().format('YYYY-MM-DD') + ' 18:10'); //.format('YYYY/MM/DD HH:mm:ss')
    dateTimeDungQuayMienBac = moment(moment().format('YYYY-MM-DD' + ' 18:40'));

    if(dataLottery[key_item] !== undefined && dataLottery[key_item] !== null){
        if(dataLottery[key_item].s === '1'){
            dataLottery[key_item].comment = 'Đang quay ...';
        }
        return dataLottery[key_item];
    }else {
        var timeCurrent = moment();
        if(timeCurrent >= dateTimeBatDauQuayMienBac && timeCurrent<= dateTimeDungQuayMienBac){
            if(moment() >= moment(date_view)) {
                //Tao mo obj mau
                var obj = {};
                //set title cho item
                obj.title = setTitleResultLottery(moment().format('YYYY-MM-DD'));
                obj.arr_dau_loto = ["","","","","","","","","",""];
                obj.arr_duoi_loto = ["","","","","","","","","",""];
                var str = '';
                if(regionSelected === '1'){
                    str = " (Quay lúc 18h15')";
                }else if(regionSelected === '2'){
                    str = " (Quay lúc 17h15')";
                }else if(regionSelected === '3'){
                    str = " (Quay lúc 16h15')";
                }
                obj.comment = str;
                return obj;
            }else {
                return null;
            } 
       }else {
            return null;
       }
    }
}

//lay ds ket qua cac tinh cho truong hop mien nam , mien trung
function getListItemWithDate(date_view, regionSelected, dataLottery, action_type){
    //thoi gian bat dau quay, thoi gian dung quay
    var dateTimeBatDauQuayMienNam, dateTimeDungQuayMienNam, dateTimeBatDauQuayMienTrung, dateTimeDungQuayMienTrung;
    //set thời điểm bắt đầu và kết thúc quay xổ số ba miền
    dateTimeBatDauQuayMienNam = moment(moment().format('YYYY-MM-DD') + ' 16:10'); //.format('YYYY/MM/DD HH:mm:ss')
    dateTimeDungQuayMienNam = moment(moment().format('YYYY-MM-DD' + ' 16:40'));
    dateTimeBatDauQuayMienTrung = moment(moment().format('YYYY-MM-DD') + ' 17:10'); //.format('YYYY/MM/DD HH:mm:ss')
    dateTimeDungQuayMienTrung = moment(moment().format('YYYY-MM-DD' + ' 17:40'));

    if(action_type === 1){
        date_view.setDate(date_view.getDate() + 1);
    }else if(action_type === -1){
        date_view.setDate(date_view.getDate() - 1);
    }

    //Lấy ds ma code các tỉnh quay ngày nào đó
    let schedule = getListProvincialRotateWithDay(date_view, regionSelected);
    var arr_key = [];
    for(let i=0; i<schedule.code.length; i++){
        let key_item = schedule.code[i] + '_' + moment(date_view).format('YYYYMMDD');
        let name_provincial = schedule.name[i];
        let obj = {};
        obj.key_item = key_item;
        obj.name_provincial = name_provincial;
        arr_key.push(obj);
    }

    var arr_item = [];
    //Kiem tra xem ngay nay da co ket quar chua
    var check = false;
    for(let i = 0; i< arr_key.length; i++){
        var key_ = arr_key[i].key_item;
        // console.log('KEY========>: ' + key_);
        // console.log('DT========>: ' + JSON.stringify(dataLottery[key_]));
        if(dataLottery[key_] !== null && dataLottery[key_] !== undefined){
            // console.log('Vao day: ' +  JSON.stringify(dataLottery[key_]));
            check = true;
            //tao them thuoc tinh ten tinh cho item
            dataLottery[key_].name = arr_key[i].name_provincial;
            arr_item.push(dataLottery[key_]);
        }else{
            //Tao mo obj mau
            let obj = {};
            obj.name = arr_key[i].name_provincial;
            //set title cho item
            obj.title = setTitleResultLottery(moment().format('YYYY-MM-DD'));
            // let obj = {
            //     "s1": "",
            //     "s2": "",
            //     "p1": "",
            //     "p2": "",
            //     "p3": "",
            //     "p4": "",
            //     "p5": "",
            //     "p6": "",
            //     "p7": "",
            //     "p8": "",
            //     "arr_kq": ["","","","","","","","","","","","","","","","","",""
            //     ],
            //     "arr_dau_loto": ["","","","","","","","","",""
            //     ],
            //     "arr_duoi_loto": ["","","","","","","","","",""
            //     ],
            // }
            arr_item.push(obj);
        }
    }
    var timeCurrent = moment();
    if(check === false){
        if((timeCurrent >= dateTimeBatDauQuayMienNam && timeCurrent<= dateTimeDungQuayMienNam) || (timeCurrent>= dateTimeBatDauQuayMienTrung && timeCurrent<= dateTimeDungQuayMienTrung)){
            if(moment() < moment(date_view)){ //xoa du lieu
                arr_item = [];
            }else {
                //ko xoa du lieu
                var str = '';
                if(regionSelected === '2'){
                    str = " (Quay lúc 17h15')";
                }else if(regionSelected === '3'){
                    str = " (Quay lúc 16h15')";
                }
                arr_item[0].comment = str;
            }      
       }else {
           arr_item = [];
       }
    }else {
        //set comment dang quay cho truong hop tat ca cac tinh chua co day du ket qua
        var check_status = false;
        for(let item of arr_item){
            if(item.s !== null && item.s !== undefined && item.s !== '0'){
                check_status = true;
            }else if(item.s === null && item.s === undefined){
                check_status = true;
            }
        }
        if(check_status === true){
            arr_item[0].comment = 'Đang quay ...';
        }
    }
     
    return arr_item;
}

export {getItemWithDate,getListItemWithDate};