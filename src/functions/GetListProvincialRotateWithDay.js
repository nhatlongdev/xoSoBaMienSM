import schedule_lottery_with_domain from '../data/schedule_lottery_with_domain';
function getListProvincialRotateWithDay(date_view, value_region){
    let index_day =  date_view.getDay() + 1;
    let key = value_region + index_day + "";
    return schedule_lottery_with_domain[key];
}

export {getListProvincialRotateWithDay};