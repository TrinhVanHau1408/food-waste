import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Banner from '../compoments/main/Banner';
import AboutUs from '../compoments/main/AboutUs';
import Dish from '../compoments/main/Dish';
import { Row, Col, Typography, Layout, Menu, theme, Button, Divider, Image, Dropdown, Space } from 'antd';
import {
  UnorderedListOutlined,
  DownOutlined
} from '@ant-design/icons';
import { colors } from '../constants/colors';
import { food, categoryFood, member } from '../constants/data';
import Bill from '../compoments/main/Bill';
import Members from '../compoments/main/Members';
import { sizes } from '../constants/size';



const { Title, Text } = Typography;
const { Header, Content, Sider } = Layout;


const MenuWrapper = styled.div`
  width: 99%;
  max-width: 1200px;
  
  margin: 0 auto;
  

  .ant-menu-item-selected {
    background-color: ${colors.primary};
    color: #fff;
  }

  .title_menu {
    text-align: center;
    
  }
  .text_title {
    color: ${colors.second};
    font-size: ${sizes.h2};
    font-weight: bold;
  }

     @media(max-width: 912px) {
      .text_title {
        font-size: 16px;
      }
    }
  
`

const RowWrapper = styled(Row)`
height: 420px; 
overflow-y: scroll; 

margin: 0;
padding: 0;
 
`
const LayoutWrapper = styled(Layout)`

 display: flex;
 direction: column;
 justify-content: center;

 
 
`;

const SiderWrapper = styled(Sider)`
  padding: 0;

  .menuCategory {
    margin-top: 60px;
    font-size: ${sizes.h3}
  }

  @media(max-width: 912px) {
    .menuCategory {
      font-size: 16px;
      position: absolute;
      z-index: 99;
     
    }
   }
`;
const HeaderWrapper = styled(Header)`
  padding: 0;
  background-color: ${props => props.theme.colorBgContainer};
  display: flex;
  justify-content: flex-end;

  button {
    margin-right: 10px;
    background-color: ${colors.primary};
    color: #ffffff;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 10px;
    height: 40px;
    padding: 0 20px;
    font-size: 20px;
  }

  button:hover {
    scale: 1.1;
  }

  .btn_reset_order {
    background-color: transparent;
    color: ${colors.primary};
    border: 2px solid ${colors.primary};
  }
  select {
    background: transparent;
    outline: none;
    border: none;
    width: 100px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    maring-left: 2px;
    color: ${colors.primary};
    option {
      font-size: 14px;
      border: 2px solid ${colors.primary};
    }
    .selected {
      color: ${colors.second};
    }
  }

  @media(max-width: 912px) {
    justify-content: space-between;

    margin: 0 2px;
   .btn_order {
    margin-right: 20x;
   }


  }




`;
const ContentWrapper = styled(Content)`
  padding: 2px 30px;
  background-color: ${props => props.theme.colorBgContainer};
  height: 400px, 
  overflowY: hidden;
  overflowX: hidden;

  @media(max-width: 912px) {
    padding: 2px 2px;
    height: 300px, 
   }

`;


const DividerCustomer = styled(Divider)`
  
  border: 2px solid ${colors.primary};
`

const RowMemberWrapper = styled(Row)`
  display: flex;
  justify-content: center;
  margin:  20px;
 
`

export default function MenuDish({ homepageRef, isEnglish, aboutUsRef, menuRef, memberRef }) {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const themes = {
    colorBgContainer: colorBgContainer,

  };
  const [selectedItem, setSelectedItem] = useState(categoryFood[0].id);
  const [filterFood, setFilterFood] = useState(food)
  const [categoty, setCategoty] = useState([]);
  const [order, setOrder] = useState([]);
  const [billPopup, setBillPopup] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [widthCategory, setWidthCategory] = useState(screenWidth < 912 ? 0 : 200);
  const handleMenuSelect = (item) => {
    setSelectedItem(item.key);
    // Do something with the selected item
    console.log('item.key', item.key)
  };



  useEffect(() => {
    setCategoty(categoryFood.map(({ id, name }) => ({
      key: `${id}`,
      label: isEnglish?`${name.eng}`:`${name.vn}`,
    })));
    
  }, [isEnglish])

  useEffect(() => {
    if (selectedItem != 0) {
      const filter = food.filter(({ categoryId }) => categoryId == selectedItem)
      setFilterFood(filter)
    } else {
      setFilterFood(food)
    }

  }, [selectedItem]);

  const handleChildStateChange = (dish, myOrder, type) => {
    console.log('handleChildStateChange')
    if (myOrder) {
      setOrder(order.map(item => {
        console.log('handleChildStateChange')
        if (item.id == dish.id) {
          if (type == 'add') return { ...item, amount: item.amount + 1 }

          if (item.amount == 1) {
            return {};
          } else {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      }))
    } else {
      setOrder([...order, { id: dish.id, amount: 1 }]);
    }


  }

  const handleSelectChange = (event) => {
    if (event.target.value != '') setSelectedItem(event.target.value);
  };

  return (
    <ThemeProvider theme={themes}>
     
        <MenuWrapper >
          <section ref={homepageRef}>
            <Banner isEnglish={isEnglish} menuRef={menuRef} />
          </section>

          <section ref={aboutUsRef}>
            <AboutUs isEnglish={isEnglish}/>
          </section>

          <section  ref={menuRef}>
            {<Bill order={order} billPopup={billPopup} setBillPopup={setBillPopup} isEnglish={isEnglish} />}
            <div className='title_menu'>
              <Text className='text_title'>MENU</Text>
            </div>
            <LayoutWrapper >


              {screenWidth > 912 && <SiderWrapper style={{ background: colorBgContainer }} theme="light" width={350}>
                <Menu className='menuCategory' theme="light" mode="inline" defaultSelectedKeys={['0']} items={categoty} onSelect={handleMenuSelect}>
                </Menu>
              </SiderWrapper> 
              }
              <Layout >

                <HeaderWrapper>
                  {/* <div><UnorderedListOutlined style={{ fontSize: 24, color: colors.primary }} onClick={() => { widthCategory == 0 ? setWidthCategory(200) : setWidthCategory(0) }} /></div> */}
                  {screenWidth <912 &&<select id="selectOption" value={selectedItem} onChange={handleSelectChange}>
                    <option value="">-- Categoty --</option>
                    {categoty.map(({ key, label }) => (
                      <option value={key} className={key == selectedItem ? 'selected' : ''}>{label}</option>
                    ))}
                  </select>}
                  <div>
                    <button className='btn_reset_order' onClick={() => setOrder([])}>Re-order</button>
                    <button className='btn_order' onClick={() => setBillPopup(true)}>Order</button>
                  </div>
                </HeaderWrapper>
                <ContentWrapper>
                  <RowWrapper gutter={[0, 8]}>
                    {filterFood.map((item, index) => (

                      <Col key={index} span={screenWidth < 912 ? 18 : 12}>
                        <Dish isEnglish={isEnglish} dish={item} myOrder={order.filter(({ id }) => id == item.id)[0]} handleChildStateChange={handleChildStateChange} />
                      </Col>

                    ))}
                  </RowWrapper>
                </ContentWrapper>
              </Layout>
            </LayoutWrapper>
          </section>
          <DividerCustomer />
          <section ref={memberRef}>
            <div className='title_menu'>
              <Text className='text_title'>{isEnglish?'MEMBER':'THÀNH VIÊN'}</Text>
            </div>
            <RowMemberWrapper gutter={screenWidth > 912 ? [24, 16] : [4, 8]}>
              {member.map((item) => (
                <Members span={12} key={item.id} imageUrl={item.imageUrl} name={item.name} />
              ))}
            </RowMemberWrapper>
          </section>

        </MenuWrapper>
     
    </ThemeProvider>
  )
}
