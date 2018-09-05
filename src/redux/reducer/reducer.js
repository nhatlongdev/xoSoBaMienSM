import {combineReducers} from 'redux';
import dataLotteryReducer from './dataLottoryReducer';
import statusNetReducer from './statusNetReducer';
import regionSelectedReducer from './regionSelectedReducer';

const reducer = combineReducers({
    dataLottery: dataLotteryReducer,
    statusNet:statusNetReducer,
    regionSelected: regionSelectedReducer,
})

export default reducer;