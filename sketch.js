var fixedRect, movingRect;
var object1, object2


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

object1 = createSprite(800,200,50,80)
object1.shapeColor = "pink";
object1.debug = true;
object2 = createSprite(800,500,50,80)
object2.shapeColor = "blue";
object2.debug = true;

object1.velocityY = +3;
object2.velocityY = -2;


}

function draw() {
  background(0,0,0);  

 bounceoff(object1,object2) ;
  drawSprites();
}

function bounceoff(item1,item2) {

  if (item1.x- item2.x < item2.width/2 + item1.width/2
    && item2.x - item1.x < item2.width/2 + item1.width/2) {
  item1.velocityX = item1.velocityX * (-1);
  item2.velocityX = item2.velocityX * (-1);
}
if (item1.y - item2.y < item2.height/2 + item1.height/2
  && item2.y - item1.y < item2.height/2 + item1.height/2){
  item1.velocityY = item1.velocityY * (-1);
  item2.velocityY = item2.velocityY * (-1);
}
   }














