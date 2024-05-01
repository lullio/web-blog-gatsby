import styled from "styled-components"
import media from "styled-media-query"
import { Link } from 'gatsby'

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan("large")`
    margin: auto;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1.5rem;
  font-weight: 300;

  ${media.lessThan('large')`
    font-size: 1.8rem;
  `}
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  ${media.lessThan('large')`
    padding: 1rem 0;
  `}
  .active {
    color: var(--highlight);
  }
`

export const MenuLinksLink = styled(Link)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`