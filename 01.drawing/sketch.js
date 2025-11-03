function setup() {
  createCanvas(400, 400);
  background(255, 192, 203)
}

function draw() {
  background(220);
  circle(50,50,50);
  circle(60,50,50);
  fill(255,10,70)
  circle(70,50,50);
  circle(80,50,50);
  circle(90,50,50);
  circle(60,50,50);
  fill(255,5,70)
  circle(100,50,50);
  circle(120,50,50);
  circle(130,50,50);
  circle(140,50,50);

}
function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(255); // white background
  
  // Face
  fill(255, 182, 193); // light pink
  ellipse(width / 2, height / 2, 250, 250); // main circle
  
  // Eyes
  fill(255, 105, 180); // darker pink
  ellipse(width / 2 - 60, height / 2 - 40, 40, 40); // left eye
  ellipse(width / 2 + 60, height / 2 - 40, 40, 40); // right eye
  
  // Smile
  noFill();
  stroke(255, 105, 180);
  strokeWeight(10);
  arc(width / 2, height / 2 + 20, 120, 80, 0, PI); // smile arc
}
