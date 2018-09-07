function getItemWithDate(key_item, dataLottery){
    if(dataLottery[key_item] !== null) return dataLottery[key_item];
    return null;
}

export {getItemWithDate};