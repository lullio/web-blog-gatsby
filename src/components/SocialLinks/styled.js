import styled from "styled-components"
import media from "styled-media-query"
// import { Link } from 'gatsby'

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;

  ${media.lessThan("large")`
    order: 2;
    margin: 0 0 1rem;
  `}  

`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const SocialLinksItem = styled.li`
  font-size: 12px;
  display: inline-block;
  // margin-right: 5px;
  margin-left: 5px;
  list-style: none;
  `
  

export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);

  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`