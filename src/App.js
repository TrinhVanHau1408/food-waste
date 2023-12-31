import './App.css';
import Header from './compoments/header/Header';
import Footer from './compoments/footer';
import MenuDish from './pages/Menu';
import {useRef, useState } from 'react';
import ButtonTranslate from './compoments/main/ButtonTranslate';



function App() {

 
  // const observerRef = useRef(null);
  const aboutUsRef = useRef(null);
  const menuRef = useRef(null);
  const memberRef = useRef(null);
  const homepageRef = useRef(null);
  const [active, setActive] =useState('homePage')
  const [isEnglish, setIsEnglish] = useState(true);
  const scrollToSection = (section) => {
    let ref;
    switch (section) {
      case 'homePage':
        ref = homepageRef;
        setActive('homePage')
        break;
      case 'aboutUs':
        ref = aboutUsRef;
        setActive('aboutUs')
        break;
      case 'menu':
        ref = menuRef;
        setActive('menu')
        break;
      case 'member':
        ref = memberRef;
        setActive('member')
        break;
      default:
        break;
    }

    if (ref  && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
     
    }
  };

 
  

  return (
    <div>
      <Header scrollToSection={scrollToSection} isEnglish={isEnglish} active={active}/>
      <div style={{position: 'relative'}}>
        <ButtonTranslate isEnglish={isEnglish} setIsEnglish={setIsEnglish}/>
        <MenuDish homepageRef={homepageRef} isEnglish={isEnglish} aboutUsRef={aboutUsRef} menuRef={menuRef} memberRef={memberRef}/>
      </div>
      <Footer isEnglish={isEnglish}/>
    </div>
  );
}

export default App;
