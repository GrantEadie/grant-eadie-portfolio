import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import HyggeControl from "./HyggeControl";

function WorkPage() {
  const [workDesc, handleWorkDescView] = useState(false);

  return (
    <>
      <div className="about-grid-container">
        <div className="square2">
          <h1 style={{ marginLeft: "50px" }}>
            Development
          </h1>
        </div>
      </div>
      <motion.div className="grid-container">
        <motion.div
          whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          onMouseEnter={() => handleWorkDescView(!workDesc)}
          onMouseLeave={() => handleWorkDescView(!workDesc)}
          className="squareWork"
        >
          <HyggeControl changeToDescription={workDesc} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
      </motion.div>
      <div style={{marginTop: '5vh'}} className="about-grid-container">
        <div className="square2">
          <h1
            style={{ textAlign: "right", marginRight: "90px" }}
          >
            Music
          </h1>
        </div>
      </div>
      <motion.div style={{marginBottom:'10vh'}} className="grid-container">
        <motion.div
          whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          onMouseEnter={() => handleWorkDescView(!workDesc)}
          onMouseLeave={() => handleWorkDescView(!workDesc)}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          className="squareWork"
        ></motion.div>
      </motion.div>
      <br/>
    </>
  );
}

export default WorkPage;
