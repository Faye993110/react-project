import React from 'react';
import './header.css';
import '../../statics/confont/iconfont.css'

function Header() {
  return (
    <div className='headerWrapper'>
        <a className='logo' href='/'></a>
        <div className='nav'>
            <div className='navItem left active'>首页</div>
            <div className='navItem left'>下载APP</div>
            <div className='navItem right'>登陆</div>
            <div className='navItem right'><i className='iconfont'></i></div>
            <input className = 'navSearch' placeholder="搜索"></input>
        </div>
        <div className='addition'>
            <div className = "button writting">写文章</div>
            <div className = "button reg">注册</div>
        </div>
    </div>
  );
}

export default Header;