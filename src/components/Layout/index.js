import * as React from "react"
import { useState, useEffect } from 'react'
// import { useStaticQuery, graphql } from "gatsby"
import Sidebar from "../Sidebar"
import MenuBar from '../MenuBar'
import Profile from '../Profile'

import * as S from "./styled"
import GlobalStyles from "../../styles/global"

import SplashScreen from '../SplashScreen';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simular um carregamento de 3 segundos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <S.LayoutWrapper>
      {loading && <SplashScreen />}
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
