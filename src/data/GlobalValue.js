var GlobalValue = {
    Color:{
        vien:'#DDDDDD',
        bg:'#EEEEEE',
        yellow_light:'#FFFFCC',
        blue: '#0000FF',
        black: '#000000',
        bluee: '#000055',
        red: '#FF0000',
        green: '#00FF80',
    },
    daySelected: '',
    codeProvincialSelected: '',
    nameProvincialSelected: '',
    soLanQuay: '30',
    chuoiSoDo: '',
    arrSoDo: [],
    objResultDoSo: {},
    dragLottery:'0', //0--click vao moi hoac vao lai, 1 keo phai, -1 keo trai,  2 khong lam gi, -2: khi mới vào màn lần đầu, 4 co lai mang cap nhat du lieu, 3 quay truc tiep
    listProduct:[],
    duration_toast:2000,
    is_sound:true, //0-ko am thanh, 1-co am thanh
    is_vibrate:true, //0-ko rung, 1-co rung
    server_time:''
}

export default GlobalValue;