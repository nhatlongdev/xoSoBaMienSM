import schedule_lottery_with_provincial from '../data/schedule_lottery_with_provincial';

function getItemWithDate(key_item, dataLottery){
    if(dataLottery[key_item] !== null) return dataLottery[key_item];
    return null;
}

function getListItemWithDate(arr_key, dataLottery){
    var arr_item = [];
    for(let i =0; i< arr_key.length; i++){
        if(dataLottery[arr_key[i]] !== null){
            let key = dataLottery[arr_key[i]].pc;
            //tao them thuoc tinh ten tinh cho item
            dataLottery[arr_key[i]].name = schedule_lottery_with_provincial[key].name;
            arr_item.push(dataLottery[arr_key[i]]);
        }else{
            arr_item.push(null);
        }
    }
    
    return arr_item;
}

export {getItemWithDate,getListItemWithDate};