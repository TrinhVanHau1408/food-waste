import { Footer } from 'antd/es/layout/layout';
import './App.css';
import Header from './compoments/header/Header';

import MenuDish from './pages/Menu';
function App() {
  return (
    <div>
      <Header/>
      <MenuDish/>
      <Footer/>
    </div>
  );
}

export default App;
