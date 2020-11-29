import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO
        title="Dead End"
        description="Error page gatsby strapi portfolio website"
      />
      <main className="error-page">
        <>
          <h1>oops it's a dead end</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </>
      </main>
    </Layout>
  )
}

export default Error
