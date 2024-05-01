import React, { useState, useEffect } from "react"

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Lightbulb as Light } from "@styled-icons/material-outlined/Lightbulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { ThList as List } from "@styled-icons/typicons/ThList"
import { Menu } from '@styled-icons/boxicons-regular/Menu'
import { GraduationCap } from '@styled-icons/fa-solid/GraduationCap'
import { Youtube } from '@styled-icons/boxicons-logos/Youtube'

import * as S from "./styled"

const MenuBar = ({ setIsMenuOpen, isMenuOpen }) => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <S.MenuBarWrapper>

      <S.MenuBarGroup>
        <S.MenuBarLink activeClassName="active"
          to="/"
          //cover
          direction="right"
          //bg={getThemeColor()}
          duration={0.6}
          title="Voltar para Home"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>

        <S.MenuBarLink
          to="/search/"
          //cover
          direction="right"
          //bg={getThemeColor()}
          duration={0.6}
          title="Pesquisar posts"
          activeClassName="active"
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>

        <S.MenuBarGroupDesktop>
            <S.MenuBarLink
              to="/cursos/"
              activeClassName="active"
              title="Ver cursos"
            >
              <S.MenuBarItem>
                <GraduationCap />
                <S.MenuBarNotification />
              </S.MenuBarItem>
            </S.MenuBarLink>

          <S.MenuBarExternalLink
            title="YouTube Videos"
            href="https://www.youtube.com/WillianJustenCursos/?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.MenuBarItem>
              <Youtube />
              <S.MenuBarNotification />
            </S.MenuBarItem>
          </S.MenuBarExternalLink>
        </S.MenuBarGroupDesktop>
      </S.MenuBarGroup>

      <S.MenuBarGroupMobile>
        <S.MenuBarGroup>
          <S.MenuBarItem title="Abrir Menu" onClick={openMenu}>
            <Menu />
          </S.MenuBarItem>
        </S.MenuBarGroup>
      </S.MenuBarGroupMobile>

      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
          className="display"
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o Topo" 
        onClick={() => {
          window.scroll({ top: 0, behavior: 'smooth' })
        }}
        >
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>

    </S.MenuBarWrapper>
  )
}

export default MenuBar