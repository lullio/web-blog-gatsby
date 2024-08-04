---
date: 2024-07-27 20:25:33
title: Entendendo a Estrutura do Google Tag Manager
description: Guia completo para entender a hierarquia do GTM, incluindo contas, containers, tags, triggers e variáveis, além de boas práticas para manter seu rastreamento eficiente e organizado.
category: GTM
background: "#4385f5"
image: "/assets/img/desert.jpg"
---

## Estrutura do Google Tag Manager

O Google Tag Manager (GTM) é uma ferramenta gratuita e robusta da Google, que permite gerenciar e adicionar tags de forma centralizada em seus sites e aplicativos. Compreender sua estrutura é fundamental para otimizar o rastreamento e a coleta de dados. Neste guia, exploraremos a estrutura do GTM e como os componentes se relacionam.

## A Hierarquia do GTM

A estrutura do GTM segue uma hierarquia clara, composta por três níveis principais:
![Estrutura Hierarquica do GTM](/assets/img/gtm/gtm-estrutura-do-google-tag-manager-conta-container-tags.png)

### 1. Conta: 
- **O que é:** A conta é onde você organiza seus projetos e gerencia todos os seus containers. É a camada/instância mais alta na hierarquia do GTM.
- **Recomendação**: Uma única conta pode ter vários containers, permitindo a organização de diferentes projetos/sites.
- **Limite:** Você pode criar até **400 contas** GTM em uma conta Google. (Conta GTM é diferente da sua conta Google, isso pode confundir algumas pessoas.)

### 2. Container
- **O que é:** O container é onde todas as suas tags e rastreamentos são armazenados. Cada container geralmente está associado a um site ou aplicativo específico.
- Cada container geralmente está associado a um site ou aplicativo específico. Por exemplo, para o site lullio.com.br eu tenho o GTM-2332X5, e para o site analyticsnerd.com.br eu tenho o GTM-434343.
- **Recomendação:** É recomendado ter um container GTM por site/aplicativo. Por exemplo, você pode ter uma conta GTM chamada "Sites Ecommerce" com um container diferente para cada um dos seus sites. Usar o mesmo container GTM para sites diferentes não é uma boa prática.
- **Limite**: Uma conta GTM pode ter até **500 containers**. O tamanho máximo de um container é **200KB**. Quanto mais tags, triggers e variáveis você adicionar, maior será o tamanho do container e consequentemente o carregamento dele. Quando você atingir 70% do tamanho limite de 200KB, o GTM colocará um aviso no topo da página.

### 3. Tags
- **O que é**: As tags são fragmentos de código que coletam dados e os enviam para ferramentas como GA4, Meta, Amplitude, etc.
- O container serve para armazenar todo o rastreamento, ou seja, todas as suas tags, uma tag representa um fragmento de código que coleta dados e os envia para uma ferramenta(ex: GA4, Meta, Amplitude, etc)
- **Exemplos de tags**:
  - Pixel de conversão do Facebook
  - Tag para rastreamento de visualização de página do Google Analytics 4
  - Tag para rastreamento de compra do Google Analytics 4
  - Tag para rastreamento de envio de formulário do Google Analytics 4

### Acionadores (Triggers) e Variáveis (Variables)

Para que uma tag seja disparada no momento certo e com os dados corretos, são necessários dois componentes adicionais:

**Triggers**

- **O que é**: Definem as condições em que uma tag será disparada.
- **Exemplo de triggers**:
  - Visualização de página
  - Clique em um botão
  - Tempo decorrido na página
  - Rolagem de página(scroll)

**Variables** 

- **O que é**: Armazenam valores dinâmicos que podem ser utilizados nas tags e triggers.
- **Exemplo de variáveis**:
  - URL da página atual
  - Título da página atual
  - Texto do botão clicado
  - ID do formulário enviado

## Exemplo Prático: Rastreamento de Eventos de Clique em um Botão

Imagine que você deseja rastrear quando um usuário clica no botão "Comprar" em seu site. Para isso, você criaria:

- **Uma tag**: Configurada para enviar um evento de clique/compra para o Google Analytics 4.
- **Um trigger**: Definido para disparar a tag quando o usuário clicar no botão específico (por exemplo, utilizando um seletor CSS `.buy-button`).
- **Uma variável**: Para capturar o texto do botão clicado e enviar essa informação para o Google Analytics 4, você pode usar a variável incorporada do GTM "`Click Text`").

## Outras Áreas Importantes: Workspaces, Templates, Versões e Administrador
Além dos componentes principais, o GTM também oferece:

- **Workspaces**: Permitem que múltiplos usuários trabalhem em mudanças simultaneamente.
  - **Limite**: Na versão gratuita do GTM você pode criar até 3 workspaces, enquanto na versão 360 é ilimitado.
- **Templates**: Tags personalizadas criadas pela comunidade
- **Versões**: Acompanham as mudanças e facilitam a reversão de alterações.
- **Administrador**: Onde você gerencia permissões, configurações da conta e containers.


## Boas Práticas para a Estrutura do GTM
- **Organização:** Mantenha uma estrutura clara e lógica para seus containers e tags, utilizando nomes descritivos e pastas para organizar suas tags, triggers e variáveis.
- **Teste:** Sempre teste suas tags usando o modo Preview do GTM antes de publicá-las para produção.

### Conclusão

Entender a estrutura do Google Tag Manager é importante para aproveitar ao máximo suas funcionalidades e manter-se organizado. Ao organizar suas tags, triggers e variáveis de maneira clara, você economizará tempo e recursos na manutenção das suas tags.