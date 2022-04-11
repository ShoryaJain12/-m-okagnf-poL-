class Cannon{
constructor(x,y,width,height,angle){
this.x=x;
this.height=height;
this.angle=angle;
this.width=width;
this.y=y;
this.cannonImage=loadImage("./assets/canon.png");
this.cannonbaseImage=loadImage("./assets/cannonBase.png");
}
display(){
  push();
  imageMode(CENTER);
  image(this.cannonImage,this.x,this.y,this.width,this.height);
  
  pop();
  image(this.cannonbaseImage,70,20,200,200);
} 

}
