import React from "react";
import outfitter from '../../img/outfitter_.png'
import { motion } from "framer-motion";

function OutfitterControl(props) {

  const { changeToDescription } = props;

  if (changeToDescription.view === "outfitter") {
    return (
      <a href="https://endymion-outfitters.vercel.app/" rel="noreferrer" target="_blank">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .5}}
      >
        <p>
          <span>⧪ Endymion Outfitters</span>
          <hr /> Sci-fi take on a merch store with a clickable SVG body. Also the added ability to create new merch items.
          <hr/>
          React || Redux || SCSS
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
        <img src={outfitter} alt="outfitter" />
      </motion.div>
    );
  }
}

export default OutfitterControl;