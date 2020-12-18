import React from "react";
import * as v from "./PageVariants";
import { motion } from "framer-motion";
import grantPic from "../img/grant_or_copy.JPG";

function About() {
  return (
    <motion.div
      style={{ position: "absolute", width: "100vw" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={v.pageVariants}
      transition={v.pageTransitions}
      className="bg-transparent"
    >
      <img id="grantimg" alt="grant" src={grantPic} />
      <div className="about-grid-container" style={{marginBottom:'10vh'}}>
        <div class="square1"></div>
        <div class="square2">
          <h1 style={{ float: "left", paddingRight: "30px" }}>About</h1>
          <p>
            Hi, I’m Grant, and I love making stuff. Composing, developing,
            producing, cooking, writing, you name it. If people will use it,
            play it, eat it, or listen to it, I will do my best to find out how
            to create it. <br />
            In the last few years I’ve toured and produced extensively as a
            classical and electronic musician. While it was wonderful to travel
            the world performing, my favorite place has always been in my studio
            developing my creative tools. And while the craft of music has
            always fascinated me, the world of technology and software
            development has become my calling.
          </p>
          <hr />
          <br /><br />
          <h1
            style={{
              float: "right",
              paddingLeft: "30px",
              paddingBottom: "20px",
            }}
          >
            Technology
          </h1>
          <p>
            <b>C#</b> || <b>ASP.NET</b> || <b>JavaScript</b> || <b>jQuery</b> || <b>CSS/SCSS</b> || <b>HTML</b> || 
            <b> React/Native</b> || <b>Node.js</b> || <b>MySQL</b> || <b>Firebase/Firestore</b> || <b>Jest/Babel</b> || <b>Webpack</b>
            <br />
            <br />
            5+ years of experience with the <b>Adobe Suite</b>, especially <b>Illustrator</b>.
            And like most developers these days, I've spent the last year
            entirely on remote systems such as Slack, Discord, and Teams.
          </p>
          <hr />
          <br /><br />
          <h1 style={{ float: "left", paddingRight: "30px" }}>Goals</h1>
          <p>
            Work with good people, learn as much as I can from the industry,
            build a portfolio I'm proud of, and eventually find a team of
            like-minded individuals and a company that I believe in.
            <br />
            Whether that be databases, web design, or mobile development is up
            to the people I meet and the skills I build along the way. <br/>
            <b>All in all, my ultimate goal is to feel fulfilled by learning everyday and be a part of a community.</b>
          </p>
        </div>
        <div class="square3"></div>
      </div>
    </motion.div>
  );
}

export default About;
