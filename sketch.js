
var jaxon ;
var path;
function preload(){
jaxon_Img = loadAnimation("Runner-1.png","Runner-2.png");
path_image = loadImage("path.png"); 
}

function setup(){
  createCanvas(400,400);
  


jaxon = createSprite(180,340,50,170);
jaxon.addAnimation("running",jaxon_Img);

path = createSprite(200,200);
path.addImage(path_image);
path.velocityY = 4;
path.scale = 1.2;

Leftboundary = createSprite(0,300,100,600);
Rightboundary = createSprite(390,300,80,600);
Leftboundary.visible = false;
Rightboundary.visible = false; 
  
}

function draw() {
  background(0);
  
  path.velocityY = 4;

  jaxon.x= World.mouseX;
 
  if(path.y > 400 ) {
    path.y = height/2;
  }

  jaxon.collide(Leftboundary);
  jaxon.collide(Rightboundary);
  edges = createEdgeSprites();
  jaxon.collide(edges);
  drawSprites();
}
