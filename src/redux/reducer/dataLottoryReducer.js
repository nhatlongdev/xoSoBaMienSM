const dataLottery = {};

const dataLotteryReducer = (state=dataLottery, action)=>{
    if(action.type === 'ADD_RESULT_LOTTERY') return state = action.result_full;
    return state;
}

export default dataLotteryReducer;
