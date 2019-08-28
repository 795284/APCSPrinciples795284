//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
var x;

}
var y;
y=0;
x=1;
//  The draw function is called @ 30 fps
function draw() {
x=x+1;
y=y+1.25
  ellipse(x,y,200,250)

  fill(10,60,35)
if(x=800){
  ellipse(x,y,200,250)
y=y-1
x=x-1

}
}
