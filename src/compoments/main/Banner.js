import React from 'react'
import { Image, Typography, Button } from 'antd'
import styled from 'styled-components';
import banner from '../../assets/banner.jpg'
import { colors } from '../../constants/colors';

const { Title, Text } = Typography;
const BannerWrapper = styled.div`

  margin-top: 110px;
  display: flex;
  justify-content: center;
  position: relative;
  over-flow: hidden;
  
`;


const BannerImg = styled(Image)`

  object-fit: conver;
  height: 1000px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5%;
  .title, .text  {
    color: #F6F9FA;
    text-align: center;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.8);
  }
  .tilte {
    border: 1px solid red;
   
  }

  
  .btn_menu {
    margin-top: 10px;
    width: 120px;
    padding: 2px;
    background-color: ${colors.primary};
    border: none;
    box-shadow: 0 6px 4px rgba(0, 0, 0, 0.5);
    &:hover {
      color: #FF0000; /* Add the desired text color when hovering */
    }
   
  }

  .btn_text{
    color: #F6F9FA;
    font-weight: bold;
    
  }

  .btn_menu:hover  {
    background-color: rgba(255, 255, 255, 0.1);
    border: 2px solid ${colors.primary};
   .btn_text {
    color: ${colors.primary}
   }
  }


`;


export default function Banner() {
  return (
    <BannerWrapper>
      <BannerImg preview={false} src={banner} />

      <InfoWrapper>
        <Title level={3} className='title'>WHAT’S THE COST?</Title>
        <Text className='text'>Choose your meal and see how much it “cost”.</Text>
        <Button className='btn_menu'>
          <Text className='btn_text'>GO TO MENU</Text>
        </Button>
      </InfoWrapper>
    </BannerWrapper>)
}
