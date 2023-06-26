import React from 'react'
import { Card, Typography, Divider, Row, Col, Image } from 'antd'
import { styled } from 'styled-components'
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/size';
import { funded } from '../../constants/data';
const { Text } = Typography;
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

  .icon_funded {
   
    border: 1px solid ${colors.second};
    background-color: ${colors.white};
    width: 120px;
   
 
  }
  
`;

const DividerCustomer = styled(Divider)`
  
  border: 2px solid ${colors.primary};
`

export default function AboutUs() {
  return (
    <><AboutUsWrapper>
      <CardWrapper hoverable type='inner' title={<div className='title_about_us' ><Text className='title_about_us'>ABOUT US</Text></div>}>
        <Text className='content'>
          OVERBOX (abbreviation of My Leftover Box) is a communication campaign to raise awareness of food waste by providing interesting facts about leftovers, funded by the U.S.
          Consulate General in Ho Chi Minh City, and supported by ForGood Vietnam & Green Move Initiative.
        </Text>
      </CardWrapper>

    </AboutUsWrapper >
      <AboutUsWrapper>
        <CardWrapper hoverable type='inner' title={<div className='title_about_us' ><Text className='title_about_us'>OUR SPONSORS & SUPPORTERS</Text></div>}>
          <Row style={{display: 'flex', justifyContent: 'center'}}>
            {funded.map((item) => (
              <Col style={{ marginRight: 10 }}>
                <Image className='icon_funded' src={item.imageUrl} />
              </Col>
            ))}
          </Row>
        </CardWrapper>

      </AboutUsWrapper >
      <AboutUsWrapper>
        <CardWrapper hoverable type='inner' title={<div className='title_about_us' ><Text className='title_about_us'>WHY FOOD WASTE?</Text></div>}>
          <Text className='content'>
            We observe FOOD WASTE happening every day worldwide as an alarming situation,
            but there isn't sufficient attention or practical action being taken to address this pressing issue.
            Large amounts of food waste generate enormous pressure on our planet every day,
            making it crucial to take steps to save and protect the home that we all share. And to make it happen,
            begin with even the tiniest and most simple things, which will also influence the impact of more significant changes.
            Come along with OVERBOX as we search for solutions and take "small but mighty" steps to save the environment.
            This website aims to help people better see the environmental costs of food production & consumption, and raise their awareness about food waste.
          </Text>
        </CardWrapper>

      </AboutUsWrapper >


      <DividerCustomer /></>
  )
}
