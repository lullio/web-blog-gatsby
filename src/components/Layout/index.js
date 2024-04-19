import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Profile from "../Profile"

import * as S from "./styled"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles/>
        <aside>
          <Profile />
        </aside>
        <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}
export default Layout
