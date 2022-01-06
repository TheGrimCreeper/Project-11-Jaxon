var boy
var pathImg,boyImg

var PLAY=1;
function preload(){
  //pre-load images pathImg = loadImage("Road.png");
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  
  
  
 
  
}

function setup(){
  createCanvas(600,800);

path=createSprite(width/2,height/2);
path.addImage(pathImg);
path.velocityY = 4;

boy = createSprite(70,750,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;


}

function draw() {
  background(0);
    boy.x = World.mouseX;
    
    edges= createEdgeSprites();
    boy.collide(edges);
  
    //code to reset the background
    if(path.y > 400 ){
      path.y = 300;
    }
    drawSprites();
}
