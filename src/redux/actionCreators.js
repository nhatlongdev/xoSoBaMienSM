// Action chọn vùng miền
export function selectRegion(value_region){
    return {type:'SELECT_REGION', value_region}
}

//ADD RESULT LOTTERY
export function addResultLottery(result_full){
    return {type: 'ADD_RESULT_LOTTERY', result_full}
}

//ADD RESULT LOTTERY
export function addResultDoSo(result_do_so){
    return {type: 'ADD_RESULT_DO_SO', result_do_so}
}

//SU KIEN CLICK TIM KIEM SO MO
export function searchSoMo(){
    return {type: 'SEARCH_SO_MO'}
}

//SU KIEN CLICK CALENDAR DE XEM KET QUA THEO NGAY
export function clickCalendar(){
    return {type: 'CLICK_CALENDAR'}
}

//SU KIEN CLICK BUTTON DO SO
export function clickButtonDoSo(){
    return {type: 'CLICK_BUTTON_DO_SO'}
}
