class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
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
};
