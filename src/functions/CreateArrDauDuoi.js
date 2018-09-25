
//TẠO MẢNG THỐNG KÊ ĐẦU LÔ TÔ 
function createArrDauLoto(arr_kq){
    arr_dau_loto = [];
    for (let i=0; i< 10; i++){
        var textShow = '';
        var arr =[], arrTam = [];
        for(let j=0; j<arr_kq.length; j++){
            var sub = arr_kq[j].substr(arr_kq[j].length -2,1);
            var sub_final = arr_kq[j].substring(arr_kq[j].length -1);
            if(sub === i+""){
                arrTam.push(sub_final);
            }
        }
        if(arrTam.length>0){
            var _ = require('underscore');
            arr = _.sortBy(arrTam);
            for(let a of arr){
                textShow === ''? textShow = a : textShow = textShow + ","+ a;
            }
        }
        arr_dau_loto.push(textShow);
    }
    return arr_dau_loto;
}

function createArrDuoiLoto(arr_kq){
    arr_duoi_loto = [];
    for (let i=0; i< 10; i++){
        var textShow = '';
        var arr =[], arrTam = [];
        for(let j=0; j<arr_kq.length; j++){
            let sub = arr_kq[j].substring(arr_kq[j].length -1);
            let sub_final = arr_kq[j].substr(arr_kq[j].length -2,1);
            if(sub === i+""){
                arrTam.push(sub_final);
            }
        }
        if(arrTam.length>0){
            var _ = require('underscore');
            arr = _.sortBy(arrTam);
            for(let a of arr){
                textShow === ''? textShow = a : textShow = textShow + ","+ a;
            }
        }
        arr_duoi_loto.push(textShow);
    }
    return arr_duoi_loto;
}


export {createArrDauLoto, createArrDuoiLoto};
