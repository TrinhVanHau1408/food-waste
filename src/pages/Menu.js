import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Banner from '../compoments/main/Banner';
import AboutUs from '../compoments/main/AboutUs';
import Dish from '../compoments/main/Dish';
import { Row, Col, Typography, Layout, Menu, theme, Button } from 'antd';
import { colors } from '../constants/colors';
import { food, categoryFood } from '../constants/data';


const { Title } = Typography;
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
`

const RowWrapper = styled(Row)`
 
 
`
const LayoutWrapper = styled(Layout)`

 
`;

const SiderWrapper = styled(Sider)`
  padding: 0;
 
 
  background: #f0f0f0;
 
  
`;
const HeaderWrapper = styled(Header)`
  padding: 0;
  background-color: ${props => props.theme.colorBgContainer};
`;
const ContentWrapper = styled(Content)`
  margin: 10px;
  background-color: ${props => props.theme.colorBgContainer};
  height: 400px, 
  overflowY: scroll;
  overflowX: hidden;

`;
const items1 = categoryFood.map(({ id, name }) => ({
  key: id,
  label: `${name}`,
}));

export default function MenuDish() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const themes = {
    colorBgContainer: colorBgContainer,

  };
  const [selectedItem, setSelectedItem] = useState(categoryFood[0].id);
  const [filterFood, setFilterFood] = useState([])
  const [order, setOrder] = useState([]);
  const handleMenuSelect = (item) => {
    setSelectedItem(item.key);
    // Do something with the selected item
    console.log('item.key', item.key)
  };

  useEffect(() => {
    const filter = food.filter(({ categoryId }) => categoryId == selectedItem)
    setFilterFood(filter)
  }, [selectedItem]);

  return (
    <ThemeProvider theme={themes}>
      <MenuWrapper >
        <Banner />

        <AboutUs />

        <Title>MENU</Title>
        <LayoutWrapper >
          <SiderWrapper style={{background: colorBgContainer}} theme="light"  width={250}>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} items={items1} onSelect={handleMenuSelect}>
            </Menu>
          </SiderWrapper>
          <LayoutWrapper >
            <HeaderWrapper>
              Please!, Order dish
              <Button>Order</Button>
            </HeaderWrapper>
            <ContentWrapper>
              <RowWrapper gutter={[8, 16]}>
                {filterFood.map((item, index) => (

                  <Col key={index} span={8}>
                    <Dish dish={item} index={index} />
                  </Col>

                ))}
              </RowWrapper>
            </ContentWrapper>
          </LayoutWrapper>
        </LayoutWrapper>
      </MenuWrapper>
    </ThemeProvider>
  )
}
