function HowIWork() {
  return (
    <section className="section" id="how-i-work">
      <h2 className="section-title">How I Work</h2>

      <div className="work-grid">
        <div className="work-card">
          <h3>Problem Breakdown</h3>
          <p>
            I start by breaking complex problems into smaller, testable parts
            to ensure clarity before writing any code.
          </p>
        </div>

        <div className="work-card">
          <h3>API-First Approach</h3>
          <p>
            I design backend APIs and data flow first, which helps me build
            scalable and predictable frontend interfaces.
          </p>
        </div>

        <div className="work-card">
          <h3>Clean Code Focus</h3>
          <p>
            I prioritize readable and maintainable code over shortcuts,
            making the project easier to extend and debug.
          </p>
        </div>

        <div className="work-card">
          <h3>Scalability Mindset</h3>
          <p>
            I think about performance, scalability, and future requirements
            early to avoid costly rewrites later.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowIWork;
