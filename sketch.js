
let time = 0;
let wave = [];
let path = [];

var w = window.innerWidth;
var h = window.innerHeight;

function setup() {
  createCanvas(w, h);
  slider = createSlider(1, 50, 5);
}

function draw() {
  background(0);
  translate(w/3, h/2);

  let x = 0;
  let y = 0;

  for (let i = 0; i < 50; i++) {
    let prevx = x;
    let prevy = y;

    let n = i * 2 + 1;
    let radius = 175 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    //fill(255);
    stroke(255);
    line(prevx, prevy, x, y);
    //ellipse(x, y, 8);
  }
  wave.unshift(y);


  translate(w/2, 0);
  line(x - w/2, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += 0.005;


  if (wave.length > w) {
    wave.pop();
  }
}
