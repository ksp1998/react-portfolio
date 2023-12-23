import { useEffect, useState } from "react";

window.addEventListener("load", () => {
  setTimeout(() => {
    window.location.hash &&
      (
        document.querySelector(
          `a[href="${window.location.hash}"]`
        ) as HTMLLinkElement | null
      )?.click();
  }, 500);
});

const navItems = [
  {
    href: "#intro",
    text: "Home",
  },
  {
    href: "#projects",
    text: "Projects",
  },
  {
    href: "#about",
    text: "About",
  },
  {
    href: "#contact",
    text: "Contact",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#intro");

  useEffect(() => {
    const scrollHandler = () => {
      const x = window.innerWidth / 2;
      const y = (scrollY % Math.round(window.innerHeight)) + 250;

      const elements = document.elementsFromPoint(x, y);

      elements.map((element) => {
        const id = element.getAttribute("id");
        id === "contact" && setActive("#contact");
        id === "about" && setActive("#about");
        id === "projects" && setActive("#projects");
        id === "intro" && setActive("#intro");
      });
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [active]);

  return (
    <header id="header" className={active === "#intro" ? "transparent" : ""}>
      <div className="container">
        <nav id="navbar" className="navbar fixed-top">
          <a className="logo" href="#top">
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
              {navItems.map((navItem) => (
                <li className="nav-item" key={navItem.href}>
                  <a
                    className={`nav-link ${
                      navItem.href === active && "active"
                    }`}
                    href={navItem.href}
                  >
                    {navItem.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
