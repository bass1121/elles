import "./navbar.css";

export default function Navbar() {
  return (
      <nav className="navbar">
        <div className="nav-link-container">
          <div className="nav-link">
            <a href="/login">Login</a>
          </div>
          <div className="nav-link">
            <a href="/">Home</a>
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
  );
}