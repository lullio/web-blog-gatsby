
import { createGlobalStyle } from "styled-components";
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
   RESET
	body {
	--borders: #38444d;
	--texts: #8899a6;
	--postColor: #fff;
	--highlight: #1fa1f2;
	--mediumBackground: #192734;
	--white: #fff;
	--black: #222;
}
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
   background: var(--background);
	line-height: 1;
   font-size: 100%;
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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

// * {
// 	box-sizing: border-box;
//  }

//  img {
// 	display: block;
// 	 width: 100%;
// 	 height: auto;
//  }

body.dark {
	--borders: #38444d;
	--texts: #8899a6;
	--postColor: #fff;
	--highlight: #F231A5;
	--highlight: #71C9CE;
	--highlight: #08D9D6;
	--highlight: #40A2E3;
	--highlight: #40A2D8;
	--highlight: #33AFF1;
	--mediumBackground: #0a0c21;
	--background: #030518;
	--white: #fff;
	--black: #222;
 }

 body.light {
	--borders: #dedede;
	--postColor: #111;
	--texts: #555555;
	--highlight: #2665E3;
	--mediumBackground: #f0f0f3;
	--background: #fff;
	--white: #fff;
	--black: #222;
 }

 /* ===================================
    Scrollbar
====================================== */

::-webkit-scrollbar {
width: 12px;
}
::-webkit-scrollbar-track {
width: 12px;
background: white;
border-left: 0 solid white;
border-right: 0 solid white;
}
::-webkit-scrollbar-thumb {
// background: #6c63ff; #8ab9e2 #a1a7dc #b2b2b2 #aaafde #898a95 #838d9b #24309f #c0c2d6
background: #a9abb7;
width: 0;
height: 28%;
transition: .5s ease;
cursor: pointer;
}
 
`
export default GlobalStyles