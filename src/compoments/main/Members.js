import { Avatar, Typography, Row, Col } from 'antd'
import React from 'react'
import { styled } from 'styled-components'
import { images } from '../../constants/images'
const { Text } = Typography;
const MemberWrapper = styled(Row)`
  display: flex;
  direction: column;
  justify-content: center;
  algin-item: center;
  width: 150px;
  
  .avt {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
   
  }
`
export default function Members() {
  return (
    <MemberWrapper>
      <Col>
        <Avatar className='avt' size={130} src={images.beef} />
      </Col>

      <Col>
        <Text>Trịnh Văn Hậu</Text>
      </Col>
    </MemberWrapper>
  )
}
