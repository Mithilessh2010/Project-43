const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hr;
var mn;
var sc;

function setup() {
  createCanvas(450, 400);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  // clockbody = ellipse(200, 200, 100,100)

}

function draw() {
  background("black");
  Engine.update(engine);
  
  translate(200,200)


  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 60, 0, 360);

  // Second Hand
  push();
  rotate(scAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 80, 0);
  pop();

  // Minute Hand
  push();
  rotate(mnAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop()

  // Hour Hand
  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();

  noFill();
  stroke("white")
  strokeWeight(4);
 // ellipse(0, 0,250,250);

  stroke("lime")
  arc(0, 0, 250, 250, 0, scAngle);

  stroke("red")
  arc(0, 20, 250, 250, 0, mnAngle);

  stroke("blue")
  arc(0, 40, 250, 250, 0, hrAngle);

  drawSprites();

}