import moment from 'moment';
function getKeyItemOneProvincial(date_view, code_provincial, action_type){
    //action_type: 0-Giữ nguyên ngày, 1-cộng thêm một ngày, -1-Trừ đi một ngày
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
export {getKeyItemOneProvincial};