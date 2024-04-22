
import { createGlobalStyle } from "styled-components";
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
   RESET
*/
const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
   background: #16202c;
	line-height: 1;
   font-size: 100%;
   font-family: -apple-system, -apple-FileSystem; BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

body {
	--borders: #38444d;
	--texts: #8899a6;
	--postColor: #fff;
	--highlight: #1fa1f2;
	--mediumBackground: #192734;
	--white: #fff;
	--black: #222;
}
body.dark {
	--borders: #38444d;
	--texts: #8899a6;
	--postColor: #fff;
	--highlight: #F231A5;
	--mediumBackground: #0a0c21;
	--background: #030518;
	--white: #fff;
	--black: #222;
 }

 body.light {
	--borders: #dedede;
	--postColor: #111;
	--texts: #555555;
	--highlight: #F231A5;
	--mediumBackground: #f0f0f3;
	--background: #fff;
	--white: #fff;
	--black: #222;
 }
`
export default GlobalStyles