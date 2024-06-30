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
        Olá! Sou Felipe Lullio, analista de dados com mais de 12 anos de experiência em tecnologia. Formado em análise e desenvolvimento de sistemas pela FIAP, tenho experiência em desenvolvimento web e marketing digital. Atualmente, estou focado na área de web analytics e em aprimorar minhas habilidades em Python.
      </p>

      <p>
        Acredito no poder dos dados para impulsionar o crescimento das empresas, por isso que me especializei em tecnologias como{" "}
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
        Tenho experiência em desenvolvimento web utilizando HTML, CSS e
        JavaScript. Trabalhei com diversas tecnologias, incluindo NodeJS,
        ExpressJS, Gatsby, React, jQuery, Bootstrap e styled-components. Além
        disso, tenho experiência em SQL com BigQuery e com os bancos de dados
        MongoDB, MySQL e PostgreSQL. Adoro automatizar processos e encontrar
        soluções para os desafios que encontro no dia a dia. Já automatizei uma
        série de tarefas em programas e sistemas Windows, no navegador Chrome, e
        utilizando as APIs dos programas que eu mais uso no dia a dia: Notion,
        Trello, Google Tag Manager, Google Analytics 4, Google Sheets, Google
        Slides e Google Docs.
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
        </a>
        {" "} ou por alguma rede social abaixo.
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
