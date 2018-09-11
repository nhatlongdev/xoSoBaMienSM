// Action chọn vùng miền
export function selectRegion(value_region){
    return {type:'SELECT_REGION', value_region}
}

//ADD RESULT LOTTERY
export function addResultLottery(result_full){
    return {type: 'ADD_RESULT_LOTTERY', result_full}
}

//SU KIEN CLICK TIM KIEM SO MO
export function searchSoMo(){
    return {type: 'SEARCH_SO_MO'}
}

//SU KIEN CLICK CALENDAR DE XEM KET QUA THEO NGAY
export function clickCalendar(){
    return {type: 'CLICK_CALENDAR'}
}
