function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(500,500);
  background(200);
  frameRate();
  angleMode(DEGREES);
}

function draw() {



  var x;
  var y;

  //translate(250, height/2);
  //
  //
  // x = sin(-frameCount*10) * 150;
  // y = cos(-frameCount*10) * 50;
  //
  // line(150, frameCount, x, y);

//DANDELION
textSize(12);
noStroke();
fill(255);
  text('Dandelion Sketches',60,60);
var r = random(100);
translate(mouseX, mouseY);
rotate(frameCount/24);

x = sin(-frameCount*10) * 30;
y = cos(-frameCount*10) * 30;

stroke(0);
  line(-x+15, -y+10, x, y);

if( frameCount == 570){
  noLoop();
}
}
