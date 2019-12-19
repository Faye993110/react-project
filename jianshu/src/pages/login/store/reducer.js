import * as constants from './constants';

const defaultState = {
   login: false
}


//纯函数，给定固定的输入，一定有固定的输出，并且不会改变原来的值

export default (state = defaultState, action) => {
	switch(action.type){
		default:
			return state
	}
}