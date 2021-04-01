import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "4rem 1rem",
      }}>
        <h1>404: ain't got none of that yet</h1>
        <p>That link didn't work, sorry cowpoke <span role="img" aria-label="Cowboy emoji">🤠</span></p>
        <p><a href="/">Go back home</a></p>
    </div>
  </Layout>
)

export default NotFoundPage
