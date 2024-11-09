import Image from "next/image";
import GetPlaylist from "./getPlaylist/page.js";
import Footer from "./footer/page.js"

import { Logo, Homepic } from "./helpers/imageExport.js"


export default function Home() {
  return (
    <div className="main-div">
        <nav className="navbar">
          <div className="nav-link-container">
            <div className="nav-link">
              <p>Merchandise</p>
            </div>
            <div className="nav-link">
              <p>About Me</p>
            </div>
            <Image src={Logo} className="logo" alt="" />
            <div className="nav-link">
              <p>Login</p>
            </div>
            <div className="nav-link">
              <p>HyperLink</p>
            </div>
          </div>
        </nav>
        <div className='home-wrapper'>
          {/* <Image src={Homepic} /> */}
          <GetPlaylist />
        </div>
        <Footer />
    </div>
  );
}
