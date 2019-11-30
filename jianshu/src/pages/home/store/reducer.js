//import * as constants from './constants';

const defaultState = {
	topicList: [],
		articleList: [],
		recommendList:[]
};


//纯函数，给定固定的输入，一定有固定的输出，并且不会改变原来的值

export default (state = defaultState, action) => {
	switch(action.type){
	  case 'change_home_data':
			return{
				...state,
				topicList: action.topicList,
				articleList: action.articleList,
				recommendList: action.recommendList
			}	
		default:
			return state
	}
}