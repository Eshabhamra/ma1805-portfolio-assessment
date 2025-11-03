//let circle

// moving pink circle
let x = 50;
let speed = 7; 

let x2 = 30;
let speed2 = 10; 

function setup() {
  createCanvas(windowWidth, windowHeight); 
}


function draw() {
  background(255); 

  // draw the pink circle
  fill(255, 105, 180); // pink
  noStroke();
  ellipse(x, height / 2, 80, 80); 
  x = x + speed; // move hte circle
  // bounce back when hitting edges
  if (x > width - 40 || x < 40) {
    speed = -speed;
  }


  // draw the purple circle
  fill(255, 105, 500); // pink
  noStroke();
  ellipse(x2, 300, 80, 80); 
  x2 = x2 + speed2; // move hte circle
  // bounce back when hitting edges
  if (x2 > width - 40 || x2 < 40) {
    speed2 = -speed2;
  }
}
