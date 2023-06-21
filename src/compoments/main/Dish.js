import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button, Image, Typography } from 'antd';
import {
  PlusCircleOutlined,
  MinusCircleOutlined
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
 
  margin: 10px;
  
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

  Button:focus {
    color: red;
  }
 
`
const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  algin-item: center;
  margin-right: 5px;
  
`
const ServingWrapper = styled.div`
  .order_sering {
    color: ${colors.primary};
    font-size: 14;
  }
  .btn_add_dish, .btn_delete_dish {
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

  .btn_delete_dish {
    margin-left: 10px;
  }
  .icon_add {
    font-size: 50px;
    color: ${colors.primary};

  }
  .icon_delete {
    font-size: 50px;
    color: red;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  direction: row;

`
export default function Dish({ dish, myOrder, handleChildStateChange }) {



  return (

    <DishWrapper>

      <ContentWrapper>
        <div>
          <div>
            <Text className='name_dish'>{dish.name}</Text>
          </div>
          <Text className='amount_per_serving'>{dish.amountPerServing}/serving</Text>
        </div>

        <ServingWrapper>
          {/* <Text className='order_sering'>{myOrder && `${myOrder.amount} serving` } </Text> */}
          <Text className='order_sering'>{myOrder &&  (myOrder.amount > 1?`${myOrder.amount} servings`:`${myOrder.amount} serving`)} </Text>

          <ButtonWrapper>
            <Button
              type='defualt'
              onClick={() => handleChildStateChange(dish, myOrder, 'add')}
              className='btn_add_dish'
              icon={
                <PlusCircleOutlined
                  style={{ fontSize: '30px' }}
                  className='icon_add' />}>
            </Button>
            {myOrder && <Button 
              onClick={() => handleChildStateChange(dish, myOrder, 'delete')}
              className='btn_delete_dish'
              icon={<MinusCircleOutlined 
                  style={{ fontSize: '30px' }} 
                  className='icon_delete'/>}>
                    
            </Button>}
          </ButtonWrapper>
        </ServingWrapper>
      </ContentWrapper>
      <ImgWrapper>
        <Image preview={false} className='img_dish' src={dish.imageUrl} />
      </ImgWrapper>

    </DishWrapper>

  )
}
