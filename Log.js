class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
  display(){
    if(this.body.speed<4){
     super.display();
    }
    else{
      push();
      this.Visibility=this.Visibility-10;
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,20,height);
      pop();
      World.remove(world,this.body)
    }
  }
}