import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.section
      id="projects"
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Projects</h2>

      <div className="projects-container">
        <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
          <h3>Employee Attendance System</h3>
          <p>
            Python-based project using OOP, file handling, and exception
            handling.
          </p>
        </motion.div>

        <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
          <h3>React Portfolio</h3>
          <p>
            Modern portfolio built using React, Vite, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;
