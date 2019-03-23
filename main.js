var backgrounColor;
var x = 50;
var y = 50;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  backgroundColor = color(255, 0, 220);
  
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(251, 255, 232);
  }
  background(backgroundColor);
  ellipse(x, y, 25, 25);
  x = x + 1;
  y = y + 1;
}