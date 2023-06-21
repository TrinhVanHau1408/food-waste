import { Footer } from 'antd/es/layout/layout';
import './App.css';
import Header from './compoments/header/Header';

import MenuDish from './pages/Menu';
import { useEffect, useRef, useState } from 'react';
function App() {
  // const observerRef = useRef(null);
  const aboutUsRef = useRef(null);
  const menuRef = useRef(null);
  const memberRef = useRef(null);
  const homepageRef = useRef(null);
  const [active, setActive] =useState('homePage')
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

  // useEffect(() => {
  //   observerRef.current = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           // Phần tử đã được cuộn vào viewport
  //           console.log(entry.target.id)
  //           setActive(entry.target.id);
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   return () => {
  //     if (observerRef.current) {
  //       observerRef.current.disconnect();
  //     }
  //   };
  // }, []);



  return (
    <div>
      <Header scrollToSection={scrollToSection} active={active}/>
      <MenuDish homepageRef={homepageRef} aboutUsRef={aboutUsRef} menuRef={menuRef} memberRef={memberRef}/>
      <Footer/>
    </div>
  );
}

export default App;
