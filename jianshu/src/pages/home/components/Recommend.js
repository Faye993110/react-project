import React, {Component} from 'react';
import './topic.css';
import {connect} from 'react-redux'
class Recommend extends  Component {
	render(){
		return(
			<div className = 'recommendWrapper'>
				{(this.props.recommendList || []).map(item => {
					return(
						
            <div key = {item.id} className = 'recommendItem' style = {{background :`url(${item.imgUrl})`,backgroundSize:'contain'}}>
				  
					 </div>
					)
				})}
				
			</div>
		)
	}
}

const mapStateToProps = (state)=>({
	recommendList : state.home.recommendList
})
export default connect(mapStateToProps,null)(Recommend);