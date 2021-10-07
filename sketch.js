let mic;
var bubbles = [];

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(247, 215, 219);
  fill(50);
  text("Take a sip!", width / 2, 20);
  push();
  translate(width * 0.25, height * 0.5);

  ellipse(mouseX, 16, 33, 33); // Top circle
  ellipse(mouseX / 2, 50, 33, 33); // Middle circle
  ellipse(mouseX * 2, 84, 33, 33); // Bottom circle
  pop();

  micLevel = mic.getLevel();
  let y = height - micLevel * height;
  console.log(mic.getLevel());

  push();
  translate(0, mic.getLevel() * -800); //straw
  beginShape();
  strokeWeight(18);
  vertex(width * 0.5, height * 0.1);
  vertex(width * 0.5, height * 0.85);
  endShape(CLOSE);
  pop();

  beginShape();
  vertex(width * 0.25, height * 0.25);
  vertex(width * 0.3, height * 0.85);
  endShape(CLOSE);

  beginShape();
  vertex(width * 0.75, height * 0.25);
  vertex(width * 0.7, height * 0.85);
  endShape(CLOSE);

  push();
  fill(245, 237, 238);
  ellipse(width * 0.5, height * 0.25, 200, 10);
  pop();

  fill(240, 205, 125, 200);
  ellipse(width * 0.5, height * 0.45, 185, 10);

  fill(240, 205, 125, 150);
  ellipse(width * 0.5, height * 0.85, 160, 20);

  push();
  noStroke();
  fill(240, 205, 125, 150); //tea
  quad(
    width * 0.25,
    height * 0.45,
    width * 0.75,
    height * 0.45,
    width * 0.71,
    height * 0.85,
    width * 0.25,
    height * 0.85
  );
  pop();

  push(); //background
  noStroke();
  beginShape();
  // Exterior part of cup, clockwise winding
  fill(247, 215, 219);
  vertex(0, height * 0.25);
  vertex(400, height * 0.25);
  vertex(400, height);
  vertex(0, height);
  // Interior part of shape, counter-clockwise winding
  beginContour();
  vertex(100, 100);
  vertex(120, 350);
  vertex(280, 350);
  vertex(300, 100);
  endContour();
  endShape(CLOSE);
  pop();

  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

function Bubble(x, y) {
  this.x = x;
  this.y = y;

  this.display = function () {
    fill(237, 34, 93);
    ellipse(this.x, this.y, 40, 80);
  };

  this.move = function () {
    this.x = this.x + random(4, -4);
    this.y = this.y - 0.5;
  };
}
