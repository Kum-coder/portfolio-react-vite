import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>
      <p>
        I am a motivated developer with a strong interest in building scalable
        web applications using modern technologies.
      </p>
    </motion.section>
  );
}

export default About;
