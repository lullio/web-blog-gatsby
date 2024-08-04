import * as React from "react";
import { useState, useEffect } from 'react';
import Sidebar from "../Sidebar";
import MenuBar from '../MenuBar';
import Profile from '../Profile';
import * as S from "./styled";
import GlobalStyles from "../../styles/global";
import SplashScreen from '../SplashScreen';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const splashScreenVisited = sessionStorage.getItem('splashScreenVisited');
  //   if (!splashScreenVisited) {
  //     // Exibe o splash screen se a flag não estiver definida
  //     sessionStorage.setItem('splashScreenVisited', 'true');
  //     setLoading(true);
  //     const timer = setTimeout(() => {
  //       setLoading(false);
  //     }, 11000); // Duração do splash screen
  //     return () => clearTimeout(timer);
  //   } else {
  //     // Se a flag estiver definida, não exibe o splash screen
  //     setLoading(false);
  //   }
  // }, []);

  return (
    <S.LayoutWrapper>
      {/* {loading && <SplashScreen />} */}
      <Profile isMobileHeader={true} />
      <GlobalStyles />
      <Sidebar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </S.LayoutWrapper>
  );
};

export default Layout;
