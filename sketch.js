var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime=0;
var score;

function preload(){
   monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
 monkey = createSprite(50,315,20,20);
 monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
background(225);
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")) {
    monkey.velocityY = -15;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,240,40);
  
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,20,40);
  
  if(monkey.isTouching(bananaGroup)) {
    score = 1
  }
  spawnBanana();
   spawnOstacle();
  score = 0;
  
  drawSprites();
}
function spawnBanana() {
  if (frameCount % 120 === 0) {
  var banana = createSprite(500,120,40,10);
   banana.y = Math.round(random(100,200));
   banana.addImage(bananaImage);
  banana.velocityX = -3;
    banana.scale = 0.1;
    
    banana.lifetime = 200;
    
     banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
   bananaGroup.add(banana);

 }
}
function spawnOstacle() {
 if (frameCount % 130 === 0) {
   var obstacle = createSprite(390,330);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.1;
   obstacle.velocityX = -5;
   
    obstacle.lifetime = 200;
   
  obstacleGroup.add(obstacle);
 }
}