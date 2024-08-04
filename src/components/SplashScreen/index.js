import React, { useEffect, useState } from 'react';
import * as S from './styled';

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Tempo de exibição do splash screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <S.SplashOverlay className={showSplash ? '' : 'hide'}>
      <S.SplashContent>
        <S.SplashText>Bem-vindo ao Meu Blog!</S.SplashText>
      </S.SplashContent>
    </S.SplashOverlay>
  );
};

export default SplashScreen;