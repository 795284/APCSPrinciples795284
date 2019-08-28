//  Zephyr Granger
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins


//var b1, b2, b3;
var balls = []
var triangles = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
//  b1= new Ball(300,400, -3, -3);
//  b2= new Ball(random(width),random(height), random(-5,5),random(-5,5));
//  b3= new Ball(random(width),random(height), random(-5,5),random(-5,5));
loadballs(100);
loadtrianges(100);
}

//  The draw function is called @ 30 fps
function draw() {
//   background(this.p);
  background(20,20,20);
//  b1.run();
//  b2.run();
//  b3.run();
runBalls();
runTriangles();
}
function loadballs(n){
for(var i=0;i<n;i++){
//  balls[i] = new Ball(random(width), random(height), random(-6,6), random(-6,6))
  balls[i] = new Ball(400, 400, random(-6,6), random(-6,6))
}

}
function runBalls(){
  for(var i =0; i< balls.length;i++){
    balls[i].run();
  }
}

function loadtriangles(m){
  for(var o=0;o<m;o++){
    triangles[o] = new Triangle()
  }
}
