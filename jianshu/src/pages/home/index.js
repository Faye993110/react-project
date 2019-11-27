import React, {Component} from 'react';
import './style.css'
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';


class Home extends  Component {
    render(){
        return(
            <div className = 'homeWrapper'>
                <div className = 'homeLeft'>
                    <img alt = '' className = 'banner-img' src="//upload-images.jianshu.io/upload_images/12063224-0b83bafc00f4e2f0.jpeg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"></img>
                    <Topic></Topic>
                    <List></List>
                </div>
                <div className = 'homeRight'>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </div>
            </div>
        )
    }
}

export default Home;