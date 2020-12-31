import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import HyggeControl from "./WorkComponents/HyggeControl";
import AukloControl from "./WorkComponents/AukloControl";
import OutfitterControl from "./WorkComponents/OutfitterControl";
import GravitoneControl from "./WorkComponents/GravitoneControl";

function WorkPage() {
  const [workDesc, handleWorkDescView] = useState({ view: null });

  function onHoverWork(input) {
    handleWorkDescView({ view: input });
  }

  return (
    <>
      <div className="about-grid-container">
        <div className="square2">
          <h1 style={{ marginLeft: "50px" }}>Development</h1>
        </div>
      </div>
      <motion.div className="grid-container">
      <motion.div
          whileHover={{ scale: 1.25, x: -20, y: -20, transition: { duration: 0.2 } }}
          className="squareWork"
          onMouseEnter={() => onHoverWork("gravitone")}
          onMouseLeave={() => onHoverWork(null)}
        >
          <GravitoneControl
            changeToDescription={workDesc}
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.25, x: -20, y: -20, transition: { duration: 0.2 } }}
          className="squareWork"
          onMouseEnter={() => onHoverWork("auklo")}
          onMouseLeave={() => onHoverWork(null)}
        >
          <AukloControl
            changeToDescription={workDesc}
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.25, x: -20, y: -20, transition: { duration: 0.1 } }}
          onMouseEnter={() => onHoverWork("hygge")}
          onMouseLeave={() => onHoverWork(null)}
          className="squareWork"
        >
          <HyggeControl changeToDescription={workDesc} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.25, x: -20, y: -20, transition: { duration: 0.1 } }}
          onMouseEnter={() => onHoverWork("outfitter")}
          onMouseLeave={() => onHoverWork(null)}
          className="squareWork"
        >
          <OutfitterControl changeToDescription={workDesc} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.25, x: -20, y: -20, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.25, x: -20, y: -20, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.25, x: -20, y: -20, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.25, x: -20, y: -20, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.25, x: -20, y: -20, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
      </motion.div>
      <div style={{ marginTop: "5vh" }} className="about-grid-container">
        <div className="square2">
          <h1 style={{ textAlign: "right", marginRight: "90px" }}>Music</h1>
        </div>
      </div>
      <motion.div style={{ marginBottom: "10vh" }} className="grid-container">
        <motion.div
          whileHover={{ scale: 1.25, x: -20, y: -20, transition: { duration: 0.1 } }}
          onMouseEnter={() => handleWorkDescView(!workDesc)}
          onMouseLeave={() => handleWorkDescView(!workDesc)}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.25, x: -20, y: -20, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.25, x: -20, y: -20, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.25, x: -20, y: -20, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.25, x: -20, y: -20, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.25, x: -20, y: -20, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
      </motion.div>
      <br />
    </>
  );
}

export default WorkPage;
