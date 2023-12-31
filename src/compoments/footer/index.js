import React from 'react'
import { styled } from 'styled-components'
import { colors } from '../../constants/colors'
import { Row, Col, Typography, Image } from 'antd'
import { funded, member } from '../../constants/data';
import { icons } from '../../constants/icons';

const { Text } = Typography;

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${colors.primary};
  display: flex;
  justify-content: center;

`

const RowWrapper = styled(Row)`
  width: 1000px;
  display: flex;
  justify-content: center;
  color: ${colors.second};

  .titleInfo {
    width: 100%;
    font-weight: bold;
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
      display: flex;
      align-items: center;
    }
    .content a {
      outline: none;
      color: ${colors.white};
    }

    .content  img {
      width: 40px;
      hight: 40px;
      margin-right: 10px;

    }
  }

  .icon_funded {
    border: 1px solid ${colors.second};
    background-color: ${colors.white};
    width: 70px;
  }

`
export default function Footer({isEnglish}) {
  return (

    <FooterWrapper>
      <RowWrapper >
        <Col>
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Text className='titleInfo member'>{isEnglish?'Contact Information':'Thông tin liên hệ'}</Text>

            <Col className='contentContact'>
              <Row className='content'><img src={icons.email}/> myleftoverbox@gmail.com</Row>
              <Row className='content'><img src={icons.facebook} /> <a href='https://www.facebook.com/myleftoverbox'>https://www.facebook.com/myleftoverbox</a></Row>
              <Row className='content'><img src={icons.phone}/> 0834514044 - 0367624114</Row>
            </Col>
          </Row>
        </Col>
      </RowWrapper>
    </FooterWrapper>


  )
}
