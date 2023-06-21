import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Banner from '../compoments/main/Banner';
import AboutUs from '../compoments/main/AboutUs';
import Dish from '../compoments/main/Dish';
import { Row, Col, Typography, Layout, Menu, theme, Button, Divider } from 'antd';
import { colors } from '../constants/colors';
import { food, categoryFood } from '../constants/data';
import Bill from '../compoments/main/Bill';
import Members from '../compoments/main/Members';


const { Title, Text } = Typography;
const { Header, Content, Sider } = Layout;
const MenuWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  .ant-menu-item-selected {
    background-color: ${colors.primary};
    color: #fff;
  }

  .title_menu {
   
    text-align: center;
  
`

const RowWrapper = styled(Row)`
 
 
`
const LayoutWrapper = styled(Layout)`

 display: flex;
 direction: column;
 justify-content: center;
 
`;

const SiderWrapper = styled(Sider)`
  padding: 0;
 
 
  background: #f0f0f0;
 
  
`;
const HeaderWrapper = styled(Header)`
  padding: 0;
  background-color: ${props => props.theme.colorBgContainer};
  display: flex;
  justify-content: flex-end;

  Button {
    margin-right: 10px;
    background-color: ${colors.primary};
    color: #ffffff;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
    border: none;
  }

  Button:hover {
    
  }
`;
const ContentWrapper = styled(Content)`
  margin: 10px;
  background-color: ${props => props.theme.colorBgContainer};
  height: 400px, 
  overflowY: scroll;
  overflowX: hidden;

`;


const DividerCustomer = styled(Divider)`
  
  border: 2px solid ${colors.primary};
`

const RowMemberWrapper = styled(Row)`
  display: flex;
  justify-content: center;
  margin:  20px;
 
`
const items1 = categoryFood.map(({ id, name }) => ({
  key: id,
  label: `${name}`,
}));

export default function MenuDish({ homepageRef, aboutUsRef, menuRef, memberRef }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const themes = {
    colorBgContainer: colorBgContainer,

  };
  const [selectedItem, setSelectedItem] = useState(categoryFood[0].id);
  const [filterFood, setFilterFood] = useState([])
  const [order, setOrder] = useState([]);
  const [billPopup, setBillPopup] = useState(false);
  const handleMenuSelect = (item) => {
    setSelectedItem(item.key);
    // Do something with the selected item
    console.log('item.key', item.key)
  };

  useEffect(() => {
    const filter = food.filter(({ categoryId }) => categoryId == selectedItem)
    setFilterFood(filter)
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
  return (
    <ThemeProvider theme={themes}>
      <MenuWrapper >
        <section ref={homepageRef}>
          <Banner />
        </section>

        <section ref={aboutUsRef}>
          <AboutUs />
        </section>

        <section ref={menuRef}>
          {<Bill order={order} billPopup={billPopup} setBillPopup={setBillPopup} />}
          <div className='title_menu'>
            <Text style={{ color: colors.primary, fontSize: 20, fontWeight: 'bold' }}>MENU</Text>
          </div>
          <LayoutWrapper >

            <SiderWrapper style={{ background: colorBgContainer }} theme="light" width={250}>
              <Menu style={{ marginTop: 60 }} theme="light" mode="inline" defaultSelectedKeys={['1']} items={items1} onSelect={handleMenuSelect}>
              </Menu>
            </SiderWrapper>
            <Layout >
              <HeaderWrapper>
                <Button type='defualt' onClick={() => setBillPopup(true)}>Order</Button>
              </HeaderWrapper>
              <ContentWrapper>
                <RowWrapper gutter={[8, 16]}>
                  {filterFood.map((item, index) => (

                    <Col key={index} span={8}>
                      <Dish dish={item} myOrder={order.filter(({ id }) => id == item.id)[0]} handleChildStateChange={handleChildStateChange} />
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
            <Text style={{ color: colors.primary, fontSize: 20, fontWeight: 'bold' }}>MEMBER</Text>
          </div>
          <RowMemberWrapper gutter={[48, 16]}>
            <Col>
              <Members />
            </Col>
            <Col>
              <Members />
            </Col>
            <Col>
              <Members />
            </Col>
            <Col>
              <Members />
            </Col>
          </RowMemberWrapper>
        </section>
      </MenuWrapper>


    </ThemeProvider>
  )
}
