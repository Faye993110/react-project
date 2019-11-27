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
		}],
		articleList: [{
			id:1,
			title:'隐性抑郁的6个信号，一定要注意~',
			desc: '隐性抑郁的人通常不想承认他们感受到的抑郁有多么强烈。他们坚信只要能够继续生活，抑郁就会自动消失。 但对大多数人而言，那样生活只是继续忍受着悲伤和...',
			imgUrl: '//upload-images.jianshu.io/upload_images/16050459-f96ec17c03fd0e1b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
		},{
			id:2,
			title:'隐性抑郁的6个信号，一定要注意~',
			desc: '隐性抑郁的人通常不想承认他们感受到的抑郁有多么强烈。他们坚信只要能够继续生活，抑郁就会自动消失。 但对大多数人而言，那样生活只是继续忍受着悲伤和...',
			imgUrl: '//upload-images.jianshu.io/upload_images/16050459-f96ec17c03fd0e1b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
		},{
			id:3,
			title:'隐性抑郁的6个信号，一定要注意~',
			desc: '隐性抑郁的人通常不想承认他们感受到的抑郁有多么强烈。他们坚信只要能够继续生活，抑郁就会自动消失。 但对大多数人而言，那样生活只是继续忍受着悲伤和...',
			imgUrl: '//upload-images.jianshu.io/upload_images/16050459-f96ec17c03fd0e1b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
		}]
};


//纯函数，给定固定的输入，一定有固定的输出，并且不会改变原来的值

export default (state = defaultState, action) => {
	switch(action.type){
		
		default:
			return state
	}
}