import React from 'react';

import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { images } from '../../constants/images';
// import { Image } from 'antd'
// import { colors } from '../constans/colors';
const HeaderWrapper = styled.header`
  background-color: #f2f2f2;
  
  box-shadow: 0px 5px 4px rgba(118, 107, 107, 0.2);
 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
 
  z-index: 99;
`;

const Logo = styled.div`
  img {
    width: 100px;
    height: 100px;
  }
`;

const Navigation = styled.nav`
  margin: 0 50px;    
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  ul li {
    margin-right: 30px;
  }

  ul li:hover {
    color: red; /* Change the color to your desired hover color */
  }

  ul li button {
    color: ${colors.primary};
    text-decoration: none;
    border: none;
    font-size: 18px;

  }

  li:active {
    color: blue; /* Change the color to your desired active color */
  }

  button {
    transition: background-color 0.3s ease;
  }
  .active {
    border: 2px solid ${colors.primary};
    border-radius: 20px;
    padding: 5px 10px;
  }
`;

export default function Header({ scrollToSection, active }) {
  return (
    <HeaderWrapper>
      <Navigation>

        <Logo className="logo">
          <img src={images.logo} alt="Logo" />
        </Logo>
        <ul>

          <li>
            <button className={active =='homePage'?'active':''} onClick={() => scrollToSection('homePage')}>Homepage</button>
          </li>
          <li>
            <button  className={active =='aboutUs'?'active':''} onClick={() => scrollToSection('aboutUs')}>About us</button>
          </li>
          <li>
            <button  className={active =='menu'?'active':''} onClick={() => scrollToSection('menu')}>Menu</button>
          </li>
          <li>
            <button className={active =='member'?'active':''} onClick={() => scrollToSection('member')}>Member</button>
          </li>

        </ul>


      </Navigation>
    </HeaderWrapper>
  )
}
