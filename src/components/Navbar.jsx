import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["about", "skills", "projects"];
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const offset = el.offsetTop - 140;
          const height = el.offsetHeight;
          if (
            window.scrollY >= offset &&
            window.scrollY < offset + height
          ) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      {/* LOGO */}
      <a href="#about" className="logo">
        <img src="/python-logo.png" alt="Python Full Stack Logo" />
        <span>
          Python <strong>Full-Stack</strong>
        </span>
      </a>

      {/* NAV LINKS */}
      <nav className="nav-links">
        <a href="#about" className={active === "about" ? "active" : ""}>
          About
        </a>
        <a href="#skills" className={active === "skills" ? "active" : ""}>
          Skills
        </a>
        <a href="#projects" className={active === "projects" ? "active" : ""}>
          Projects
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
