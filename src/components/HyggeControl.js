import React from "react";
import hygge from "../img/hygge_.png";
import { motion } from "framer-motion";

function HyggeControl(props) {
  const { changeToDescription } = props;

  if (changeToDescription) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <p style={{background: "blue"}}>
          <span>◐ Hygge: Portland</span>
          <hr /> Uses the
          RealtyMole API to display rental information about selected regions of
          Portland OR. Updates every few seconds.{" "}
          <hr/>
          JavaScript || Node.js || jQuery
        </p>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <img src={hygge} alt="hygge" />
      </motion.div>
    );
  }
}

export default HyggeControl;