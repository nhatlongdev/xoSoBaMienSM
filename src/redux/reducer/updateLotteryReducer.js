const updateLotteryReducer=(state=false, action)=>{
    if(action.type === 'UPDATE_LOTTERY') return !state;
    return state;
}
export default updateLotteryReducer;