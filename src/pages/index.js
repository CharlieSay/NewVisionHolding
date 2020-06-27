import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import './index.css';

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
      <Image />
      <h1 style={{
        color: "#FFFFFF",
        fontFamily: "Poppins",
        textAlign: 'center',
        fontSize:'35px',
        paddingLeft:'4px',
        paddingRight:'4px'
      }}>
        Video Content for the local <span className='underline'>church</span></h1>
      <span
        style={{
          color: "#FFFFFF",
          fontFamily: "Poppins",
        }}
      >
        Coming soon
       
      </span>
   <span role="img" aria-label="fire emoji">
          🔥🔥🔥🔥🔥
          </span>
    </div>
  </Layout>
)

export default IndexPage
