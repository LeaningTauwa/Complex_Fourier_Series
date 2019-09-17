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
  ellipse(0, 0, radius * 2 * 4 / PI);

  let x = 0;
  let y = 0;
  
  for (let i = 0; i<4; i++) {
    let prevx = x;
    let prevy = y;

    let n = 2*n+1;

    let radius = h/6 * ( 4 / ( n * PI ));
    let x += radius * cos(n * time);
    let y += radius * sin(n * time);

    shape.unshift( [x,y] );
    
    stroke(255,100);
    noFill();
    ellipse(prevx, prevy, radius * 2);
    stroke(255);
    line(prevx,prevy,x,y);
    
  }
  beginShape();
  for (let i = 0; i < shape.length; i++) {
    stroke(255);
    vertex(shape[i][0]+100,shape[i][1]);
  }
  endShape();

  if (shape.length > 50) {
    shape.splice(-1,2);
  }

  time -= 0.1;
}