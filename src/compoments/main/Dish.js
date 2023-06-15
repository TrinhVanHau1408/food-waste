import React from 'react';
import { styled } from 'styled-components';
import { Button, Image, Typography } from 'antd';
import {
  PlusCircleOutlined
} from '@ant-design/icons';
import { colors } from '../../constants/colors';
const { Text, Title } = Typography;
const DishWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 280px;
  height: 150px;
  border-radius: 5px;
  over-flow: hidden;
 
  box-shadow: 0 7px 7px rgba(118, 107, 107, 0.25);
  .name_dish {
    color: ${colors.primary};
    font-size: 18px;
  }
  .amount_per_serving {
    font-size: 9px;
    opacity: 0.8;
  }
  .img_dish {
    width: 150px;
    height: 95%;
    padding: 7px;
    margin-right: 5px;
    object-fit: fill;
    border-radius: 100%;
    border: 2px solid ${colors.primary};
  }
`

const ContentWrapper = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 
`
const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  algin-item: center;
  
`
const ButonWrapper = styled.div`
  .order_sering {
    color: ${colors.primary};
    font-size: 14;
  }
  .btn_add_dish {
    border: none;
    display: flex;
    text-algin: left;
    
  }
  .btn_add_dish:hover {
    outline: none;
    box-shadow: none;
    border: none;
    &:hover {
      color:${colors.primary}; /* Add the desired text color when hovering */
    }
  }

  .icon_add {
    font-size: 50px;
    color: ${colors.primary};

  }
`
export default function Dish({dish, index}) {

  const handleAddDish = () => {
    console.log('ok')
  }
  return (
    <DishWrapper>
     
      <ContentWrapper>
        <div>
          <div>
            <Text className='name_dish'>{dish.name}</Text>
          </div>
          <Text className='amount_per_serving'>{dish.mountPerServing}/serving</Text>
        </div>

        <ButonWrapper>
          <Text className='order_sering'>2 serving</Text>
          <Button onClick={handleAddDish} className='btn_add_dish' icon ={<PlusCircleOutlined style={{ fontSize: '30px' }} className='icon_add' />}>
          </Button>
        </ButonWrapper>
      </ContentWrapper>
      <ImgWrapper>
        <Image preview={false} className='img_dish' src={dish.imageUrl} />
      </ImgWrapper>

    </DishWrapper>
  )
}
