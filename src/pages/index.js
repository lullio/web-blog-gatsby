import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostItem from '../components/PostItem'

const IndexPage = () => (
<>
  <Layout>
   <Seo title="Home" />
   <PostItem 
    slug="/about/"
    background="red"
    category="Misc"
    date="30 de julho de 2020"
    timeToRead="5"
    title="Diga não ok: tenha sua propria tool"
    description="ok oka lorem "
   />
   
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
