import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-center">Welcome to Carvengate</h1>
    <p className="text-center text-red-600">This site is still under Development</p>
  </Layout>
)

export default IndexPage
