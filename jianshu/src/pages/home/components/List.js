import React, {Component} from 'react';
import './topic.css';
import {connect} from 'react-redux';
import {actionCreators} from '../store';

class List extends  Component {
	
    render(){
      return(
					<div>
						{
							(this.props.articleList||[]).map((item) => {
								return(
                  <div key = {item.id} className = 'listItem'>
										<img src={item.imgUrl} alt = ''></img>
										<div className = 'listInfo'>
												<h3>{item.title}</h3>
												<p>{item.desc}</p>
										</div>
							  	</div>
								)
							})
						}
            <div className = 'loadMore' onClick = {this.props.getMoreList}>loadMore</div>
					</div>
      )
    }
}

const mapStateToProps = (state)=>({
	 articleList : state.home.articleList
})
const mapDispatchToProps = (dispatch) => ({
   getMoreList(){
     dispatch(actionCreators.getMoreList())
	 }
})
export default connect(mapStateToProps,mapDispatchToProps)(List);