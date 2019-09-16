let time = 0;
let shape = [];

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
  shape.unshift( [x,y] );

  stroke(255);
  line(0,0,x,y);
  ellipse(x, y, 20);

  beginShape();
  for (let i = 0; i < shape.length; i++) {
    stroke(255);
    vertex(shape[i][0]+100,shape[i][1]);
  }
  endShape();

  if (shape.length > 20) {
    shape.splice(-1,2);
  }



  time -= 0.1;
}