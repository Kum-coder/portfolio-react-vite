function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Featured Projects</h2>

      <div className="project-card">
        {/* Header */}
        <div className="project-header">
          <h3>Clinic Management System</h3>
          <span className="project-tag">Full-Stack</span>
        </div>

        {/* Description */}
        <p className="project-desc">
          A production-style clinic management system designed to streamline
          appointment scheduling and patient data handling using a modern
          full-stack architecture.
        </p>

        {/* Highlights */}
        <ul className="project-points">
          <li>RESTful APIs built with Django REST Framework</li>
          <li>React + Vite frontend with component-based design</li>
          <li>Clear separation between frontend and backend layers</li>
          <li>Scalable structure ready for authentication and role management</li>
        </ul>

        {/* Footer */}
        <div className="project-footer">
          <a
            href="https://github.com/Kum-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Code →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
