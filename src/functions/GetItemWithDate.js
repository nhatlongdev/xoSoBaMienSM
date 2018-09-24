
import moment from 'moment';
import {getListProvincialRotateWithDay} from './GetListProvincialRotateWithDay';
function getItemWithDate(key_item, dataLottery){
    if(dataLottery[key_item] !== null) return dataLottery[key_item];
    return null;
}

function getListItemWithDate(date_view, regionSelected, dataLottery, action_type){
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

    // console.log('ARR KEY: ' + arr_key.length);
    // console.log('ARR KEY===>: ' + JSON.stringify(arr_key[0]));
    // console.log('DATA===>: ' + JSON.stringify(dataLottery));

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
    if(check === false){
        arr_item = [];
    }
    return arr_item;
}

export {getItemWithDate,getListItemWithDate};