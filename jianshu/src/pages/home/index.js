import React, {Component} from 'react';
import './style.css'
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import axios from 'axios';
import {connect} from 'react-redux'

class Home extends  Component {
    componentDidMount(){
        axios.get('/api/home.json').then((res)=>{
        const result = res.data.data;
        //console.log(result);
        const action = {
            type : 'change_home_data',
            topicList: result.topicList,
            articleList: result.articleList,
            recommendList: result.recommendList
        }
        this.props.changeHomeData(action);
      })
    }
    render(){
        return(
            <div className = 'homeWrapper'>
                <div className = 'homeLeft'>
                    <img alt = '' className = 'banner-img' src="//upload.jianshu.io/admin_banners/web_images/4807/80c81765b76cce7a0cbdab0b65bb34d2fafc0a9b.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
                    <Topic></Topic>
                    <List></List>
                </div>
                <div className = 'homeRight'>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </div>
            </div>
        )
    };

   
}
const  mapDispatch = (dispatch) => ({
   changeHomeData(action) {
     dispatch(action);
   }
});

export default connect(null,mapDispatch)(Home);