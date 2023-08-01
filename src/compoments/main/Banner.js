import React, { useEffect, useRef } from 'react';
import { Image, Typography } from 'antd';
import styled from 'styled-components';
import '../../fonts.css'
import { colors } from '../../constants/colors';
import { images } from '../../constants/images';
import { sizes } from '../../constants/size';
const { Text } = Typography;
const BannerWrapper = styled.div`
  width: 100%;
  margin-top: 110px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  over-flow: hidden;
  
  .banner_img {
    margin: 0;
    object-fit: fill;
    max-width: 100%;
    height: 450px;
  }

  body {
    background-color: #F6F9FA;
  }
  @media(max-width: 912px) {
    margin-top: 65px;
    .banner_img {
      width: 100%;
      height: 180px;
    }
   }
`;

const BannerImg = styled(Image)`

`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F6F9FA;
  padding: 5px 0;

  a {
    color: ${colors.black};
  }

  a:hover {
    color: ${colors.primary}
  }

  .title {
    font-size: 50px;
  }

  .title a {
    font-family: Montserrat-Bold, sans-serif;
  }
  .text {
    font-size: ${sizes.h3};
    font-family: Montserrat-SemiBold, sans-serif;
  }

  .text_credit {
    font-size: 14px;
    color: ${colors.black};
    opacity: 0.5;
  }

  .title, .text  {
    color: ${colors.black};
    text-align: center;
    border-radius: 5px;
    padding: 0 20px;
  }
 
  .btn_menu {
    margin-top: 10px;
    border-radius: 10px;
    font-size: ${sizes.h4};
    font-weight: bold;
    padding: 10px 20px;
    color: ${colors.white};
    background-color: ${colors.primary};
    border: none;
    box-shadow: 0 6px 4px rgba(0, 0, 0, 0.5);
  }
  .btn_menu:hover  {
    color: ${colors.primary};
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.4);
    border: 1px solid ${colors.primary};
  }


  @media(max-width: 912px) {
    position: relative;
   
    .title {
      font-size: 20px;
    }
    .text {
      margin-top: 5px;
      font-size: 16px;
    }
    .title, .text {
      padding: 0 5px;
    }

    .btn_menu {
      font-size: 18px;
    }
   }
`;



export default function Banner({ isEnglish }) {

  const loadIframe = () => {
    // Access the iframe's content and apply CSS styles when it's loaded
    const iframe = document.getElementById('myIframe');

    if (iframe) {
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      const body = iframeDocument.querySelector('body');
      
      console.log("body banner", body)

      
      // // Create a link element for the CSS file
      // const link = iframeDocument.createElement('link');
      // link.rel = 'stylesheet';
      // link.href = '/path/to/your/iframeStyles.css'; // Replace with your CSS file path

      // // Append the link to the head of the iframe's document
      // head.appendChild(link);
    }
  };
  return (
    <BannerWrapper>
      <BannerImg className='banner_img' preview={false} src={images.banner} />

      {/* <InfoWrapper>
        <Text className='title'>WHAT’S THE COST?</Text>
        <Text className='text'>{isEnglish?'Choose your meal and see how much it “costs”.':' Hãy chọn bữa ăn của bạn và xem “giá” của chúng nhé!'}</Text>
        <button className='btn_menu' onClick={ scrollToSectionMenu}>
         {isEnglish?'GO TO MENU': 'ĐI ĐẾN MENU'}
        </button>
      </InfoWrapper> */}
      <InfoWrapper>
        <Text className='title'>
          <a href='https://www.theworldcounts.com/challenges/people-and-poverty/hunger-and-obesity/how-many-people-die-from-hunger-each-year'>
            People die from hunger
          </a>
        </Text>
        <Text className='text'>in the world, this year</Text>
        <Text className='text_credit'>Credit: <a href='https://www.theworldcounts.com'>https://www.theworldcounts.com</a></Text>
        <iframe

          title='People who died from hunger'
          id='myIframe'
          onLoad={loadIframe}
          src='https://www.theworldcounts.com/embeds/counters/2?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=14'
          style={{ border: 'none', backgroundColor: 'transparent' }}
          height='33' width='300'>
          
        </iframe>
      </InfoWrapper>
    </BannerWrapper>)
}
