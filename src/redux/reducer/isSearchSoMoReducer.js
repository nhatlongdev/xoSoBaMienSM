const isSearchSoMoReducer = (state=false, action)=>{
    if(action.type === 'SEARCH_SO_MO') return !state;
    return state;
}

export default isSearchSoMoReducer;