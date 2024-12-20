import styled from 'styled-components'
import media from "styled-media-query"
import { Link } from 'gatsby'

export const PostItemLink = styled(Link)`
color: var(--texts);
display: flex;
text-decoration: none;

body#grid & {
  background-color: var(--background);
}

&:hover {
  color: var(--highlight);
}`

export const PostItemWrapper = styled.section`
   align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 2rem;
  width: 100%;

  body#grid & {
   border: none;
   padding: 2rem 1rem;
   flex-direction: column;
   justify-content: center;
 }

  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
 `
//${props => props.background ? props.background : "var(--highlight)"}
// se ele não for esse background definimos um padrão
export const PostItemTag = styled.div`
   align-items: center;
   background: ${props => props.background ? props.background : 'var(--highlight)'};
   border-radius: 50%;
   color: var(--white);
   display: flex;
   font-size: 1.3rem;
   font-weight: 700;
   justify-content: center;
   min-height: 90px;
   min-width: 90px;
   text-transform: uppercase;

   ${media.lessThan("large")`
    border-radius: 0;
    font-size: 1.1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .8rem;
  `}  
  &.is-js {
    background: #d6ba32;
    color: #000;
  }

  &.is-misc {
    background: #47650b;
  }

  &.is-dev {
    background: #61728f;
  }

  &.is-svg {
    background: #7d669e;
  }

  &.is-css {
    background: #24809e;
  }

  &.is-jekyll {
    background: #b31917;
  } 

   body#grid & {
      margin-bottom: 1.5rem;
   }
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan("large")`
    margin: 0;
  `}
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
  ${media.lessThan("large")`
    font-size: 1.5rem;
  `}

`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
  ${media.lessThan("large")`
    font-size: 1.1rem;
  `}
`