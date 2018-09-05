import moment from 'moment';
function formatDataLotteryToKeyValue(data){
    var dataLotteryWithKey = {};
    for(let value of data){
        let key = value.pc + '_' + moment(value.rd).format('YYYYMMDD');
        dataLotteryWithKey[key] = value;
    }
    return dataLotteryWithKey;
}

export {formatDataLotteryToKeyValue};