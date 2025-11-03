let img;

function preload() {
  img = loadImage('nightsky.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Keep image proportional and visible
  let scale = min(width / img.width, height / img.height);
  let w = img.width * scale;
  let h = img.height * scale;

  let x = (width - w) / 2;
  let y = (height - h) / 2;

  image(img, x, y, w, h);
}

// Optional: resize canvas automatically if window changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

