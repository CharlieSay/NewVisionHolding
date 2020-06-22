import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ position: "absolute", top: "40%" }}>
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
        <h1
          style={{
            color: "#F2F2F2",
            fontFamily: "Poppins",
            marginTop: "70%",
            fontSize: "25px",
          }}
        >
          Coming soon...
          <span role="img" aria-label="fire emoji">
            🔥
          </span>
        </h1>
      </div>
    </div>
  </Layout>
)

export default IndexPage
