import * as constants from './constants';

const defaultState = {
    focused: false,
		list: [],
		page: 0,
		totalPage: 1,
		mouseIn : true
};


//纯函数，给定固定的输入，一定有固定的输出，并且不会改变原来的值

export default (state = defaultState, action) => {
	switch(action.type){
		case constants.SEARCH_FOCUS:
			return {focused:true};
		case constants.SEARCH_BLUR:
			return {focused: false};
		case constants.CHANGE_LIST:
			return {
					list: action.data,
					focused: true,
					totalPage : action.totalPage,
					page : action.page,
					mouseIn: true
			}
		case constants.MOUSE_ENTER:
			return {
				mouseIn: true
			}
		case constants.MOUSE_LEAVE:
			return {
				mouseIn: false
			}
		default:
			return state
	}
}