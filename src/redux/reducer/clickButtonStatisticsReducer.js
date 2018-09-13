const clickButtonStatisticsReducer = (state='',action)=>{
    if(action.type === 'DAU_DUOI'){
        return state = 'THỐNG KÊ ĐẦU ĐUÔI LÔ TÔ';
    }else if(action.type === 'TONG_2_SO_CUOI'){
        return state = 'THỐNG KÊ TỔNG 2 SỐ CUỐI';
    }else if(action.type === 'TK_00_99'){
        return state = 'THỐNG KÊ 00 - 99';
    }else if(action.type === 'TK_VE_NHIEU'){
        return state = 'THỐNG KÊ CÁC SỐ VỀ NHIỀU';
    }else if(action.type === 'TK_LAU_RA'){
        return state = 'THỐNG KÊ CÁC SỐ LÂU RA';
    }
    return state;
}

export default clickButtonStatisticsReducer;