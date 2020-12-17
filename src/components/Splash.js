import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import MatterControl from "./MatterControl";

const pageVariants = {
  initial: {
    y: 0,
    opacity: 0,
    scale: 0.9,
    transition: { duration: 3 },
  },
  in: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 3 },
    // background: 'transparent'
  },
  out: {
    y: "10vh",
    opacity: 0,
    scale: 0.6,
    transition: { duration: 1 },
  },
};

function Splash() {
  return (
    <>
      <motion.div
        style={{ zIndex: 0, width: "100vh", background: "transparent" }}
        initial="in"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <MatterControl />
      </motion.div>
        <motion.h1
          style={{
            zIndex: 0,
            width: "100vh",
          }}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          className="splash"
        >
          Hi, I'm{" "}
          <NavLink className="grant" to="/about">
            <span className="grant">Grant</span>
          </NavLink>
          .
        <p>I write code, design stuff, and make music.</p>
        </motion.h1>
    </>
  );
}

export default Splash;
