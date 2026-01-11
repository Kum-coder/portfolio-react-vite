import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "left",
      }}
      className="scroll-progress"
    />
  );
}

export default ScrollProgress;
