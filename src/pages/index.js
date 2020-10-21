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
          paddingLeft: "8px",
          paddingRight: "8px",
        }}
      >
        <Image />
        <h1
          style={{
            color: "#FFFFFF",
            fontFamily: "Poppins",
            textAlign: "center",
            fontSize: "32px",
            paddingLeft: `8px`,
            paddingRight: `8px`,
          }}
        >
          Hey, we're New Vision <span role="img" aria-label="Waving Emoji">👋</span>
        </h1>
        <span
          style={{
            color: "#FFFFFF",
            fontFamily: "Poppins",
            textAlign: "center",
            fontSize: "16px",
            paddingBottom: `16px`,
            paddingRight: `32x`,
          }}
        >
          Enter your email address to recieve your free content bundle worth over £50
        </span>
        <EmailListForm />
        <a href={'//newvisionmedia.store'} target="_blank" rel="noreferrer" style={{
          color: "#FFFFFF",
          fontFamily: "Poppins",
          textAlign: "center",
          fontSize: "26px",
          borderBottom: `2px solid #FFCE00`,
          paddingLeft: `8px`,
          paddingRight: `8px`,
          textDecoration: 'none'
        }}>View our full catalogue</a>
      </div>
    </FadeIn>
  </Layout>
)

export default IndexPage
