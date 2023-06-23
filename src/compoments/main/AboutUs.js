import React from 'react'
import { Card, Typography, Divider } from 'antd'
import { styled } from 'styled-components'
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/size';
const {Text} = Typography;
const AboutUsWrapper = styled.div`
 
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled(Card)`
  width: 80%;
 
  text-align: justify;
 
  box-shadow: 0px 7px 7px rgba(118, 107, 107, 0.25);

  .title_about_us {
    text-align: center;

    color: ${colors.second};
    font-weight: bold;
    font-size: ${sizes.h2};
    
  }

  .content {
   
    color: ${colors.primary};
  }
  
`;

const DividerCustomer = styled(Divider)`
  
  border: 2px solid ${colors.primary};
`

export default function AboutUs() {
  return (
    <><AboutUsWrapper>
      <CardWrapper hoverable type='inner' title={<div className='title_about_us' ><Text  className='title_about_us'>ABOUT US</Text></div>}>
        <Text  className='content'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
        </Text>
      </CardWrapper>
      
    </AboutUsWrapper >
    <AboutUsWrapper>
      <CardWrapper hoverable type='inner' title={<div className='title_about_us' ><Text  className='title_about_us'>FOOD WASTE IMPACT</Text></div>}>
        <Text  className='content'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
        </Text>
      </CardWrapper>
      
    </AboutUsWrapper >
     <DividerCustomer  /></>
  )
}
