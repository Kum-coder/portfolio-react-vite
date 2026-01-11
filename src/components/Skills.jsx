import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.section
      id="skills"
      className="section"
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        <span>Python</span>
        <span>Django</span>
        <span>React JS</span>
        <span>JavaScript</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Git & GitHub</span>
      </div>
    </motion.section>
  );
}

export default Skills;
