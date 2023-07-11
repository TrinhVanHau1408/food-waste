import { Avatar, Typography, Row, Col } from 'antd'
import React, { useState } from 'react'
import { styled } from 'styled-components'
import { images } from '../../constants/images'
import { colors } from '../../constants/colors';
const { Text } = Typography;
const MemberWrapper = styled(Row)`
  display: flex;
  direction: column;
  justify-content: center;
  algin-item: center;
  width: 180px;
  
  .member_avt {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    margin-bottom: 10px;
  }
  .member_name {
    width: 120px;
    font-weight: bold;
    height: 60px;

   .text_member_name {
    font-size: 20px;
   }

   @media(max-width: 912px) {
    .text_member_name {
      font-size: 11px;
    }
    
    }
  }
`
export default function Members({ imageUrl, name }) {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  return (

    <MemberWrapper>
      <Col>
        <Avatar className='member_avt' size={screenWidth>912?140:100} src={imageUrl} />
      </Col>

      <Col className='member_name' style={{ textAlign: 'center', marginTop: 10 }}>
        <Text className='text_member_name' >{name}</Text>
      </Col>
    </MemberWrapper>
  )
}
