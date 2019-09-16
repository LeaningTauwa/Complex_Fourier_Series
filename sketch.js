let time = 0;

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
  creata
  time += 0.01;
}