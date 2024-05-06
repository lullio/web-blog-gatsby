import styled from 'styled-components'
import media from "styled-media-query"
import { Link } from 'gatsby'

export const ProfileWrapper = styled.section`
   display: ${props => (props.$isMobileHeader ? 'none' : 'flex')};
   color: var(--texts);
   flex-direction: column;

   ${media.lessThan('large')`
    align-items: flex-start;
    display: ${props => (props.$isMobileHeader ? 'flex' : 'none')};
    background: var(--mediumBackground);
    border-bottom: 1px solid var(--borders);
    padding: 0.9rem 0.8rem 0.7rem 0.8rem;
    width: 100vw;
    position: fixed;
    z-index: 10;
  `}
`

export const ProfileLink = styled(Link)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  } 

  ${media.lessThan("large")`
    display: flex;
    text-align: left;
  `}
`

export const ProfileAuthor = styled.h1`
  font-size: 1.8rem;
  margin: 0.5rem auto 1.5rem;

  ${media.lessThan("large")`
    font-size: 1.6rem;
    margin: 0 0 0 10px;
  `}  
`

export const ProfilePosition = styled.small`
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.4;
  line-break: strict;
  display: block;

  ${media.lessThan("large")`
    font-size: 1.2rem;
    margin-top: 0.2rem;
  `}  
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan("large")`
    display: none;
  `}  
`