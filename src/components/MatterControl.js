import React from "react";
import Sketch from "react-p5";
import Matter from "matter-js";
import { motion } from "framer-motion";

let Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;

let engine;
let world;
let boxes = [];
let ground1;
let ground2;
let canvas;
let mouseConstraint;

let x = 50;
const y = 50;

function MatterControl() {

  function Box(x, y, w, h, color, e) {
    this.body = Bodies.rectangle(x, y, w, h);
    this.body.restitution = 0.2;
    this.body.setDensity = 0.01;
    this.w = w;
    this.h = h;
    World.add(world, this.body);

    this.show = function () {
      this.body.render.visible = true;
      let pos = this.body.position;
      let angle = this.body.angle;

      e.fill(color);
      e.noStroke();
      e.push();
      e.translate(pos.x, pos.y);
      e.rectMode(e.CENTER);
      e.rotate(angle);
      e.rect(0, 0, this.w, this.h);
      e.pop();
    };

    this.isOffScreen = function(e) {
      let pos = this.body.position;
      return (pos.y > 1500)
    }

  }

  const setup = (p5, canvasParentRef) => {
    canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    canvas.position(0, 0);
    engine = Engine.create();
    world = engine.world;
    world.gravity.y = 1;
      
    ground1 = Bodies.rectangle(p5.width / 2, 900, p5.width / 2, 30, {
      isStatic: true,
    });
    
    World.add(world, ground1);

    let canvasMouse = Mouse.create(canvas.elt)
    let options = {
        mouse: canvasMouse
    }
    mouseConstraint = MouseConstraint.create(engine, options)
  };

  const mp = (e) => {
    boxes.push(
      new Box(
        e.mouseX,
        e.mouseY,
        e.random(5, 40),
        e.random(5, 40),
        e.random(100, 255),
        e
      )
    );
  };

  const draw = (p5) => {
    p5.background('#f7f7f7'); 
    Engine.update(engine);
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].show();
      if (boxes[i].isOffScreen()) {
        boxes.splice(i, 1);
        i--
      }
    }
    console.log(boxes.length)
  };
  return (
    <motion.div>
      <Sketch setup={setup} draw={draw} mouseDragged={mp} />
      
    </motion.div>
  );
}

export default MatterControl;
