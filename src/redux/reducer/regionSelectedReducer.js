const regionSelectedReducer =(state='0', action)=>{
    if(action.type === 'SELECT_REGION') return state = action.value_region;
    return state;
}

export default regionSelectedReducer;