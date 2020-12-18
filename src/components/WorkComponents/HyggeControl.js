import React from "react";
import hygge from "../../img/hygge_.png";
import { motion } from "framer-motion";

function HyggeControl(props) {
  const { changeToDescription } = props;

  if (changeToDescription.view === "hygge") {
    return (
      <a href="https://github.com/GrantEadie/Official-Rental-API" rel="noreferrer" target="_blank">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .5}}
      >
        <p>
          <span>◐ Hygge: Portland</span>
          <hr /> Uses the 
          <b> RealtyMole API</b> to display rental information about selected regions of
          Portland OR. Updates every few seconds.{" "}
          <hr/>
          JavaScript || Node.js || jQuery
        </p>
      </motion.div>

      </a>
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