import moment from 'moment';
import { getDayOfWeek } from './GetDayOfWeek';
function setTitleResultLottery(rd){
    var d = new Date(rd);
    let index_day = d.getDay();
    let title = getDayOfWeek(index_day) + ', ' + moment(d).format('DD/MM/YYYY');
    return title;
}

export {setTitleResultLottery};