import * as React from "react"
import { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Sidebar from "../Sidebar"
import MenuBar from '../MenuBar'
import Profile from '../Profile'

import * as S from "./styled"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <S.LayoutWrapper>
      <Profile
      isMobileHeader={true}
      />
      <GlobalStyles/>
        <Sidebar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        <S.LayoutMain>{children}</S.LayoutMain>
        <MenuBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </S.LayoutWrapper>
  )
}
export default Layout
