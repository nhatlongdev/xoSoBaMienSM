import moment from 'moment';
import { setTitleResultLottery } from '../functions/SetTitleResultLottery';
import { createArrDauLoto, createArrDuoiLoto } from '../functions/CreateArrDauDuoi';
function formatDataLotteryToKeyValue(dataLotteryWithKey, data){
    // var dataLotteryWithKey = {};
    for(let value of data){
        let key = value.pc + '_' + moment(value.rd).format('YYYYMMDD');
        //set title cho item
        value.title = setTitleResultLottery(value.rd);

        //Tao list ket qua
        var arr_kq = [];
        if(value.pc === 'MB'){
            arr_kq.push(value.p1);
            for (let i=2; i<8; i++){
                let key = 'p'+ i;
                let arr = value[key].split(' - ');
                let arrTam = arr_kq;
                arr_kq = arrTam.concat(arr);
            }
            arr_kq.push(value.s1);
        }else{
            var arr_kq_tam = [];
            var db = '';
            if(value.s1 !== null){
                db = db + value.s1;
            }
            if(value.s1 !== null){
                db = db + value.s2;
            }
            arr_kq_tam.push(db);
            for (let i=1; i<9; i++){
                let key = 'p'+ i;
                let arr = value[key].split(' - ');
                let arr_ = arr.reverse();
                let arrTam = arr_kq_tam;
                arr_kq_tam = arrTam.concat(arr_);
            }
            arr_kq = arr_kq_tam.reverse();
        }
        value.arr_kq = arr_kq;
    
        //Tao list dau lo to
        value.arr_dau_loto = createArrDauLoto(arr_kq);
        value.arr_duoi_loto = createArrDuoiLoto(arr_kq);

        dataLotteryWithKey[key] = value;
    }
    return dataLotteryWithKey;
}

export {formatDataLotteryToKeyValue};