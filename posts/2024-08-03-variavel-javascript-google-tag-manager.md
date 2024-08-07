---
date: 2024-08-03 22:00:55
title: Guia Completo de Variável JavaScript no Google Tag Manager(GTM)
description: Aprenda a usar variáveis JavaScript no GTM para personalizar e otimizar seu rastreamento de dados. Guia passo a passo com exemplos práticos e diversas dicas.
category: GTM
background: "#4385f5"
image: "/assets/img/desert.jpg"
---

## Domine as Variáveis JavaScript no Google Tag Manager: Guia Completo

![Imagem Variável JavaScript no GTM](/assets/img/gtm/gtm-variavel-javascript.png)

Vamos falar sobre uma das funcionalidades mais interessantes (e talvez uma das mais confusas) do Google Tag Manager: a variável JavaScript.  
Já se viu tentando rodar um `document.querySelector('.class').textContent` na variável JavaScript e se perguntando por que não funcionou? Fique tranquilo, você não está sozinho!  
Vamos explorar juntos e ver tudo que podemos fazer! 

Se você ainda não conhece o **Google Tag Manager (GTM)**, essa ferramenta gratuita e poderosa da Google facilita o gerenciamento de tags e pixels no seu site. [Descubra mais sobre o GTM e como ele funciona aqui](/o-que-e-o-google-tag-manager-gtm/). A variável JavaScript é uma funcionalidade muito importante do GTM.

## O que é a Variável JavaScript no GTM?
Talvez você já tenha visto algo sobre isso na <a href="https://support.google.com/tagmanager/answer/7683362?hl=pt-BR&utm_source=felipe-lullio" target="_blank">documentação oficial do Google</a> e em outros posts, mas a verdade é que ainda deixa muitas dúvidas. Então, o que você consegue fazer com a variável JavaScript? 
Basicamente, **ela permite que você recupere o valor de uma variável global JavaScript**, como o título da página(`document.title`) ou a URL(`document.URL`). Simples, não?

## Não confunda com a variável "JavaScript personalizado"
É fácil confundir a **Variável JavaScript** com a variável **JavaScript personalizado**. A diferença principal é que a variável JavaScript busca o valor de uma variável global, enquanto **a variável "JavaScript Personalizado" permite executar códigos JavaScript mais complexos e personalizados**, ou até mesmo criar funções simples, como transformar textos e manipular dados.

Um exemplo prático dessa diferença surge quando a variável incorporada do GTM "Click Text" não captura o texto desejado, isso acontece muitas vezes quando o clique ocorre em elementos internos ao link, como tags `<img>` ou `<svg>`. Imagine que você tenha um botão com uma imagem com uma estrutura HTML parecida com a seguinte:

```html
<button>
  <img src="/icone-produto.svg" alt="Ícone de Produto">
  Ver Produtos
</button>
```

No caso do clique ocorrer na imagem do botão, pode ser que a variável "Click Text" do GTM retorne uma string vazia ou `undefined`. Para resolver isso, poderíamos criar uma variável "JavaScript Personalizado" com o seguinte código:

```js
function() {
  return {{Click Element}}.closest('a, button').textContent;
}
```

**Este código faz o seguinte**:

1. `{{Click Element}}`: Variável incorporada do GTM que retorna o elemento HTML clicado(no caso, a imagem `<img>`)
2. `.closest('a, button')`: Encontra o elemento `<a>` ou `<button>` mais próximo da imagem clicada(ou de qualquer outro elemento clicado).
3. `.textContent`: Retorna o texto completo do elemento `<a>`, ou seja, o texto "Ver Produtos".


## Exemplos Práticos de Variável JavaScript ou JavaScript Variable
Vamos a alguns exemplos práticos? Um uso muito comum é capturar o título da página. Surpreendentemente, o GTM ainda não oferece uma variável incorporada para isso (quem sabe, "`Page Title`" no futuro? 😉). Mas não se preocupe, a solução é muito simples: basta configurar a variável JavaScript com o valor `document.title` e pronto!

![Imagem Variável JavaScript no GTM](/assets/img/gtm/gtm-variavel-javascript-capturar-titulo-da-pagina.png)

1. Acesse o GTM(https://tagmanager.google.com/#/home) e abra o seu container.
2. Na lateral esquerda do GTM, clique em "Variáveis" ou "Variables".
3. Em "Variáveis definidas pelo usuário" ou "User-Defined Variables", clique no botão "Nova" / "New".
4. Escolha o tipo de variável: "Variável JavaScript" ou "JavaScript Variable".
5. No campo "Nome da variável global" ou "Global Variable Name", digite `document.title` 
6. Expanda a guia "Valor do formato" ou "Format Value" e você poderá converter o título da página para minúsculo ou maiúsculo sem precisar adicionar no código da variável(`.toLowerCase()` ou `.toUpperCase()` )
7. Clique no botão "Salvar".
![Transformar texto em minúscula GTM](/assets/img/gtm/gtm-variavel-javascript-transformar-texto.png)


Outro exemplo interessante é usar `navigator.language` para descobrir o idioma do navegador do usuário, ou `document.URL` para obter a URL completa da página atual. Legal, né?

## Outros Casos de Uso

Em alguns sites, especialmente de e-commerce, é comum ter variáveis globais contendo informações importantes, como:
- **Dados do usuário**: ID do usuário, nome, email, etc.
- **Dados de produtos**: Nome, categoria, cor, preço, etc.

Segue alguns exemplos de variáveis globais que podem estar disponíveis para diferentes tipos de sites:

**Sites Magento**:
-  `window.checkout`
-  `window.customerData`
-  `window.productData`
**Sites WordPress**
-  `window.wcCart`
-  `window.wcCheckout`
-  `window.wpData`
**Sites Drupal**
-  `window.drupalSettings`
-  `window.drupalSettings.user.uid`

### Outras Fontes de Armazenamento
Se você não encontrar nada nas variáveis globais, há uma boa chance de que você encontre algo útil no `window.sessionStorage` ou `window.localStorage` ou IndexedDB que é uma API de armazenamento de dados em grande escala.(`indexedDB.databases().then(dbs => console.log(dbs));`) ou Cache Storage que é uma API para armazenamento de recursos de rede, como solicitações e respostas HTTP(`caches.keys().then(keys => console.log(keys));`) ou até mesmo nos cookies(`document.cookie`). Essas áreas são frequentemente usadas para armazenar dados temporários ou permanentes(localStorage e IndexedDB) que podem ser úteis para suas necessidades de rastreamento e análise.

## Testando sua Variável JavaScript no GTM
Depois de criar a variável JavaScript é hora de testê-lá. 
1. **Ative o Modo de Visualização**: No canto superior direito do GTM, clique no botão "Visualizar" (ou "Preview" se o idioma da sua conta Google for inglês).
   1. ![Botão Preview do GTM](/assets/img/gtm/gtm-preview-changes.png)
2. **Conecte-se ao seu Site**: Insira a URL do seu site e clique em "Conectar" (ou "Connect").
   1. ![Modo Preview/Visualizar do GTM](/assets/img/gtm/gtm-connect-preview.png)
3. **Selecione um Evento**: Após o carregamento do site, volte para a aba do navegador do "Tag Assistant" e selecione um evento na lista à esquerda.
   1. ![Eventos modo Preview do GTM](/assets/img/gtm/gtm-preview-mode-events.png)
4. **Acesse a Aba de Variáveis**: Clique na aba "Variáveis" (ou "Variables")
   1. ![Eventos modo Preview do GTM guia Variables](/assets/img/gtm/gtm-preview-mode-variables.png)
5. **Encontre sua Variável**: Utilize o atalho "CTRL+F" (ou "CMD+F" em Macs) para buscar o nome da sua variável JavaScript. No nosso exemplo, seria "JS - Título da Página".
   1. ![Eventos modo Preview do GTM guia Variables](/assets/img/gtm/gtm-preview-mode-variable-page-title.png)

Se tudo estiver correto, você verá o título da página em letras minúsculas.

## Utilizando a Variável JavaScript

Agora que sua variável está funcionando, você pode usá-la em tags ou gatilhos do seu container GTM. Por exemplo, para enviar o título da página para o Google Analytics 4, edite a tag de configuração gtag e defina o parâmetro `page_title` com o valor da variável JavaScript `{{JS - Título da Página}}`.  

Repare que para invocar uma variável GTM, basta colocá-la entre chaves duplas: `{{nome da variável}}`.

![Eventos modo Preview do GTM guia Variables](/assets/img/gtm/gtm-gtag-custom-variable-page-title.png)

**Observação:**
O parâmetro `page_title`, já é coletado automaticamente pelo Google Analytics 4 em todos os eventos. Ao defini-lo na configuração gtag, você estará substituindo o valor padrão capturado pelo GA4. A única diferença entre o nosso `{{JS - Título da Página}}` e o `page_title` do GA4, é que a nossa versão estará em letras minúsculas. <a href="https://support.google.com/analytics/answer/9234069?hl=en&utm_source=felipe-lullio" target="_blank">Saiba mais sobre os eventos e parâmetros coletados automaticamente.</a>


Se você não deseja sobrescrever o valor padrão do GA4, utilize um parâmetro personalizado, como `custom_page_title`, para armazenar o título da página em minúsculas, assim você poderá usar as duas opções no GA4. [Saiba mais sobre parâmetros personalizados e dimensões personalizadas aqui](/).

## Exemplos Práticos de Variáveis JavaScript
Para te ajudar a aproveitar ao máximo a variável JavaScript no GTM, confira alguns outros exemplos práticos que podem ser úteis:

### Localização e Informações da Página
- `document.URL` ou `window.location.href` - URL completa da página.
- `document.title` - Título da página.
- `document.location.href` - URL completa da página (similar a document.URL).
- `document.location.pathname` - Caminho da URL.
- `document.location.hostname` - Nome do host (domínio).
- `document.location.protocol` - Protocolo (http, https).
- `document.location.search` - Query string.
- `document.referrer` - URL da página de referência(página anterior).
- `document.domain` - Domínio da página.

### Dispositivo
- `navigator.userAgent` - Informação sobre o navegador.
  - retorna uma `String`, exemplo: "*Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36*"
- `navigator.platform` - Plataforma do dispositivo(exemplo: "*Win32*").
- `navigator.language` - Idioma preferido do usuário. (exemplo: "pt-BR")
- `navigator.languages` - Lista de idiomas preferidos do usuário.
  - retorna um `Array`, exemplo: *['pt-BR', 'en-US', 'pt', 'en']*
- `navigator.cookieEnabled` - Se os cookies estão habilitados.
  - retorna um `Boolean`, exemplo: *true*
- `navigator.onLine` - Status da conexão com a internet.
  - retorna um `Boolean`, exemplo: *true*
- `navigator.hardwareConcurrency` - Número de núcleos de hardware.
  - retorna um `Number`, exemplo: *16*
- `navigator.maxTouchPoints` - Número máximo de pontos de toque suportados pelo dispositivo.
  - retorna um `Number`, exemplo: *0*
- `navigator.vendor` - Vendor do navegador.
  - retorna uma `String`, exemplo "Google Inc."
- `navigator.product` - Produto do navegador.
  - retorna uma `String`, exemplo "Gecko"
- `navigator.appName` - Nome do aplicativo (navegador).
  - retorna uma `String`, exemplo "Metscape"
- `navigator.appVersion` - Versão do navegador.
  - retorna uma `String`, exemplo "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
- `navigator.deviceMemory` - Memória do dispositivo em gigabytes.
  - retorna um `Number`, exemplo: *8*
- `navigator.connection.effectiveType` - Tipo de conexão de rede (4g, 3g, etc).
  - retorna uma `String`, exemplo: "4g"

### Informações da Tela
- `screen.width` - Largura da tela.
- `screen.height` - Altura da tela.
- `screen.availWidth` - Largura disponível da tela.
- `screen.availHeight` - Altura disponível da tela.
- `screen.colorDepth` - Profundidade de cor da tela.
- `screen.orientation.type` - Tipo de orientação da tela(landscape, portrait).
  
### Informações da Janela
- `window.innerWidth` - Largura interna da janela.
- `window.innerHeight` - Altura interna da janela.
- `window.outerWidth` - Largura externa da janela.
- `window.outerHeight` - Altura externa da janela.
- `window.scrollX` - Posição horizontal do scroll.
- `window.scrollY` - Posição vertical do scroll.

### Histórico do Navegador
- `history.length` - Número de entradas no histórico.

### Redes
- `navigator.connection.effectiveType` - Tipo de conexão de rede (4g, 3g, etc).
- `navigator.connection.downlink` - Velocidade de download em Mbps.
- `navigator.connection.rtt` - Latência da conexão em ms.

### Dados de Performance
`performance.now()` - Tempo de alta resolução (em milissegundos) desde que a página foi carregada.
`performance.timing` - Métricas detalhadas de tempo de navegação(retorna um objeto com os dados). Exemplo:
   ```js
   {
   "connectStart": 1722715707684,
   "navigationStart": 1722715707681,
   "secureConnectionStart": 0,
   "fetchStart": 1722715707684,
   "domContentLoadedEventStart": 1722715707725,
   "responseStart": 1722715707708,
   "domInteractive": 1722715707725,
   "domainLookupEnd": 1722715707684,
   "responseEnd": 1722715707710,
   "redirectStart": 0,
   "requestStart": 1722715707684,
   "unloadEventEnd": 1722715707710,
   "unloadEventStart": 1722715707710,
   "domLoading": 1722715707712,
   "domComplete": 1722715709617,
   "domainLookupStart": 1722715707684,
   "loadEventStart": 1722715709618,
   "domContentLoadedEventEnd": 1722715707725,
   "loadEventEnd": 1722715709619,
   "redirectEnd": 0,
   "connectEnd": 1722715707684
   }
   ```
`performance.memory` - Uso de memória da página.
`performance.navigation.type` - Tipo de navegação (reload, back, forward).


### Document Ready State
- `document.readyState` - Estado de prontidão do documento (loading, interactive, complete).


### Viewport
- `window.visualViewport.width` - Largura da viewport.
- `window.visualViewport.height` - Altura da viewport.
- `window.visualViewport.scale` - Escala da viewport.

### Document Attributes
- `document.documentElement.lang` - Idioma do documento.
- `document.charset` - Conjunto de caracteres do documento.
  
### Navegador
- `navigator.vendor` - Vendor do navegador.
- `navigator.product` - Produto do navegador.
- `navigator.appName` - Nome do aplicativo (navegador).
- `navigator.appVersion` - Versão do navegador.
- `navigator.productSub` - Versão do engine de JavaScript.

## Conclusão
A variável JavaScript no GTM oferece um método direto e fácil para acessar dados essenciais de variáveis globais JavaScript. Ao utilizá-la corretamente, você pode simplificar suas análises e melhorar a precisão dos dados coletados. 

Tem alguma dúvida ou outro exemplo prático? Compartilhe nos comentários abaixo como você está usando a Variável JavaScript!