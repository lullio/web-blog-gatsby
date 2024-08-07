import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import SocialLinks from "../components/SocialLinks"
import { MainContent } from "../styles/base"

const AboutPage = () => (
  <Layout>
    <Seo
      title="Sobre mim"
      description="Saiba um pouco mais sobre o Felipe Lullio, criador deste blog."
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Olá! Eu sou o Felipe Lullio, um apaixonado por dados e tecnologia com
        mais de 12 anos de experiência na área. Sou formado em análise e
        desenvolvimento de sistemas pela FIAP e, ao longo da minha carreira,
        trabalhei com análise de dados, desenvolvimento web e
        marketing digital.
      </p>

      <h2>Minha Jornada</h2>
      <p>
      Minha paixão pelos dados me levou a especializar-me em ferramentas como {" "}
        <a href="" target="_blank" rel="noopener noreferrer">
          Google Analytics 4
        </a>
        ,{" "}
        <a href="" target="_blank" rel="noopener noreferrer">
          Google Tag Manager
        </a>
        ,{" "}
        <a href="" target="_blank" rel="noopener noreferrer">
          Google Looker Studio
        </a>
        ,{" "}
        <a href="" target="_blank" rel="noopener noreferrer">
          BigQuery
        </a>
        ,{" "}
        <a href="" target="_blank" rel="noopener noreferrer">
          JavaScript
        </a>
        {" e "}
        <a href="" target="_blank" rel="noopener noreferrer">
          Google Apps Script
        </a>
        {", "}
        ajudando as empresas com as tomada de decisões estratégicas
        fundamentadas em dados. Possuo as certificações oficiais da Google e
        tenho ampla experiência na criação de dashboards e relatórios
        personalizados.
      </p>

      <p>
      Minha jornada no desenvolvimento web inclui habilidades em HTML, CSS/SCSS e JavaScript, utilizando frameworks e bibliotecas como NodeJS, ExpressJS, Gatsby, React, jQuery, Bootstrap, styled-components e Versionamento Git. Também tenho experiência com bancos de dados SQL, como MySQL e PostgreSQL, e experiência em NoSQL, com MongoDB.
      </p>
      <p>Sou um grande entusiasta da automação, com habilidades em AutoHotkey, Python, JavaScript, Bash scripting e Selenium. Gosto de encontrar maneiras de tornar meu trabalho mais eficiente automatizando processos repetitivos.</p>
      <p>
        <h4>Como posso te ajudar?</h4>
        <ol>
            <li>
              <strong>Rastreamento Completo e Análise de Dados:</strong>
              <p>Conhecer o público do seu site é essencial para tomar decisões estratégicas e melhorar continuamente o seu produto ou serviço. Com um rastreamento completo e dashboards personalizados, você pode:
              <ol>
                <li>
                <strong>Obter Insights Valiosos:</strong> Descubra quem são seus visitantes, como eles navegam pelo seu site, e quais páginas e produtos são mais populares.
                </li>
                <li>
                <strong>Visualizar Dados de Forma Clara e Atraente:</strong> Dashboards personalizados não só apresentam os dados de maneira fácil de entender, mas também tornam a análise mais prazerosa e intuitiva.
                </li>
                <li>
                <strong>Identificar Oportunidades de Melhoria:</strong> Use os dados para identificar pontos fracos no seu site e implementar melhorias que podem aumentar a satisfação do usuário e as conversões.
                </li>
                <li>
                <strong>Tomar Decisões Baseadas em Dados:</strong> Ao invés de confiar apenas na intuição, baseie suas decisões em dados concretos, aumentando a eficácia das suas estratégias de marketing e desenvolvimento.
                </li>
                <li>
                <strong>Monitorar o Desempenho em Tempo Real:</strong> Acompanhe métricas importantes em tempo real, permitindo que você responda rapidamente a mudanças e tendências.
                </li>
              </ol>
              </p>
            </li>
          <li>
          <strong>Automação de processos</strong>: Libere seu tempo para focar no que realmente importa.
            Saiba mais em{" "}
            <a
              href="https://automatizator.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              automatizator.com.br
            </a>
            .
          </li>
          <li>
            <strong>Desenvolvimento Web</strong>: Crie sites impactantes que convertem, já com toda a análise de dados configurada. Trabalho com sites em WordPress e sites personalizados.
          </li>
        </ol>
      </p>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através do{" "}
        <a
          href="https://wa.me/5511991486309?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20blog.%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20com%20voc%C3%AA."
          target="_blank"
          rel="noopener noreferrer"
        >
          Whatsapp
        </a>
        {", "}
        <a
          href="https://teams.microsoft.com/l/chat/0/0?users=felipe@lullio.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Microsoft Teams
        </a>{" "}
        ou por alguma rede social abaixo.
      </p>
      {/* <div class="button-container">
        <div class="button1">BUTTON1</div>
        <div class="button2">BUTTON2</div>
      </div> */}
      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage
