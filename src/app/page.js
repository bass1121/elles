import Image from "next/image";
import GetPlaylist from "./getPlaylist/page.js";
import Footer from "./footer/page.js"

import { Logo } from "./helpers/imageExport.js"


export default function Home() {
  return (
    <div>
      <main>
        <nav className="navbar">
          <div className="nav-link-container">
            <div className="nav-link">
              <p>HyperLink</p>
            </div>
            <div className="nav-link">
              <p>HyperLink</p>
            </div>
            <Image src={Logo} className="logo" alt="" />
            <div className="nav-link">
              <p>HyperLink</p>
            </div>
            <div className="nav-link">
              <p>HyperLink</p>
            </div>
          </div>
        </nav>
        <div className='home-wrapper'>
          <GetPlaylist />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
