import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: `300px`, paddingLeft: "4%" }}>
          <Image />
        </div>
        <h2 style={{
          color: "#FFFFFF",
          fontFamily: "Poppins",
textAlign:'center'
        }}>
          Video Content for the local church</h2>
        <span
          style={{
            color: "#FFFFFF",
            fontFamily: "Poppins",
          }}
        >
          Coming soon...
          <span role="img" aria-label="fire emoji">
            🔥
          </span>
        </span>
    </div>
  </Layout>
)

export default IndexPage
