import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Python Full Stack Developer"
];

function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[index];
    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((index + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      {/* LEFT CONTENT */}
      <div className="hero-text">
        <span className="hero-status">🟢 Available for Opportunities</span>

        <h1>
          Hi, I’m <span>Kumar Abhishek</span>
        </h1>

        <h3>
          <span className="typing-text">{text}</span>
          <span className="cursor">|</span>
        </h3>

        <p>
          I build clean, scalable, and performance-focused web applications
          using modern technologies. I enjoy solving real-world problems and
          writing maintainable code.
        </p>

        <div className="hero-buttons">
          <a href="/Abhishek_Resume.pdf" download className="primary-btn">
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/kumar-abhishek-3204bb32b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Kum-coder"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="hero-image"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <img src="/profile.jpeg" alt="Abhishek Kumar" />
      </motion.div>
    </motion.section>
  );
}

export default Hero;
