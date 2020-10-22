var fixedRect, movingRect,box1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  box1 = createSprite(500, 200, 50, 80);
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,box1)){

movingRect.shapeColor = "red";
box1.shapeColor = "red";
  }
  else{
movingRect.shapeColor = "green";
box1.shapeColor = "green";

  }
  drawSprites();
}





function isTouching(object1,object2)
{

if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x -object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
    
    return true;

  }
  else {
   return false;
  }


}
