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
