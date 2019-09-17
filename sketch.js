let time = 0;
let shape = [[]];
let hue = Math.floor(Math.random() * 360);

var w = window.innerWidth;
var h = window.innerHeight;

function setup() {
  createCanvas(w, h);
}

function draw() {
  background(0);
  translate(w/2, h/2);
  let radius = h/6;

  stroke(0,100,200,100);
  noFill();
  ellipse(0, 0, radius * 2 * 4 / PI);

  let x = 0;
  let y = 0;
  
  for (let i = 0; i<20; i++) {
    let prevx = x;
    let prevy = y;

    let n = i * 2 + 1;
    let radius = h/6 * (4 / (n * PI));
    x += radius * cos(n * 2 * PI * time);
    y += radius * sin(n * 2 * PI * time);

    stroke(0,100,200, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    stroke(255);
    line(prevx, prevy, x, y);    
       
  }
  shape.push([x,y]);

  noFill();
  beginShape();
  for (let i = 0; i < shape.length; i++) {
    stroke(color(`hsl(${hue},100%,50%)`));
    vertex(shape[i][0],shape[i][1]);
  }
  endShape();

  if (shape.length>500) {
    shape.shift();
  }


  if (Math.round(time*1000000)%1000000 == 0) {
    hue = Math.floor(Math.random() * 360);
  }


  time -= 0.001;
}