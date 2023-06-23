import React from 'react'
import { styled } from 'styled-components'
import { colors } from '../../constants/colors'
import { Row, Col, Typography, Avatar } from 'antd'
import { member } from '../../constants/data';

const { Text } = Typography;

const FooterWrapper = styled.div`
  
  background-color: ${colors.primary};
  display: flex;
  justify-content: center;
  
`

const RowWrapper = styled(Row)`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  color: ${colors.second};

  .titleInfo {
    width: 100%;
    font-size: 20px;
  
    margin: 10px 0;
    margin-left: 20px;

    color: ${colors.second};
  }

  .member {
    text-align: center;
  }

  .methodContact {
    font-size: 15px;
    margin-right: 10px;
    .method {
        margin-bottom: 5px;
        font-size: 16px;
      }
  }

  .contentContact {
    .content {
      margin-bottom: 10px;
      color: ${colors.white};
    }

    .content a {
      outline: none;
      color: ${colors.white};
    }
  }
`
export default function Footer() {
  return (
    <FooterWrapper>
      <RowWrapper >
        <Col>
          <Row >
            <Text className='titleInfo'>Contact Information</Text>
            <Col className='methodContact'>
              <Row className='method'>Email:</Row>
              <Row className='method'>Facebook:</Row>
              <Row className='method'>Contact:</Row>
            </Col>
            <Col className='contentContact'>
              <Row className='content'>myleftoverbox@gmail.com</Row>
              <Row className='content'><a href='https://www.facebook.com/myleftoverbox'>https://www.facebook.com/myleftoverbox</a></Row>
              <Row className='content'>0834514044 - 0367624114</Row>
            </Col>
          </Row>
        </Col>

        <Col>
          <Row style={{display: 'flex',  justifyContent: 'center'}}>
            <Text className='titleInfo member'>Team Roster</Text>
            <Row >
              {member.map((item) => (
                <Col style={{ marginRight: 5 }}>
                  <Avatar size={50} src={item.imageUrl} />
                </Col>
              ))}
            </Row>
          </Row>
        </Col>
      </RowWrapper>
    </FooterWrapper>
  )
}
