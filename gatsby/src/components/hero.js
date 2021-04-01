import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import headerImage from "../images/header.png"
import MockupContent from "./image"
import woolf from "../images/woolf.svg"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <h1 style={{ textAlign: "center" }}>"Good luck, outlaw."</h1>
    <div style={{ margin: 20, width: `250px` }}>
      <div
        style={{
          
        }}
      >
        <img
          src={woolf}
          alt="Good Luck Outlaw fox/wolf mascot art"
        />
      </div>
    </div>
    <p><a href="/links">Links</a></p>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
