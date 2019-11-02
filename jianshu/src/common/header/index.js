import React,{ useState } from 'react';
import './header.css';
import '../../statics/confont/iconfont.css'
import { CSSTransition } from 'react-transition-group'

function Header() {
    const [focused, setFocused] = useState(false);
    function handleInputFocuse(){
        setFocused(true);
    }
    const handleInputBlue= ()=> {
        setFocused(false);
    }
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
                       onBlur = {handleInputBlue}
                       className = {focused ? 'focused navSearch' : 'navSearch'}  placeholder="搜索"></input>
                <i className = {focused ? 'focused iconfont' : 'iconfont' }>&#xe62a;</i>
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

export default Header;