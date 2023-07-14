import React from 'react'
import { colors } from '../../constants/colors'
import styled from 'styled-components';

const TranslateWrapper = styled.div`
  position: fixed;
  right: 1%;
  bottom: 22%;
  z-index: 99;
  background-color: ${colors.primary};
  border-radius: 100%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 3px 4px ${colors.second};

  &:hover {
    scale: 1.1;
    box-shadow: 2px 3px 4px ${colors.primary};
  }
  .button_translate {
    outline: none;
    border: none;
    padding: 5px;
    background-color: transparent;
    color: ${colors.white};
    font-size: 10px;
  }

  @media(max-width: 912px) {
    bottom: 17%;
  }


`
export default function ButtonTranslate({isEnglish,setIsEnglish }) {
  const handleToggleTranslate = () => {
    setIsEnglish(!isEnglish)
  }
  return (
    <TranslateWrapper >
        <button 
        className='button_translate'
        onClick={handleToggleTranslate}>
          {isEnglish?'Tiếng Việt':'English'}
        </button>
      </TranslateWrapper>
  )
}
