//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 150);
  fill(200, 30, 350);


}

//  The draw function is called @ 30 fps
function draw() {
  fill(200,0,200)
  rect(400,400,250,250)

fill(80,200,0)
triangle(400,400,550,600,500,200)
}
