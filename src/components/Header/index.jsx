import React from 'react'
import {Logo, HeaderContainer, RightContainer} from './styles'

const Header = ({children}) => (
  <HeaderContainer>
    <a href="/">
      <Logo title="Book Club logo" />
    </a>
    <RightContainer>
    {children}
    </RightContainer>
  </HeaderContainer>
)

export default Header