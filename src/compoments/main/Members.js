import { Avatar, Typography, Row, Col } from 'antd'
import React from 'react'
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
    font-weight: bold;
    height: 60px;
   Text {
    font-size: 14px;
   }
  }
`
export default function Members({ imageUrl, name }) {
  return (

    <MemberWrapper>
      <Col>
        <Avatar className='member_avt' size={140} src={imageUrl} />
      </Col>

      <Col className='member_name' style={{ textAlign: 'center', marginTop: 10 }}>
        <Text style={{fontSize: 20}} >{name}</Text>
      </Col>
    </MemberWrapper>
  )
}
