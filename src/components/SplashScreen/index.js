import React from 'react';
// import { createGlobalStyle } from 'styled-components';
import { SplashContainer, SplashContent } from './styled';

// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     overflow: hidden;
//     background: #310404;
//     font-family: 'Roboto Condensed', sans-serif;
//   }
// `;

const SplashScreen = () => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <SplashContainer>
        <SplashContent>
          <h2 className="frame-1">Descubra Novidades</h2>
          <h2 className="frame-2">Baixe nosso app!</h2>
          <h2 className="frame-3">Fique por dentro das atualizações</h2>
          <img className="download-image" src="/assets/img/test.png" alt="Download App" />
        </SplashContent>
      </SplashContainer>
    </>
  );
};

export default SplashScreen;
