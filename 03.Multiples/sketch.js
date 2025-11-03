

/* 
Playing with mouse events: 
See https://p5js.org/reference/#/p5/mouseClicked 
*/

let select = 0; // Color of the shape
let size = 30; // Size of the shape
let rgba = [255, 182, 193, 40]; 

function setup() {
  noStroke(); 
  createCanvas(800, 800);
}

function draw() {
  fill(rgba);
  ellipse(mouseX, mouseY, size, size);
  if (select != 2) {
    size = random(10, 200);
  }
}

function mouseClicked() {
  console.log('select: ' + select); 
  const pastelPinks = [
    [255, 182, 193], // light pink
    [255, 192, 203], // pink
    [255, 209, 220], // very light pink
    [250, 160, 183], // rose pink
    [255, 175, 190]  // soft blush
  ];
  
  // Pick a random pastel pink
  let chosen = random(pastelPinks);
  rgba[0] = chosen[0];
  rgba[1] = chosen[1];
  rgba[2] = chosen[2];
  rgba[3] = random(20, 60); 

  select++;
  if (select >= 3) {
    console.log('reset select');
    select = 0;
  }

}