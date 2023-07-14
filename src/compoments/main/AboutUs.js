import React from 'react'
import { Card, Typography, Divider, Row, Col, Image } from 'antd'
import { styled } from 'styled-components'
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/size';
import { funded } from '../../constants/data';
const { Text } = Typography;
const AboutUsWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled(Card)`
  width: 80%;
  text-align: justify;
  box-shadow: 0px 7px 7px rgba(118, 107, 107, 0.25);
  .title_about_us {
    text-align: center;
    color: ${colors.second};
    font-weight: bold;
    font-size: ${sizes.h2};
  }
  .content {
    color: ${colors.primary};
  }
  .icon_funded {
    border: 1px solid ${colors.second};
    background-color: ${colors.white};
    width: 120px;
  }
  @media(max-width: 912px) {
    .title_about_us {
      font-size: 18px;
    }
    .rowLogo {
      margin: 5px;
    }
  }
  @media(max-width:790px) {
    .icon_funded {width: 100px;}
  }
`;

const DividerCustomer = styled(Divider)`
  border: 2px solid ${colors.primary};
`

export default function AboutUs({isEnglish}) {
  return (
    <><AboutUsWrapper>
      <CardWrapper hoverable type='inner' title={<div className='title_about_us' >
        <Text className='title_about_us'>{isEnglish?'ABOUT US':'VỀ OVERBOX'}</Text></div>}>
        <Text className='content'>
          {isEnglish?`OVERBOX (abbreviation of My Leftover Box) is a communication campaign to raise awareness of food waste 
          by providing interesting facts about leftovers, 
          funded by the U.S. Consulate General in Ho Chi Minh City, and supported by ForGood Vietnam & Green Move Initiative.`:
          `Overbox là một chiến dịch truyền thông với sự tài trợ của Tổng Lãnh sự quán Hoa Kỳ tại Thành phố Hồ Chí Minh 
          và được vận hành bởi ForGood Vietnam nhằm mang tới những góc nhìn đa chiều, thú vị về thức ăn thừa và môi trường.`}
        </Text>
      </CardWrapper>

    </AboutUsWrapper >
      <AboutUsWrapper>
        <CardWrapper hoverable type='inner' title={<div className='title_about_us' >
          <Text className='title_about_us'>{isEnglish?'OUR SPONSORS & SUPPORTERS':'NHÀ TÀI TRỢ VÀ BẢO TRỢ'}</Text></div>}>
          <Row style={{display: 'flex', justifyContent: 'center'}}>
            {funded.map((item) => (
              <Col style={{ marginRight: 10, marginBottom: 10 }}>
                <Image className='icon_funded' src={item.imageUrl} />
              </Col>
            ))}
          </Row>
        </CardWrapper>

      </AboutUsWrapper >
      <AboutUsWrapper>
        <CardWrapper hoverable type='inner' title={<div className='title_about_us'>
          <Text className='title_about_us'>{isEnglish?'WHY FOOD WASTE?':'TẠI SAO LẠI LÃNG PHÍ THỰC PHẨM?'}</Text></div>}>
          <Text className='content'>
          {isEnglish?`We observe FOOD WASTE happening every day worldwide as an alarming situation,
            but there isn't sufficient attention or practical action being taken to address this pressing issue.
            Large amounts of food waste generate enormous pressure on our planet every day,
            making it crucial to take steps to save and protect the home that we all share. And to make it happen,
            begin with even the tiniest and most simple things, which will also influence the impact of more significant changes.
            Come along with OVERBOX as we search for solutions and take "small but mighty" steps to save the environment.
            This website aims to help people better see the environmental costs of food production & consumption, and raise their awareness about food waste.`
            :`Overbox nhận thấy sự khẩn cấp khi hiện trạng LÃNG PHÍ THỰC PHẨM vẫn đang diễn ra mỗi ngày, 
            nhưng lại chưa có sự quan tâm đúng đắn và hành động thực tế để giảm thiểu phần nào áp lực nặng nề cho Trái Đất 
            khi phải phân hủy lượng lớn thực phẩm trên khắp thế giới mỗi ngày. 
            OVERBOX tin rằng cùng hành động ngay hôm nay là hành động cấp thiết cho ngôi nhà chung của chúng ta. 
            Và để làm được điều đó, hãy bắt đầu từ những điều dù là nhỏ nhặt và giản đơn nhất, 
            cũng góp phần tạo hiệu ứng cho những thay đổi to lớn hơn. Hãy cùng OVERBOX đi tìm những câu trả lời 
            và hành động “nhỏ mà có võ” trên hành trình bảo vệ hành tinh xanh. Website cho phép người dùng được trải nghiệm chọn món ăn và nhận được hoá đơn về các tài nguyên cần phải tiêu tốn  
            tương đương cho một phần  ăn của bạn. Qua đó, nâng cao nhận thức và trách nhiệm đối với việc không lãng phí thức ăn là không lãng phí tài nguyên quý báu.
            `}
          </Text>
        </CardWrapper>

      </AboutUsWrapper >


      <DividerCustomer /></>
  )
}
