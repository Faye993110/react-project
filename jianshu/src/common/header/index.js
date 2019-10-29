import React from 'react';
import './header.css'
function Header() {
  return (
    <div className='headerWrapper'>
        <a className='logo' href='/'></a>
        <div className='nav'>
            <div className='navItem left'>首页</div>
            <div className='navItem left'>下载APP</div>
            <div className='navItem right'>登陆</div>
            <div className='navItem right'>Aa</div>
        </div>
    </div>
  );
}

export default Header;