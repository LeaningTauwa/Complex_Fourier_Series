let time = 0;
let shape = [[]];
let hue = Math.floor(Math.random() * 360);

var text = '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="568.88px" width="588.42px"><path style="fill:black; stroke:none" d="M 10.499686,177.03840 L 31.174931,178.56990 C 52.615925,154.32116 61.039171,82.595924 187.38789,96.634671 C 182.79339,403.95560 48.021426,436.37234 56.444675,499.41907 C 59.507674,535.15406 87.840417,557.10556 118.47041,558.38181 C 215.21014,555.06356 210.87089,424.63084 240.99038,95.868921 L 365.80760,95.868921 C 359.17110,211.75239 341.04836,327.63586 339.00636,441.22208 C 340.53786,516.77606 386.48285,557.10556 446.97708,557.61606 C 546.52456,560.93431 577.92030,444.79558 577.92030,395.27709 L 556.47931,395.27710 C 554.43731,436.11709 534.78306,465.47083 492.92207,467.25758 C 378.82535,468.78908 441.61683,266.63113 442.38258,97.400421 L 577.92030,98.166171 L 577.15455,11.636437 C 13.807491,8.9075799 85.312284,-2.1366151 10.499686,177.03840 z" /></svg>';
var parser = new DOMParser();
var svg = parser.parseFromString(text,"text/xml");
var pathXMLData = svg.getElementsByTagName("path")[0].getAttribute("d");

alert("yep4");
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
  
  for (let i = 0; i<25; i++) {
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