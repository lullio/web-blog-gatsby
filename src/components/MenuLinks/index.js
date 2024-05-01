import React from "react"

import links from "./content"

import * as S from "./styled"

const MenuLinks = ({ setIsMenuOpen, isMenuOpen }) => {
  const menuLinkClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map((link, i) => (
          <S.MenuLinksItem key={i} onClick={menuLinkClick}>
            <S.MenuLinksLink
              //cover
              //direction="left"
              // bg={getThemeColor()}
              //duration={0.6}
              to={link.url}
              activeClassName="active"
            >
              {link.label}
            </S.MenuLinksLink>
          </S.MenuLinksItem>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  )
}

export default MenuLinks
