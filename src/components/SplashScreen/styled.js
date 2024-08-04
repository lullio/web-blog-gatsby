import styled from 'styled-components';

export const SplashContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999; /* Ajuste conforme necessário */
  background: radial-gradient(circle, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.4));
`;

export const SplashContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
   transform: translate(-50%, -50%); /* Centraliza o conteúdo */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    position: absolute;
    width: 50%;
    font-size: calc(1.5rem + 4vw); /* Ajuste o tamanho conforme necessário */
    color: transparent;
    background: rgba(255, 255, 255, 0.2); /* Fundo com leve opacidade */
    padding: 10px;
    border-radius: 10px;
    animation: blurFadeInOut 3s ease-in forwards;
  }

  .frame-1 {
    animation-delay: 0s;
  }

  .frame-2 {
    animation-delay: 3s;
  }

  .frame-3 {
    animation-delay: 6s;
  }

  .frame-4 {
    display: none; /* Não usar, pois são apenas 3 frames */
  }

  .frame-5 {
    display: none; /* Não usar, pois são apenas 3 frames */
  }

  .download-image {
    position: absolute;
    bottom: 20%;
    width: 60%;
    max-width: 300px;
    animation: fadeInUp 2s ease-in 6s forwards; /* Iniciar após o último texto */
  }

  @keyframes blurFadeInOut {
    0% {
      opacity: 0;
      text-shadow: 0 0 40px #fff;
      transform: scale(0.9);
    }
    20%, 75% {
      opacity: 1;
      text-shadow: 0 0 1px #fff;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      text-shadow: 0 0 50px #fff;
      transform: scale(0);
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
