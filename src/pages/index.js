import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostItem from '../components/PostItem'

const IndexPage = () => (
<>
  <Layout>
   <Seo title="Home" />
   <PostItem />
   
  </Layout>
</>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
