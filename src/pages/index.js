import React from "react"
import FadeIn from 'react-fade-in';
import Layout from "../components/layout"
import Image from "../components/image"
import EmailListForm from "../components/lead-gen"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FadeIn>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image />
        <h1
          style={{
            color: "#FFFFFF",
            fontFamily: "Poppins",
            textAlign: "center",
            fontSize: "35px",
            paddingLeft: "4px",
            paddingRight: "4px",
          }}
        >
          Hey, we're New Vision <span role="img" aria-label="Waving Emoji">👋</span>
        </h1>
        <EmailListForm />
      </div>
    </FadeIn>
  </Layout>
)

export default IndexPage
