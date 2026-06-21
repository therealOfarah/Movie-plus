import React, { useEffect, useState } from "react";
import logo1 from "../../images/logo1.jpg";
import '../../styles/NavBar.css'

type Props = {
  handleLogout: () => void;
  user: any;
}

function NavBarhrefp(props: Props) {
  const profile = props.user;
  const logout = props.handleLogout;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`mp-navbar ${scrolled ? "mp-navbar--solid" : ""}`}>
      <div className="mp-navbar__inner">
        <a className="mp-navbar__brand" href="/">
          <img src={logo1} alt="Logo" className="mp-navbar__logo" />
          <span>MOVIE+</span>
        </a>

        <button
          className="mp-navbar__toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`mp-navbar__links ${menuOpen ? "mp-navbar__links--open" : ""}`}>
          <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="/movie" onClick={() => setMenuOpen(false)}>Movies</a></li>
          <li><a href="/show" onClick={() => setMenuOpen(false)}>Shows</a></li>
          {profile == null ? (
            <li><a href="/login" className="mp-navbar__cta" onClick={() => setMenuOpen(false)}>Sign In</a></li>
          ) : (
            <>
              <li><a href="/account" onClick={() => setMenuOpen(false)}>My List</a></li>
              <li>
                <button className="mp-navbar__logout" onClick={() => { setMenuOpen(false); logout(); }}>
                  Sign Out
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBarhrefp;
