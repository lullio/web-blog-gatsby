import React from 'react'

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Project from '../components/Project'

const projectsList = [
  {
    title: 'Blog Analytics (Este blog)',
    link: 'https://projetos.lullio.com.br/blog-analytics',
    description: 'Desenvolvi este blog com as seguintes tecnologias: React, Gatsby, GraphQL, Styled Components, Algolia, Netlify, Decap CMS(aka NetlifyCMS).'
  },
  {
    title: 'Servidor Raspberry Pi',
    link: 'https://projetos.lullio.com.br/servidor-linux',
    description:
      'Configurei um servidor Linux completo em um Raspberry Pi, com Apache, NGINX, servidor de arquivos, servidor DNS para bloqueio de propagandas e hospedagem de sites com WordPress e Node.js.'
  },
  {
    title: 'Lista de Tarefas',
    link: 'https://projetos.lullio.com.br/lista-de-tarefas',
    description:
      'Desenvolvi essa aplicação web para operações CRUD utilizando MongoDB, Node.js e Express.js. O backend(node.js e express.js) é hospedado em meu próprio servidor caseiro Raspberry Pi. user: felipe | pass: javascript'
  },
  {
    title: 'Gerenciador de Cursos',
    link: 'https://projetos.lullio.com.br/gerenciador-de-cursos-e-controle-de-video',
    description:
      'Desenvolvi um programa desktop para automatizar interações com vídeos e gerenciar uma lista de cursos. Usei Autohotkey e JavaScript para criar a primeira versão do programa. A segunda versão do programa desenvolvi em Python e JavaScript com funcionalidades adicionais.'
  },
  {
    title: 'Gerenciador de Tarefas e Anotações',
    link: 'https://projetos.lullio.com.br/notion-api',
    description: 'Desenvolvi um programa desktop para automatizar e gerenciar anotações utilizando AutoHotkey e JavaScript. O programa integra a API do Notion como backend, e tem uma interface web e uma GUI criada com AutoHotkey'
  },
  {
    title: 'Gerenciador do GTM(Google Tag Manager)',
    link: 'https://projetos.lullio.com.br/programas',
    description:
      'Desenvolvi um programa desktop(Python, JavaScript, Autohotkey) e um site(Google Apps Script, HTML5/CSS3/JS) para automatizar o gerenciamento do GTM, integrando a API do GTM para automatizar a criação e gestão de tags, triggers, variáveis e mais. (BETA)'
  },
  {
    title: 'Gerenciador do GA4(Google Analytics 4)',
    link: 'https://projetos.lullio.com.br/programas',
    description:
      'Desenvolvi um programa desktop(Python, JavaScript, Autohotkey) e um site(Google Apps Script, HTML5/CSS3/JS) para automatizar o gerenciamento do GA4, integrando Data API e Admin API para automatizar o gerenciamento de contas, propriedades, fluxo de dados, configurações e também a criação e automatização de relatórios. (BETA)'
  },
  {
    title: 'Expansor de Textos',
    link: 'https://projetos.lullio.com.br/programas',
    description:
      'Desenvolvi um programa desktop para automatizar a expansão de textos/códigos/imagens e mais.'
  },
  {
    title: 'Gerenciador de Documentações',
    link: 'https://projetos.lullio.com.br/gerenciador-de-documentacoes',
    description:
      'Desenvolvi um programa desktop para automatizar a pesquisa, inserção gerenciamento de documentações/links.'
  },
  {
    title: 'Em Desenvolvimento',
    link: '',
    description: 'Estou desenvolvendo um programa completo para automatizar análise de vídeos, imagens e qualquer tipo de arquivo utilizando a inteligência artificial do ChatGPT e GEMINI. Em seguida pretendo integrar o programa com a API do GA4 para automatizar a análise de dados e geração de insights.'
  },
  {
    title: 'Automatizator - Automatização de Tarefas',
    link: 'https://automatizator.com.br/',
    description: 'Website desenvolvido com HTML5, CSS3 e JavaScript'
  }
]

const ProjetosPage = () => (
  <Layout>
   <Seo title="projetos felipe"/>
   <Seo
      title="Projetos | Felipe Lullio"
      description="Projetos pessoais que desenvolvi."
      openGraph={{
        images: [
          {
            url: '/assets/img/projetos-cover.png',
            width: 1200,
            height: 630,
            alt: 'Felipe Lullio Projetos'
          }
        ]
      }}
    />
    {projectsList.map(({ title, description, link }, i) => (
      <Project key={i} title={title} description={description} link={link} />
    ))}
    </Layout>
)

export default ProjetosPage
