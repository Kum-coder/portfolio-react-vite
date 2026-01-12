function Hero() {
  return (
    <section className="hero" id="about">
      {/* Badge */}
      <p className="hero-badge">
        Python Full-Stack Developer · React & Django REST
      </p>

      {/* Heading */}
      <h1 className="hero-title">
        Hi, I’m <span>Kumar Abhishek</span>
      </h1>

      {/* Sub description */}
      <p className="hero-desc">
        I design and build clean, scalable, and maintainable web applications.
        My focus is on writing readable code, building robust APIs, and creating
        user-friendly interfaces.
      </p>

      {/* CTA Buttons */}
      <div className="hero-actions">
        <a href="/resume.pdf" className="btn-primary">
          Download Resume
        </a>

        <a href="https://github.com/Kum-coder?tab=repositories" className="btn-secondary">
          View Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;
