// gatsby-ssr.js

// Este arquivo é usado para personalizar o comportamento do servidor durante a renderização
// de páginas no lado do servidor (SSR) no Gatsby. Você pode usar este arquivo para modificar
// o HTML gerado, adicionar scripts ou manipular componentes head.

const React = require('react'); // Importa React para usar JSX
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  // Obtém todos os componentes head
  const headComponents = getHeadComponents();

  // Ordena os componentes para colocar as tags Helmet primeiro
  const sortedComponents = headComponents.sort((a, b) => {
    if (a.props && a.props["data-react-helmet"]) {
      return -1; // Coloca Helmet tags no início
    }
    return 1;
  });

  // Substitui os componentes head com os componentes ordenados
  replaceHeadComponents(sortedComponents);
};
// Adiciona o `dataLayer` para Google Tag Manager
exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      key="dataLayer"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
        `,
      }}
    />,
  ]);
};