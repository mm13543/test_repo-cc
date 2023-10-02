let shapeX, shapeY; // Position of the shape
let easeAmount = 0.1; // Easing amount (adjust for desired effect)

function setup() {
  createCanvas(400, 400);
  shapeX = width / 2;
  shapeY = height / 2;
}

function draw() {
  background(220);
  
  // Calculate the direction and distance to the mouse
  let dx = mouseX - shapeX;
  let dy = mouseY - shapeY;
  
  // Use the easing function to make the shape move towards the mouse
  shapeX += dx * easeAmount;
  shapeY += dy * easeAmount;
  
  // Draw the shape (a simple ellipse in this case)
  fill(255, 0, 0); // Red color for attraction
  ellipse(shapeX, shapeY, 50, 50);
}
