import React from "react";
// import { useState } from 'react';
import Contact from './Contact';
import Footer from './Footer'
import WorkPage from './WorkPage';
import Hygge from './WorkComponents/HyggeControl';
import Splash from './Splash';
import Header from "./Header";
import About from './About';
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import * as v from "./PageVariants";

function App() {

  const location = useLocation();

    return (
      <div settle={{ height: "100vh" }}>
          <Header />
          <main
            // className="col-6 col-sm-8 col-md-10 py-5"
            style={{ position: "absolute" }}
          >
            <AnimatePresence>
              <Switch location={location} key={location.pathname}>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/work" component={Work} />
                <Route path="/" component={Splash}/>
              </Switch>
            </AnimatePresence>
          </main>
          <Footer/>
      </div>
    );

  }


function Work() {

  return (
    <motion.div
    style={{position: "absolute", width: "100vw"}}
      initial="initial"
      animate="in"
      exit="out"
      variants={v.pageVariants}
      transition={v.pageTransitions}
      className="bg-transparent"
    >
      <WorkPage />
      <Switch>
        <Route path="/hygge" component={Hygge}/>
      </Switch>
    </motion.div>
  );
}

export default App;
