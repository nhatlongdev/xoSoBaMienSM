const valueSoundReducer = (state = true, action)=>{
    if(action.type === 'SETTING_SOUND') return action.value;
    return state;
}

export default valueSoundReducer;