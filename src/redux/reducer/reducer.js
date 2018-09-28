import {combineReducers} from 'redux';
import dataLotteryReducer from './dataLottoryReducer';
import statusNetReducer from './statusNetReducer';
import regionSelectedReducer from './regionSelectedReducer';
import isSearchSoMoReducer from './isSearchSoMoReducer';
import clickCalendarReducer from './clickCalendarReducer';
import dataDoSoReducer from './dataDoSoReducer';
import clickButtonDoSoReducer from './clickButtonDoSoReducer';
import clickButtonStatisticsReducer from './clickButtonStatisticsReducer';
import updateLotteryReducer from './updateLotteryReducer';
import valueSoundReducer from './valueSoundReducer';
import valueVibrateReducer from './valueVibrateReducer';

const reducer = combineReducers({
    dataLottery: dataLotteryReducer,
    statusNet:statusNetReducer,
    regionSelected: regionSelectedReducer,
    isSearchSoMo: isSearchSoMoReducer,
    clickCalendar: clickCalendarReducer,
    dataDoSo: dataDoSoReducer,
    clickButtonDoSo: clickButtonDoSoReducer,
    clickButtonStatistics: clickButtonStatisticsReducer,
    updateLottery: updateLotteryReducer,
    valueSound: valueSoundReducer,
    valueVibrate: valueVibrateReducer,

})

export default reducer;