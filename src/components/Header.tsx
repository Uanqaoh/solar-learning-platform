import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-titles">
          <h1 className="header-title">
            太阳能系统学习平台
          </h1>
          <h2 className="header-subtitle">
            通过测验掌握知识
          </h2>
        </div>
        <nav>
          <ul className="nav-menu">
            <li><a href="/" className="nav-link">首页</a></li>
            <li><a href="/quiz" className="nav-link">测验</a></li>
            <li><a href="/handbook" className="nav-link">手册</a></li>
            <li><a href="/progress" className="nav-link">学习进度</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 