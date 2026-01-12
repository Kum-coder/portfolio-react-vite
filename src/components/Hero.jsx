function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-container">
        
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <p className="hero-badge">
            Python Full-Stack Developer · React & Django REST
          </p>

          <h1 className="hero-title">
            Hi, I’m <span>Kumar Abhishek</span>
          </h1>

          <p className="hero-desc">
            I design and build clean, scalable, and maintainable web applications.
            Focused on robust APIs and user-friendly interfaces.
          </p>

          <div className="hero-actions">
            <a href="/resume.pdf" className="btn-primary">
              Download Resume
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT PROFILE IMAGE */}
        <div className="hero-image">
          <img src="/profile.jpeg" alt="Abhishek Kumar" />
        </div>

      </div>
    </section>
  );
}

export default Hero;
