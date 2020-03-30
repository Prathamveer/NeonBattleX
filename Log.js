class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("box.png");
    Matter.Body.setAngle(this.body, angle);
  }
}