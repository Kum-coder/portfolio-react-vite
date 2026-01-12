function ExplainPortfolio() {
  return (
    <section className="section" id="explain-portfolio">
      <h2 className="section-title">Why This Portfolio?</h2>

      <div className="explain-card">
        <p>
          This portfolio is designed as a real-world product rather than a
          static showcase. My goal was to reflect how I think, structure code,
          and make technical decisions in production environments.
        </p>

        <ul className="explain-points">
          <li>
            Frontend and backend are separated to follow industry-standard
            full-stack architecture.
          </li>
          <li>
            Components are modular and reusable, making the UI easy to extend
            and maintain.
          </li>
          <li>
            The design focuses on clarity, performance, and scalability instead
            of visual noise.
          </li>
          <li>
            Every section exists to communicate intent, not just skills.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ExplainPortfolio;
