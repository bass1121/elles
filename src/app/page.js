import Image from "next/image";
import GetPlaylist from "./getPlaylist/page.js";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main>
        <nav className="navbar">
          <div className="nav-link-wrapper">
            <p>link</p>
          </div>
          <div className="nav-link-wrapper">
            <p>link</p>
          </div>
          <div className="nav-link-wrapper">
            <p>link</p>
          </div>
          <div className="nav-link-wrapper">
            <p>link</p>
          </div>
        </nav>
        <div className='home-wrapper'>
          <GetPlaylist />
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}
