import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
  transition: background 0.5s;


  ${media.lessThan("large")`
    border-top: 1px solid var(--borders);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    flex-direction: row;
  `}
`

export const MenuBarGroupDesktop = styled.div`
  display: block;

  ${media.lessThan('large')`
    display: none;
  `}
`

export const MenuBarGroupMobile = styled.div`
  display: none;

  ${media.lessThan('large')`
    display: block;
  `}
`

export const MenuBarLink = styled(Link)`
  display: block;

  &.active {
    span {
      color: var(--highlight);
    }
  }
`

export const MenuBarExternalLink = styled.a`
  display: block;
`

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 2.1rem;

  // &.light {
  //   color: #d4d400;

  //   &:hover {
  //     color: #e2e240;
  //   }
  // }
  &.light {
    color: #BEBE01;

    &:hover {
      color: #9C9C00;
      //color: var(--highlight);
    }
  }
  
  &:hover {
    color: var(--highlight);
  }

  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }

  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
    }
  `}

  ${media.lessThan("large")`
    height: 2.1rem;
    padding: .9rem;
    position: relative;
    width: 2.1rem;
  `}
`

export const MenuBarNotification = styled.span`
  background: var(--highlight);
  border-radius: 50%;
  display: block;
  height: 0.4rem;
  position: absolute;
  right: 12px;
  top: 12px;
  width: 0.4rem;
`
