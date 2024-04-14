import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Profile from "./Profile"

const Layout = ({ children }) => {
  return (
    <>
        <aside>
          <Profile />
        </aside>
        <main>{children}</main>
    </>
  )
}

export default Layout
