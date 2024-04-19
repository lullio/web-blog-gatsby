import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Profile from "../Profile"

import styled from 'styled-components'

import GlobalStyles from "../../styles/global"

// Create a Wrapper component that'll render a <section> tag with some styles
const LayoutWrapper = styled.section`
display: flex;
`
// main tag
const LayoutMain = styled.main`
  background: #16202c;
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%
`
const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles/>
        <aside>
          <Profile />
        </aside>
        <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}
export default Layout
