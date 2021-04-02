import React from "react"
import PropTypes from "prop-types"
import { SiSpotify } from "@react-icons/all-files/si/SiSpotify";
import { SiYoutube } from "@react-icons/all-files/si/SiYoutube";
import { SiTwitch } from "@react-icons/all-files/si/SiTwitch";
import { SiSoundcloud } from "@react-icons/all-files/si/SiSoundcloud";
import { SiDiscord } from "@react-icons/all-files/si/SiDiscord";
import { SiTiktok } from "@react-icons/all-files/si/SiTiktok";
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram";
import { SiTwitter } from "@react-icons/all-files/si/SiTwitter";
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook";
import { OutboundLink } from "gatsby-plugin-google-analytics"

import "../styles/socialLinks.css"
import woolf from "../images/woolf.svg"


const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      margin: "1.5rem 2rem",
    }}
  >
    <div style={{ width: `250px` }}>
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
    <div
      style={{
        marginTop: "20px"
      }}>
      <h5 style={{ marginBottom: "20px"}}>listen & watch</h5>
      <div style={{
        display: "flex",
        marginBottom: "60px"
      }}>
        <OutboundLink href="#" target="_blank">
          <SiSpotify className="logo" title="Spotify" />
        </OutboundLink>
        <OutboundLink href="https://www.youtube.com/channel/UCeZHAAc-FyzmDyHYcMKGrJg" target="_blank">
          <SiYoutube className="logo" title="YouTube" />
        </OutboundLink>
        <OutboundLink href="https://www.twitch.tv/goodluckoutlaw" target="_blank">
          <SiTwitch className="logo" title="Twitch" />
        </OutboundLink>
        <OutboundLink href="https://soundcloud.com/goodluckoutlaw" target="_blank">
          <SiSoundcloud className="logo" title="SoundCloud" />
        </OutboundLink>
      </div>

      <h5 style={{ marginBottom: "20px"}}>hang out & talk</h5>
      <div style={{
        display: "flex",
        marginBottom: "60px"
      }}>
        <OutboundLink href="https://discord.gg/F6ryxTUsEX" target="_blank">
          <SiDiscord className="logo" title="Discord" />
        </OutboundLink>
        <OutboundLink href="https://www.tiktok.com/@goodluckoutlaw?" target="_blank">
          <SiTiktok className="logo" title="TikTok" />
        </OutboundLink>
        <OutboundLink href="https://www.instagram.com/goodluckoutlaw/" target="_blank">
          <SiInstagram className="logo" title="Instagram" />
        </OutboundLink>
        <OutboundLink href="https://twitter.com/goodluckoutlaw" target="_blank">
          <SiTwitter className="logo" title="Twitter" />
        </OutboundLink>
        <OutboundLink href="https://www.facebook.com/goodluckoutlaw" target="_blank">
          <SiFacebook className="logo" title="Facebook" />
        </OutboundLink>
      </div>

      <h5 style={{ marginBottom: "20px"}}>about me</h5>
      <p className="about">
        Hey, I’m Kirby! I aspire to make all kinds of stuff! I'm realizing that I don't want to keep spending time doing things that will get me ready to make art instead of just making art (music, videos, writing, games, apps). Thank you for being here! Also come hang out on whatever platform you feel like ^
      </p>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
