import * as React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
   <Seo title="Home" />
   <h1>My Blog</h1>
   <ul>
    <li>
      <Link to="/about">About</Link>
    </li>
   </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
