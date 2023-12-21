import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <nav id="navbar" className="navbar fixed-top">
          <a className="logo" href="#page-top">
            <img
              src="https://avatars.githubusercontent.com/u/36969418"
              alt="logo"
            />
          </a>
          <button
            className={`nav-menu-toggler ${open && "open"}`}
            type="button"
            data-toggle="collapse"
            data-target="#nav-menu"
            aria-controls="nav-menu"
            aria-expanded="true"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
          <div id="nav-menu" className={`nav-menu ${!open && "mobile-hidden"}`}>
            <ul className="nav-items">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
