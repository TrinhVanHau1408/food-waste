import { Divider, Modal, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import { food } from '../../constants/data';
import { colors } from '../../constants/colors';


const { Text } = Typography;

const ModalWrapper = styled(Modal)`
  .ant-modal-title {
    color: ${colors.primary}; /* Màu sắc tiêu đề modal */
  }

  okButton {
    background-color: ${colors.primary};
  }

  cancelButton {
    color: ${colors.primary};
  }

  @media(max-width: 912px) {
    padding: 0 -20px;
  }
`;
const TableWrapper = styled.table`

  border-spacing: 0;
  
  padding-left: 40px;  
  tr th {
    color: ${colors.primary}
  }
   .thServing {
    padding-right: 30px;
  }
  .thQuantity {
    padding-right: 30px;
  }
  .thEnvCost {
    padding-right: 40px;
    
  }

  .thLevel {
    padding-right: 30px;
  }

  .textQuivalent {
    font-weight: bold;
  }
  .tdDish {
    font-weight: bold;
  }
  tr td {
    padding:2px 10px;
  }

  .unit {
    font-size: 12;
    opacity: 0.8;
  }
  .VeryLow {
    color: blue;
  }
  .Low {
    color: green;
  }
  .Medium {
    color: orange;
  }
  .High {
    color: red;
  }

  tr:nth-child(even) {
    background-color: #EBFDFC;
  }
  
  tr:nth-child(odd) {
    background-color: #ffffff;
  }

  .totalBill {
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: ${colors.primary}
  }

  @media(max-width: 912px) {

    font-size: 10px;
   padding: 0px;
   margin: 0 -10px;
   .thServing {
    padding-right: 2px;
  }
  .thQuantity {
    padding-right: 2px;
   
  }
  .thEnvCost {
    padding-right: 0px;
    
  }
  .thLevel {
    padding-right: 2px;
  }

  tr td {
    padding:2px 10px;
  }


  .unit {
    font-size: 9px;
  }

  .totalBill {
    font-size: 11px;
  }

  }
`

const NoteWrapper = styled.div`
  margin-left: 40px;
  margin-top: 20px;
  text-align: justify;
  .textNote {
    opacity: 0.8;
  }

  @media(max-width: 912px) {
    margin-left: 0px;

    .textNote{
      font-size: 11px;
    }
    
  }


`

export default function Bill({ order, billPopup, setBillPopup, isEnglish }) {

  const [bill, setBill] = useState([]);
  const [totalBill, setTotalBill] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    const filterOrder = food.filter((item) => {
      const foundItem = order.find((ord) => ord.id === item.id);
      return foundItem ? true : false;
    });

    let totalEnvCost = 0;
    let totalCar = 0;
    let totalPlane = 0;
    let totalTrain = 0;

    setBill(filterOrder.map((item) => {
      const foundItem = order.find((ord) => ord.id === item.id);
      const amount = foundItem.amount;


      totalEnvCost += item.envCost * amount;
      totalCar += item.equivalent[0].equivalent * amount;
      totalPlane += item.equivalent[1].equivalent * amount;
      totalTrain += item.equivalent[2].equivalent * amount;

      console.log({ totalEnvCost, totalCar, totalPlane, totalTrain })
      return {
        ...item,
        amount: amount,
        level: (item.envCost * amount) < 100 ? 'Very Low' :
          ((item.envCost * amount) <= 500 ? 'Low' :
            ((item.envCost * amount) <= 1500 ? 'Medium' : 'High'
            )),
        envCost: item.envCost * amount,

      };
    }));

    let totalLevel = (totalEnvCost < 100 ? 'Very Low' :
      ((totalEnvCost) <= 500 ? 'Low' :
        ((totalEnvCost) <= 1500 ? 'Medium' : 'High'
        )))

    setTotalBill({
      envCost: totalEnvCost,
      car: totalCar,
      plane: totalPlane,
      train: totalTrain,
      level: totalLevel,
    })

  }, [billPopup])
  return (
    <ModalWrapper

      title="BILL FOR ME"
      centered
      open={billPopup}
      onOk={() => setBillPopup(false)}
      okButtonProps={{ style: { backgroundColor: colors.primary } }}
      onCancel={() => setBillPopup(false)}
      cancelButtonProps={{ style: { border: `1px solid ${colors.primary}`, color: colors.primary } }}
      width={1000}
    >
      {order.length > 0 ?
        <><TableWrapper>
          <tr>
            <th className='thDish'>{isEnglish ? 'Dish' : 'Món ăn'}</th>
            <th className='thServing'>{isEnglish ? 'Serving' : 'Khẩu phần'}{screenWidth<=912&&<br />}<Text className='unit'>(s)</Text></th>
            <th className='thQuantity'>{isEnglish ? 'Quantity' : 'Số lượng'}{screenWidth<=912&&<br />}<Text className='unit'>(g)</Text></th>
            <th className='thEnvCost'>{isEnglish ? 'Environmental costs' : 'Chi phí'} {screenWidth<=912&&<br />}<Text className='unit'>(gCO2e)</Text></th>
            <th className='thLevel'>{isEnglish ? 'Level of impact' : 'Cấp độ ảnh hưởng'}</th>
            <th className='thEquivalent'>{isEnglish ? 'Equivalent' : 'Tương đương'}</th>

          </tr>

          {bill.map((item, index) => (

            <tr className={index % 2 == 0 ? 'bgBlue' : ''} key={item.id}>
              <td className='tdDish'>{isEnglish ? item.name.eng : item.name.vn} </td>
              <td>{item.amount} </td>
              <td>{item.quantity} </td>
              <td>{item.envCost} </td>
              <td className={item.level.replace(' ', '')}>{item.level} </td>
              <td>
                <div>
                  <text className='textQuivalent'>
                    {(item.equivalent[0].equivalent * item.amount).toFixed(2)}
                  </text> {isEnglish ? 'km in an average petrol car' : 'bằng 1 chiếc xe hơi xăng trung bình'}
                </div>
                <div>
                  <text className='textQuivalent'>
                    {(item.equivalent[1].equivalent * item.amount).toFixed(2)}
                  </text> {isEnglish ? 'km by plane' : 'bằng máy bay'}
                </div>
                <div>
                  <text className='textQuivalent'>
                    {(item.equivalent[2].equivalent * item.amount).toFixed(2)}
                  </text> {isEnglish ? 'km by train' : 'bằng km bằng xe lửa'}
                </div>
              </td>

            </tr>
          ))}
          {
            totalBill && <tr>
              <td className='totalBill' colSpan={3}>{isEnglish ? 'TOTAL' : 'TỔNG'}</td>
              <td>{totalBill.envCost}</td>
              <td className={totalBill.level.replace(' ', '')}>{totalBill.level}</td>
              <td><div>
                <text className='textQuivalent'>{totalBill.car.toFixed(2)}</text>
                {isEnglish ? ' km in an average petrol car' : ' bằng 1 chiếc xe hơi xăng trung bình'}
              </div>
                <div>
                  <text className='textQuivalent'>{totalBill.plane.toFixed(2)}</text>
                  {isEnglish ? ' km by plane' : ' bằng máy bay'}
                </div>
                <div>
                  <text className='textQuivalent'>{totalBill.train.toFixed(2)}</text>
                  {isEnglish ? ' km by train' : ' bằng km bằng xe lửa'}
                </div> </td>
            </tr>
          }

        </TableWrapper>
          <NoteWrapper>
            <Text className='textNote'>{isEnglish?`*gCO2e (means grams of carbon dioxide equivalent): 
            a measurement of the total greenhouse gases emitted, expressed in terms 
            of the equivalent measurement of carbon dioxide.`:
            `*gCO2e = khối lượng greenhouse gases đã được quy đổi thành tương đương với CO2.
            Lượng CO2e càng cao thì environmental impact càng cao`}</Text>
          </NoteWrapper></> : <Text style={{ fontSize: 20, color: colors.second }}>Please choose a dish!</Text>
      }
    </ModalWrapper>
  )
}
