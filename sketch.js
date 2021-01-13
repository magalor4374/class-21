function setup() {
  createCanvas(800,400);
 fixedR= createSprite(400, 200, 50, 50);
 movingR= createSprite(300, 200, 90, 50);
 fixedR2= createSprite(100, 250, 60, 65);
 fixedR3= createSprite(200, 300, 70, 30);
 fixedR4= createSprite(300, 100, 40, 54);
 fixedR2.velocityX=5
}

function draw() {
  background(255,255,255);  
  movingR.x=mouseX;
  movingR.y=mouseY;
  if(isTouching(movingR,fixedR3)){
    movingR.shapeColor="red";
    fixedR3.shapeColor="red";
  }
  else{
    movingR.shapeColor="green";
    fixedR3.shapeColor="green";

  }
  bounceOff(fixedR,fixedR2)
  drawSprites();
}

