const clickButtonDoSoReducer = (state=false, action)=>{
    if(action.type === 'CLICK_BUTTON_DO_SO') return !state;
    return state;
}

export default clickButtonDoSoReducer;