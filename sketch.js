let angle = 0;
let graphics;
let hello;
let bg;
let theta = 0;

function preload() {
  pic = loadImage('https://i.postimg.cc/VLmfFTv3/pic2.jpg');
}

function setup() {
  bg = color('hsba(0, 0%, 0%, 0)');
  createCanvas(800, 800, WEBGL);
  graphics = createGraphics(100, 100);
  graphics.background(255);
  graphics.noStroke();
}

function draw() {
  background(bg);
  noStroke();
  ambientLight(300);
  directionalLight( 255, 255, 255, 0, 0, 1);
  push();
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  texture(pic);
  box(250);
  pop();
  theta += 0.009;
}
