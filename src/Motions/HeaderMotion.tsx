import useMouse from "@react-hook/mouse-position";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import "../style.css";


const HeaderMotion = () => {
  const ref = useRef(null);

  const mouse = useMouse(ref, {
    enterDelay: 70,
    leaveDelay: 80,
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 30,
    duration: 0.8,
    restDelta: 0.001,
  });

  let mouseXPosition: number | null = mouse.x || null;
  let mouseYPosition: number | null = mouse.y || null;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      x: mouseXPosition || 0, // Use 0 as a fallback value
      y: mouseYPosition || 0, // Use 0 as a fallback value
    },
    hover: {
      x: mouseXPosition || 0,
      y: mouseYPosition || 0,
      width: 130,
      height: 130,
      fontSize: "20px",
    },
  };

  const spring = {
    stiffness: 500,
    damping: 25,
    duration: 0.3,
    restDelta: 0.001,
  };

  return (
    <div ref={ref}>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <motion.div
        className="circle"
        variants={variants}
        transition={spring}
        // animate={cursorVariant}
      />
    </div>
  );
};

export default HeaderMotion;
