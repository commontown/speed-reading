import { useEffect } from 'react'
import './styles.scss';
import Router from 'config/Router';
import { ReduxSagaProvider } from 'framework';
import Viewer from '../Viewer';

export default function App() {
  useEffect(() => {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 100 + 'px';
    window.addEventListener('resize', handleResize) //监听窗口大小改变
  }, []);
  const handleResize = e => {
    let e_width = e.target.innerWidth;
    // 样式兼容屏幕宽度为980-1400之间
    if (e_width > 980 && e_width < 1400) {
      // 设置根字号为 屏幕宽度的百分之一
      document.documentElement.style.fontSize = e_width / 100 + 'px';
    }
  }
  return (
    <div className="App">
      <ReduxSagaProvider>
        <Router Viewer={Viewer} />
      </ReduxSagaProvider>
    </div>
  );
}
