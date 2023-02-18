var boy,diamonds,sword;
var boyImg,diamondsImg,coinImg,swordImg;
var treasureCollection = 0;
var diamondsG;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  diamondsImg = loadImage("diamonds.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);

boy = createSprite(70,580,20,20);
boy.addAnimation("BoyRunning",boyImg);
boy.scale=0.08;
  
diamondsG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(51);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
    createDiamonds();
    createSword();

     if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        console.log("Game Over...");
        gameState=END;

        boy.addAnimation("SahilRunning",endImg);
       
        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
       
        diamondsG.destroy();
        swordGroup.destroy();
        
        diamondsG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);
  }

}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
