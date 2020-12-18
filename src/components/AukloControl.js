import React from "react";
import PropTypes from 'react';
import auklo from "../img/auklo_.png";
import { motion } from "framer-motion";

function AukloControl(props) {
  const { changeToDescription } = props;

  if (changeToDescription.view === "auklo") {
    return (
      <a href="https://auklo-lite-gzbfq3a6l.vercel.app/" rel="noreferrer" target="_blank">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .5}}
      >
        <p>
          <span>⟁ Auklo Lite</span>
          <hr /> Little instrument containing preset <b>arpeggiation</b> and a really nifty <b>visualizer</b>. Full version uses a database to store user's inputs.
          <hr/>
          C# || JS || Tone.js || MySQL
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
        <img src={auklo} alt="auklo" />
      </motion.div>
    );
  }
}

AukloControl.PropTypes = {
  id: PropTypes.string
}

export default AukloControl;