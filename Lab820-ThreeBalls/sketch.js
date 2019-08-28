//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}
var x;
var y;
y=1;
x=1;
//  The draw function is called @ 30 fps
function draw() {
x=x+1;
//y=y+1;
fill(10,60,35)
  ellipse(x,y,200,250)
if(x>==800){
  x=x-1
}

  fill(50,20,10)
  ellipse(200,150,150,300)
fill(50,10,5)
ellipse(700,700,100,100)
}
