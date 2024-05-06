import styled from 'styled-components'
import media from "styled-media-query"

export const SidebarContainer = styled.aside`
   align-items: center;
   border-right: 1px solid var(--borders);
   border-bottom: 1px solid var(--borders);
   background: var(--mediumBackground);
   display: flex;
   flex-direction: column;
   height: 100vh;
   position: fixed;
   padding: 2rem;
   text-align: center;
   width: 16rem;
   z-index: 2;

   ${media.lessThan("large")`
      align-items: flex-start;
      border: 0;
      height: calc(100% - 85px);
      padding: 0;
      width: 100%;
      z-index: 10;
      transform: ${props =>
         props.$isMenuOpen ? 'translateX(0)' : 'translateX(-100vw)'};
   `}   
`

export const SidebarLinksContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`