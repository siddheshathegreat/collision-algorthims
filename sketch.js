var a, b;


function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  a.shapeColor = "green";
  b = createSprite(400, 200,50, 30);
  b.shapeColor = "green";

}

function draw() {
  background(0);
b.x = World.mouseX;
b.y = World.mouseY;
//console.log(b.x - a.x);
if(b.x - a.x < a.width/2 + b.width/2 && a.x - b.x < a.width/2 + b.width/2
  && b.y - a.y < a.width/2 + b.width/2  && a.y - b.y < a.width/2 + b.width/2 ) {
  b.shapeColor = "red";
  a.shapeColor = "red";
  
}
else{
  b.shapeColor = "green";
  a.shapeColor = "green";
  
}
  drawSprites();
}
