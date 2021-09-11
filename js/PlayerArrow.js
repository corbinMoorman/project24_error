class PlayerArrow {
  constructor(x, y, width, height, archerAngle) {
    var options = {
      isStatic: true,
      density: 0.1
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    this.archerAngle = archerAngle;
    this.velocity = 0;
    World.add(world, this.body);
  }
  
  //create a shoot function
  shoot(){
   var newAngle = playerArrows.angle -28;
   newAngle = newAngle*(3.14/180)
   var velocity = p5.Vector.fromAngle(newAngle)
   velocity.mult(0.3)
   Matter.Body.setStatic(this.body,false)
   Matter.Body.setVelocity(this.body,{x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)})
  
 }

  display() {
  
    var pos = this.body.position;
    var angle = this.body.angle;
    if(keyIsDown(UP_ARROW)&&this.angle < 70){
      this.angle += 1
    }
    if(keyIsDown(DOWN_ARROW)&&this.angle > - 30){
      this.angle -=1
    }
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
