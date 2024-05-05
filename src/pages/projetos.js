import React from 'react'

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Project from '../components/Project'

const projectsList = [
  {
    title: 'Blog Analytics Nerd',
    link: 'https://blog.lullio.com.br',
    description: 'Aplicação Web desenvolvida com React, Gatsby, GraphQL, Styled Components, Algolia, NetlifyCMS, Netlify.'
  },
  {
    title: 'Automatizator - Automatização de Tarefas',
    link: 'https://automatizator.com.br/',
    description: 'Website desenvolvido com HTML5, CSS3 e JavaScript'
  },
  {
    title: 'Lista de Tarefas',
    link: 'https://projetos.lullio.com.br/lista-de-tarefas',
    description:
      'Aplicação web simples para operações C.R.U.D com MongoDB, NodeJS, ExpressJS'
  },
  {
    title: 'Gerenciador de Projetos',
    link: 'https://projetos.lullio.com.br/gerenciador-de-projetos-e-controle-de-video',
    description:
      'Programa Desktop desenvolvido para automatizar interações com vídeos e ter fácil acesso aos seus projetos.'
  },
  {
    title: 'Gerenciador de Tarefas usando a API do Notion',
    link: 'https://projetos.lullio.com.br/notion-api',
    description: 'Programa Desktop desenvolvido para automatizar a inserção de anotações e tarefas para o Notion.'
  },
  {
    title: 'Gerenciador do GTM',
    link: 'https://projetos.lullio.com.br/programas',
    description:
      'Programa desktop para automatizar o gerenciamento do GTM.'
  },
  {
    title: 'Gerenciador do GA4',
    link: 'https://projetos.lullio.com.br/programas',
    description:
      'Programa desktop para automatizar o gerenciamento do GA4.'
  },
  {
    title: 'Expansor de Textos',
    link: 'https://projetos.lullio.com.br/programas',
    description:
      'Programa Desktop para automatizar a inserção de textos, códigos, imagens e muito mais.'
  },
  {
    title: 'Gerenciador de Documentações',
    link: 'https://projetos.lullio.com.br/gerenciador-de-documentacoes',
    description:
      'Programa Desktop para automatizar a pesquisa e inserção de documentações, recursos úteis.'
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
