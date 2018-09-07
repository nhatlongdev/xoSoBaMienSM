// Action chọn vùng miền
export function selectRegion(value_region){
    return {type:'SELECT_REGION', value_region}
}

//ADD RESULT LOTTERY
export function addResultLottery(result_full){
    return {type: 'ADD_RESULT_LOTTERY', result_full}
}