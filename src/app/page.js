import Image from "next/image";
import GetPlaylist from "./getPlaylist/page.js";
import Footer from "./footer/page.js";

import { Logo } from "./helpers/imageExport.js";


export default function Home() {
  return (
    <div className="main-div">
        <nav className="navbar">
          <div className="nav-link-container">
            <div className="nav-link">
              <a>Login</a>
            </div>
            <div className="nav-link">
              <a>Create Account</a>
            </div>
            <div className="nav-link">
              <a>Merchandise</a>
            </div>
            <div className="nav-link">
              <a>About Elle</a>
            </div>
            <div className="nav-link">
              <a>Elle's Tiktok</a>
            </div>
          </div>
        </nav>
        <div className='home-wrapper'>
          <div className="home-text-wrapper">
            <Image src={Logo} className="logo" alt="" />
            <h1>A Community For Trending Topics and Entertainment News</h1>
            <p>
              Elle Bee is a content creator that delivers daily content on entertainment news, trending topics and true crime. Her community is an open community
              that provides a space for her viewers to give their opinions and to discuss the topic. She encourages her members to join her blog and to give their 
              opinion and/or start a blog of their own.
            </p>           
          </div>
          <GetPlaylist />
        </div>
        <Footer />
    </div>
  );
}
