const dataDoSo = {};
const dataDoSoReducer = (state=dataDoSo, action)=>{
    if(action.type === 'ADD_RESULT_DO_SO') return state = action.result_do_so;
    return state;
}
export default dataDoSoReducer;