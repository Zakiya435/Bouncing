function setup() {
  createCanvas(1200,800);
  movingrect = createSprite(100, 250, 20, 50);
  movingrect.shapeColor = "green";
  fixedrect = createSprite(100,200,40,50);
  fixedrect.shapeColor = "green";
}

function draw() 
{
  background(255,255,255); 
  movingrect.x = World.mouseX;
  fixedrect.y = World.mouseY;

  Bounce(movingrect,fixedrect);
  /*if((movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2)&&
  (fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2)&&
  (fixedrect.y - movingrect.y < fixedrect.width/2 + movingrect.width/2)&&
  (movingrect.y - fixedrect.y < movingrect.width/2 + fixedrect.width/2))

  
  {
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
  }
  else
  {
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";
  }*/

  /*if((movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2)&&
  (fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2))
{
   movingrect.velocityX = movingrect.velocityX * (-10);
   fixedrect.velocityX = fixedrect.velocityX * (-10);
}

 if((fixedrect.y - movingrect.y < fixedrect.width/2 + movingrect.width/2)&&
  (movingrect.y - fixedrect.y < movingrect.width/2 + fixedrect.width/2))
{
  movingrect.velocityY = movingrect.velocityY * (-10);
   fixedrect.velocityY = fixedrect.velocityY * (-10);
}*/
  drawSprites();
}
function Bounce(object1,object2)
{
  if((movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2)&&
  (fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2))
{
   movingrect.velocityX = movingrect.velocityX * (-10);
   fixedrect.velocityX = fixedrect.velocityX * (-10);
}

 if((fixedrect.y - movingrect.y < fixedrect.width/2 + movingrect.width/2)&&
  (movingrect.y - fixedrect.y < movingrect.width/2 + fixedrect.width/2))
{
  movingrect.velocityY = movingrect.velocityY * (-10);
   fixedrect.velocityY = fixedrect.velocityY * (-10);
}
}