import React, {Component} from 'react';
import './style.css';
import {connect} from 'react-redux';
import {actionCreators} from './store';

class Detail extends  Component {
    componentDidMount(){
        this.props.getDetail();
    }
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

const mapDispatch = (dispatch) => ({
    getDetail() {
     dispatch(actionCreators.getDetail());
     }
})

export default connect(mapStateToProps, mapDispatch)(Detail);