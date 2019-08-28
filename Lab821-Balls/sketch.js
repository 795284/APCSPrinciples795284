//  Zephyr Granger
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var b1, b2, b3;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  b1= new Ball(300,400, -3, -3);
  b2= new Ball(random(width),random(height), random(-5,5),random(-5,5));
  b3= new Ball(random(width),random(height), random(-5,5),random(-5,5));
}

//  The draw function is called @ 30 fps
function draw() {
//   background(this.p);
  background(20,20,20);
  b1.run();
  b2.run();
  b3.run();
}
