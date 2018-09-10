const isSwipeReducer = (state=false, action)=>{
    if(action.type === 'SWIPE') return !state;
    return state;
}

export default isSwipeReducer;