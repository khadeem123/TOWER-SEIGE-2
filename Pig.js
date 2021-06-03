class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility=225;
  }
  display(){
   
    if(this.body.speed<3){
      super.display();
   }
   else{
     push()
    //this.Visibility=this.Visibility-10;
    //tint(255,this.Visibility);
    //image(this.image,this.body.position.x,this.body.position.y,50,50);
    this.image=loadImage("sprites/piggy.png")
    pop();
   // World.remove(world,this.body);
    
   } 
  }


};