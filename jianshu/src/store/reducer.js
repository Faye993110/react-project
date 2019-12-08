import {combineReducers} from 'redux';
import {reducer as headerReducer} from '../common/header/store';
import {reducer as homeRedecer }from '../pages/home/store';
import {reducer as detailReducer} from '../pages/detail/store'
const reducer = combineReducers({
    header: headerReducer,
    home: homeRedecer,
    detail: detailReducer
})

export default reducer;


