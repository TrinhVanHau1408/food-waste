import React from 'react'
import { styled } from 'styled-components'
import { colors } from '../../constants/colors'

const FooterWrapper = styled.div`
  height: 50px;
  background-color: ${colors.primary}
`
export default function footer() {
  return (
    <FooterWrapper>footer</FooterWrapper>
  )
}
