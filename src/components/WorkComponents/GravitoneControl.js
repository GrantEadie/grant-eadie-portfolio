import React from "react";
import { motion } from "framer-motion";

function GravitoneControl(props) {
  const { changeToDescription } = props;

  if (changeToDescription.view === "gravitone") {
    return (
      <a
        href="https://github.com/GrantEadie/-capstone--gravitone"
        rel="noreferrer"
        target="_blank"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            <span>⧂ g r a v i t o n e</span>
            <hr />
            A web application that uses gravity emulation to generate complex
            arpeggiated progressions and aural textures.
            <hr />
            React || Matter.js || Tone.js
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
        <img src="https://media.giphy.com/media/khsXg7RuCO4fqhwQd8/giphy.gif" alt="gravitone" />
      </motion.div>
    );
  }
}

export default GravitoneControl;
