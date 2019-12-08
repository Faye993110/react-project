import React, {Component} from 'react';
import './style.css';
import {connect} from 'react-redux';
class Detail extends  Component {
    render(){
        return(
            <div className = 'detailWrapper'>
                <div className = 'header'>
                 {this.props.title}
                </div>
                <div className = 'content' dangerouslySetInnerHTML = {{__html:this.props.content}}>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
title : state.detail.title,
content : state.detail.content
})

export default connect(mapStateToProps, null)(Detail);