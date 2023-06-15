import React from 'react';
import logo from '../../assets/logo.svg';
import styled from 'styled-components';
// import { Image } from 'antd'
// import { colors } from '../constans/colors';
const HeaderWrapper = styled.header`
  background-color: #f2f2f2;
  padding: 5px 0;
  box-shadow: 0px 5px 4px rgba(118, 107, 107, 0.2);
 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
 
  z-index: 99;
`;

const Logo = styled.div`
  img {
    width: 80px;
    height: 80px;
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

  ul li a {
    color: #333;
    text-decoration: none;
  }

  li:active {
    color: blue; /* Change the color to your desired active color */
  }

`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Navigation>

      <Logo className="logo">
            <img src={logo} alt="Logo" />
      </Logo>
        <ul>
          
          <li>
            <a href="/">Homepage</a>
          </li>
          <li>
            <a href="/about">About us</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/members">Members</a>
          </li>

        </ul>


      </Navigation>
    </HeaderWrapper>
  )
}
