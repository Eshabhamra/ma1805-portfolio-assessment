let person = 55;
let cold = false;
let home;
let kitchen = "heyyyyy "
console.log(home)
let x;
let ljygojt;

function setup() {
  createCanvas(400, 400);
let pet = "cat is big"
x = random(0,600)
y = random(90,400)
}

function draw() {
  //background(220);
  //circle
  fill(0,255,0);
  circle(50,200, person);
  person= width/2;
  console.log(person)
   // move the circle
  x = x + speed;
  // the text 
  textSize(30);
  fill(255,0,0);
  text(kitchen, 100,100)

}

// moving pink circle

let x = 50;
let speed = 3; 

function setup() {
  createCanvas(400, 300); 
}

{function draw() 
  background(255); 
  // draw the circle
  fill(255, 105, 180); // pink
  noStroke();
  ellipse(x, height / 2, 80, 80); 

  // move the circle
  x = x + speed;

  // bounce back when hitting edges
  if (x > width - 40 || x < 40) {
    speed = -speed;
  }

}