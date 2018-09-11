import {combineReducers} from 'redux';
import dataLotteryReducer from './dataLottoryReducer';
import statusNetReducer from './statusNetReducer';
import regionSelectedReducer from './regionSelectedReducer';
import isSearchSoMoReducer from './isSearchSoMoReducer';
import clickCalendarReducer from './clickCalendarReducer';

const reducer = combineReducers({
    dataLottery: dataLotteryReducer,
    statusNet:statusNetReducer,
    regionSelected: regionSelectedReducer,
    isSearchSoMo: isSearchSoMoReducer,
    clickCalendar: clickCalendarReducer,
})

export default reducer;