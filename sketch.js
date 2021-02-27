var a,b;
var c,d;

function setup() {

  createCanvas(800,600);

  a=createSprite(200, 200, 50, 50);
  b=createSprite(200,100,50,50);
  c=createSprite(200,300,50,50);
  d=createSprite(200,400,50,50);

  a.shapeColor='green';
  b.shapeColor='green';
  c.shapeColor='green';
  d.shapeColor='green';
}

function draw() {
  background('orange');  
b.x=World.mouseX;
b.y=World.mouseY;

if(isTouching(a,b)){
  a.shapeColor='purple'
  b.shapeColor='purple'
}
else{
  a.shapeColor='green';
  b.shapeColor='green';
}
  

  drawSprites();
}