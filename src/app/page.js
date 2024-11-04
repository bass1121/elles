import Image from "next/image";
import GetPlaylist from "./getPlaylist/page.js";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className='video-wrapper'>
          <div>Youtube Uploads</div>
          <GetPlaylist />
        </div>
      </main>
      <footer className="">
      </footer>
    </div>
  );
}
