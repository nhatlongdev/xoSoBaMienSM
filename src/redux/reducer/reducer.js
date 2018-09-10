import {combineReducers} from 'redux';
import dataLotteryReducer from './dataLottoryReducer';
import statusNetReducer from './statusNetReducer';
import regionSelectedReducer from './regionSelectedReducer';
import isSwipeReducer from './isSwipeReducer';

const reducer = combineReducers({
    dataLottery: dataLotteryReducer,
    statusNet:statusNetReducer,
    regionSelected: regionSelectedReducer,
    isSwipe: isSwipeReducer,
})

export default reducer;