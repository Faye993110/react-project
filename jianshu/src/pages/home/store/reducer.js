//import * as constants from './constants';

const defaultState = {
	topicList: [{
			id: 1,
			title:'手绘',
			imgUrl:'//upload-images.jianshu.io/upload_images/12063224-0b83bafc00f4e2f0.jpeg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp'
		},{
			id: 2,
			title:'社会热点',
			imgUrl:'//upload-images.jianshu.io/upload_images/12063224-0b83bafc00f4e2f0.jpeg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp'
		}]
};


//纯函数，给定固定的输入，一定有固定的输出，并且不会改变原来的值

export default (state = defaultState, action) => {
	switch(action.type){
		
		default:
			return state
	}
}