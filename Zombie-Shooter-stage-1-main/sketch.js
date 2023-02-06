var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
  heart_3 = loadImage("assets/heart_3.png")
  heart_2 = loadImage("assets/heart_2.png")
  heart_1 = loadImage("assets/heart_1.png")

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  zombie = loadImage("assets/zombie.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image

  zombie=createSprite(displayWidth/2,displayHeight/2+100,7,7)
  zombie.addImage(zombie)
  zombie.scale=0.4




  bg=createSprite(displayWidth/2,displayHeight/2+100,7,7)
  bg.addImage(bgImg)
  bg.scale=1.1

  player=createSprite(displayWidth/2-500,displayHeight/2+100,7,7)
  player.addImage(shooterImg)
  player.scale=0.4

















}

function draw() {
  background(0); 

  


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if(keyDown("RIGHT_ARROW")){
  player.x = player.x+30
}

//release bullets and change the image of shooter to shooting position when space is pressed


if(keyWentDown("space")){
  player.addImage(shooter_shooting)
}
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
drawSprites();

}
