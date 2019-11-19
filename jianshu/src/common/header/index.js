import React, {Component} from 'react';
import './header.css';
import '../../statics/confont/iconfont.css';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store'

class Header extends Component{
    
	getListArea(){
		const {focused, list} = this.props;
		const copyList = list || [];
		if(focused){
			return(
			<div className ="SearchInfo">
				<div className = 'SearchInfoTitle'>
					热门搜索
					<span className = 'SearchInfoSwitch'>换一批</span>
				</div>
				<div className = 'SearchInfoItem'>
					{
					 copyList.map((item,index) => {
							return <a key = {index}>{item}</a>
						})
					}
				</div>
			</div>)
			
		}else{
			 return ('')
		}
	}
	render() {
		const {focused,handleInputFocuse,handleInputBlur} = this.props;
		return (
			<div className='headerWrapper'>
					<a className='logo' href='/'></a>
					<div className='nav'>
							<div className='navItem left active'>首页</div>
							<div className='navItem left'>下载APP</div>
							<div className='navItem right'>登陆</div>
							<div className='navItem right'><i className='iconfont'>&#xe636;</i></div>
							<CSSTransition
									timeout={100}
									in={focused}
									classNames="slide">
							<div className='searchWrapper'>
									<input onFocus = {handleInputFocuse} 
												 onBlur = {handleInputBlur}
												 className = {focused ? 'focused navSearch' : 'navSearch'}  placeholder="搜索"></input>
									<i className = {focused ? 'focused iconfont' : 'iconfont' }>&#xe62a;</i>
									{this.getListArea()}
							</div>
							</CSSTransition>
					</div>
					<div className='addition'>
							<div className = "button writting"><i className='iconfont'>&#xe617;</i>写文章</div>
							<div className = "button reg">注册</div>
					</div>
			</div>
		);
	}
}





const mapStateToProps = (state) => {
  return{
		focused: state.header.focused,
		list: state.header.list
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleInputBlur(){
						dispatch(actionCreators.searchBlur());
						//dispatch(actionCreators.getList()); 
        },
        handleInputFocuse(){
					dispatch(actionCreators.getList()); 
          dispatch(actionCreators.searchFocus());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);