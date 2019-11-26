import {combineReducers} from 'redux';
import {reducer as headerReducer} from '../common/header/store';
import {reducer as homeRedecer }from '../pages/home/store'
const reducer = combineReducers({
    header: headerReducer,
    home: homeRedecer
})

export default reducer;


