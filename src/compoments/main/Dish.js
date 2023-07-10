import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button, Image, Typography, Row, Col } from 'antd';
import {
  PlusCircleOutlined,
  MinusCircleOutlined
} from '@ant-design/icons';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/size';
const { Text, Title } = Typography;
const DishWrapper = styled(Row)`
  width: 350px;
  height: 200px;
  border-radius: 5px;
 
  overflow: hidden;
  margin: 5px 5px;
  
  box-shadow: 0 7px 7px rgba(118, 107, 107, 0.25);
  .name_dish {
    color: ${colors.primary};
    font-size: ${sizes.h4};
  }
  .amount_per_serving {
    font-size: 10px;
    opacity: 0.8;
  }
  .img_dish {
    width: 200px;
    height: 200px;
   
    object-fit: fill;
   
    
  }

  @media(max-width: 912px) {

    width: 200px;
    height: 200px;

    .name_dish {
      font-size: 13px;
    }
    .img_dish {
      width: 80px;
      height: 200px;
     
      object-fit: fill;
     
      
    }
   }
`

const ContentWrapper = styled(Col)`
  flex: 1;
  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  Button:focus {
    color: red;
  }
 
`
const ImgWrapper = styled(Col)`

  
`
const ServingWrapper = styled.div`
  .order_sering {
    color: ${colors.primary};
    font-size: 14px;
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

  @media(max-width: 912px) {
    .btn_delete_dish {
      margin-left: 5px;
    }
    .icon_add {
      font-size: 30px;
    }

    .order_sering {
      font-size: 10px;
    }
  }
`

const ButtonWrapper = styled.div`
 
  display: flex;
  direction: row;
  justify-content: flex-end;

 
`
const MyButton = styled.button`

   background-color: transparent;
  .icon_add:hover {
    
    font-size: 50px;
   }

   .btn_add {
    color: ${colors.primary}
   }

   .btn_delete {
    color: ${colors.second}
   }
   .icon_btn_dish:hover {
    scale: 1.1;
   }

`
export default function Dish({ dish, myOrder, handleChildStateChange }) {



  return (

    <DishWrapper>


      <ImgWrapper >
        <Image preview={false} className='img_dish' src={dish.imageUrl} />
      </ImgWrapper>

      <ContentWrapper>
        <div>
          <div>
            <Text className='name_dish'>{dish.name}</Text>
          </div>
          <Text className='amount_per_serving'>{dish.amountPerServing}/serving</Text>
        </div>

        <ServingWrapper>
          {/* <Text className='order_sering'>{myOrder && `${myOrder.amount} serving` } </Text> */}
          <Text className='order_sering'>{myOrder && (myOrder.amount > 1 ? `${myOrder.amount} servings` : `${myOrder.amount} serving`)} </Text>

          <ButtonWrapper>
            {myOrder && <MyButton

              onClick={() => handleChildStateChange(dish, myOrder, 'delete')}
              className='btn_delete_dish'>
              <MinusCircleOutlined
                style={{ fontSize: '30px' }}
                className='icon_btn_dish btn_delete' />
            </MyButton>}

            <MyButton

              onClick={() => handleChildStateChange(dish, myOrder, 'add')}
              className='btn_add_dish'>
              <PlusCircleOutlined
                style={{ fontSize: '30px' }}
                className='icon_btn_dish btn_add' />
            </MyButton>
          </ButtonWrapper>
        </ServingWrapper>
      </ContentWrapper>


    </DishWrapper>

  )
}
