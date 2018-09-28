const valueVibrateReducer = (state = true, action)=>{
    if(action.type === 'SETTING_VIBRATE') return action.value;
    return state;
}
export default valueVibrateReducer;