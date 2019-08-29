class Square{
constructor(a,b,ax,by){
this.a =a;
this.b=b;
this.ax=ax;
this.by=by;
this.clr= color(random(255),random(255), random(255));
}

run(){
  this.checkEdges();
  this.update();
  this.render();
}

checkEdges(){
  if(this.a <0){
    this.ax = -this.ax;
  }
  if(this.a > width){
    this.ax = -this.ax;
  }
  if(this.b <0){
    this.by = -this.by;
  }
  if(this.b > height){
    this.by = -this.by;
  }
}
update(){
  this.a = this.a + this.ax;
  this.b = this.b + this.by;
}
render(){
  fill(this.clr);
  square(this.a, this.b, 50,50);
}
}
