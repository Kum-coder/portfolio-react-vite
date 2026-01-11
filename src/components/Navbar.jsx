import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["about", "skills", "projects"];
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      {/* LOGO */}
      <div className="logo">
        <img src="/python-logo.png" alt="Python Logo" />
        <span>
          Python <strong>Full-Stack</strong>
        </span>
      </div>

      {/* NAV LINKS */}
      <div className="nav-links">
        <a href="#about" className={active === "about" ? "active" : ""}>
          About
        </a>
        <a href="#skills" className={active === "skills" ? "active" : ""}>
          Skills
        </a>
        <a href="#projects" className={active === "projects" ? "active" : ""}>
          Projects
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
