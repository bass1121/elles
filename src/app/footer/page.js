import { AiFillYoutube, AiFillFacebook, AiFillTikTok, AiFillInstagram } from 'react-icons/ai';
import { BsTwitterX } from 'react-icons/bs';
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-div">
      <h2>Quick Links</h2>
      <a href="" className="footer-link">
        <AiFillFacebook className="icon"/>
      </a>
      <a href="" className="footer-link">
        <AiFillYoutube className="icon"/>
      </a>
      <a href="" className="footer-link">
        <BsTwitterX className="icon"/>
      </a>
      <a href="" className="footer-link">
        <AiFillTikTok className="icon"/>
      </a>
      <a href="" className="footer-link">
        <AiFillInstagram className="icon"/>
      </a>
    </div>
  );
}