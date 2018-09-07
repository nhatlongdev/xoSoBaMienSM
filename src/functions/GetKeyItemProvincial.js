import moment from 'moment';
import {getListProvincialRotateWithDay} from './GetListProvincialRotateWithDay';
//action_type: 0-Giữ nguyên ngày, 1-cộng thêm một ngày, -1-Trừ đi một ngày
function getKeyItemOneProvincial(date_view, code_provincial, action_type){
    var key_item = code_provincial;
    console.log('MOMENT TEST: ' + moment(date_view).format('YYYYMMDD'))
    if(action_type === 1){
        date_view.setDate(date_view.getDate() + 1);
    }else if(action_type === -1){
        date_view.setDate(date_view.getDate() - 1);
    }
    key_item = key_item + '_' + moment(date_view).format('YYYYMMDD')
    return key_item;
}


//Tao mảng key item của các tỉnh có kết quả quay ngày nào đó
function getKeyItemProvincials(date_view, regionSelected, action_type){
    var arr_key = [];
    if(action_type === 1){
        date_view.setDate(date_view.getDate() + 1);
    }else if(action_type === -1){
        date_view.setDate(date_view.getDate() - 1);
    }
    //Lấy ds ma code các tỉnh quay ngày nào đó
    let schedule = getListProvincialRotateWithDay(date_view, regionSelected);

    for(let value of schedule.code){
        let key_item = value + '_' + moment(date_view).format('YYYYMMDD');
        arr_key.push(key_item);
    }
    return arr_key;
}

export {getKeyItemOneProvincial, getKeyItemProvincials};