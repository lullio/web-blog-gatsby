// gatsby-browser.js

// Este arquivo é usado para adicionar funcionalidades no lado do cliente em um site Gatsby.
// Você pode usar este arquivo para adicionar rastreamento de analytics, importar bibliotecas, 
// e executar scripts específicos do cliente.

import { initAnalytics } from './src/utils/analytics';

// Importa a biblioteca "lazysizes" para carregamento de imagens lazy
import "lazysizes";

// Importa o tema "prism-tomorrow" para realce de sintaxe de código
require("prismjs/themes/prism-tomorrow.css");

// Função que é executada na entrada do cliente
export const onClientEntry = () => {
  // Inicializa o rastreamento de analytics
  initAnalytics();
};