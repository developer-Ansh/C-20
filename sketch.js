var fixrect;
var moverect


function setup() {
  createCanvas(800,400);
  fixrect = createSprite(400, 200, 30, 80);
  fixrect.shapeColor = "yellow";
  fixrect.debug = true;

  moverect = createSprite(400,400,80,30);
  moverect.shapeColor = "blue";
  moverect.debug = true; 
}

function draw() {
  background(0,0,0);

if(moverect.x - fixrect.x < moverect.width/2 + fixrect.width/2 
  && fixrect.x - moverect.x < fixrect.width/2 + moverect.width/2
  && moverect.y - fixrect.y < moverect.height/2 + fixrect.height/2 
  && fixrect.y - moverect.y < fixrect.height/2 + moverect.height/2 )
{
  moverect.shapeColor = "red";
}
else {
  moverect.shapeColor = "blue";
}

  // console.log(fixrect.x);
  console.log(moverect.x);

  moverect.x = World.mouseX;
  moverect.y = World.mouseY;

  drawSprites();
}