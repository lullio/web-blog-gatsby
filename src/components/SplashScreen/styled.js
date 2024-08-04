import styled, { createGlobalStyle }  from 'styled-components'

export const SplashOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Fundo escuro com transparência */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.5s ease-out;
  &.hide {
    animation: fadeOut 0.5s ease-out;
  }
`;

export const SplashContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px; /* Bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Sombra */
  text-align: center;
  max-width: 80%;
  animation: slideUp 0.5s ease-out;
`;

export const SplashText = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
`;

// Animações
const fadeIn = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const fadeOut = `
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;

const slideUp = `
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${fadeIn}
  ${fadeOut}
  ${slideUp}
`;