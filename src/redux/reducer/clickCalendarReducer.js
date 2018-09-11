const clickCalendarReducer = (state=false, action)=>{
    if(action.type === 'CLICK_CALENDAR') return !state;
    return state;
}

export default clickCalendarReducer;