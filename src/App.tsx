import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* main 标签：主要内容区域 */}
      <main className="main-content">
        {/* section 标签：一个主题区域 */}
        <section className="welcome-section">
          <h2 className="title">
            欢迎来到太阳能系统学习平台
          </h2>
          <p className="description">
            通过四个阶段的测验，逐步掌握太阳能系统的知识
          </p>
        </section>

        {/* article 标签：一个完整的内容块 */}
        <article className="learning-stages">
          <h3>学习阶段</h3>
          <div className="stage-list">
            <div className="stage-item">
              <h4>第一阶段：基础概念</h4>
              <p>了解太阳能系统的基本原理</p>
            </div>
            <div className="stage-item">
              <h4>第二阶段：系统组成</h4>
              <p>学习各个组件的功能和作用</p>
            </div>
            <div className="stage-item">
              <h4>第三阶段：安装维护</h4>
              <p>掌握安装和维护技巧</p>
            </div>
            <div className="stage-item">
              <h4>第四阶段：故障排除</h4>
              <p>学习常见问题的解决方法</p>
            </div>
          </div>
        </article>
      </main>

      {/* footer 标签：页脚区域 */}
      <footer className="footer">
        <p>© 2024 太阳能系统学习平台</p>
      </footer>
    </div>
  );
}

export default App;
