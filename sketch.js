let time = 0;
let shapex = [];
let shapey = [];

var w = window.innerWidth;
var h = window.innerHeight;

function setup() {
  createCanvas(w, h);
}

function draw() {
  background(0);
  translate(w/2, h/2);
  let radius = h/6;

  stroke(255);
  noFill();
  ellipse(0, 0, radius * 2);

  let x = radius * cos(time);
  let y = radius * sin(time);
  shapex.push(x);
  shapey.push(y);

  stroke(255);
  line(0,0,x,y);
  ellipse(x, y, 8);

  beginShape();
  for (let i = 0; i < shapex.length; i++) {
    stroke(255);
    vertex(shapex[i]+100,shapey[i]);
  }
  endShape();

  time -= 0.1;
}