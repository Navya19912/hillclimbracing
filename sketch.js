var playerimg, player;
var logo, logoimg;
var restart, restartimg;
var start, startimg;
var gameover, gameoverimg;
var bg1, bg1img;
var bat, batimg;
var bomb, bombimg;
var hurdles, hurdlesimg;
var landMonster, landMonsterimg;
var redspikes, redspikesimg;
var skeleton, skeletonimg;
var snail, snailimg;
var snake, snakeimg;
var spikeRoller,spikeRollerimg;
var ground;
var obstacle,obstaclegrp;
var score;
var gameState=PLAY;
var PLAY=1;
var END=0; 

function preload (){
playerimg=loadImage("player1A.png");
logoimg=loadImage("logo1.png");
restartimg=loadImage("restart.png");
startimg=loadImage("start.png");
gameoverimg=loadImage("gameover.png")
bg1img=loadImage("bg2.jpg");
bombimg=loadImage("bomb.gif");
hurdlesimg=loadImage("hurdles.png");
landMonster=loadImage("landMonster.gif");
redspikes=loadImage("redspikes.png");
skeletonimg=loadImage("skeleton.gif");
snailimg=loadImage("snail.gif");
snakeimg=loadImage("snake.png");
spikeRoller=loadImage("spikeRoller.gif");
bat=loadImage("bat.gif");
}

function setup(){
createCanvas(windowWidth,windowHeight);
bg=createSprite(0,0,windowWidth,windowHeight); 
bg.addImage (bg1img);
bg.x=bg.width/2;
bg.scale=2.3;

player=createSprite(100,450,100,50);
player.addImage(playerimg);
player.scale=0.5;

ground=createSprite(100,460,windowWidth,20);
ground.visible=false;

logo=createSprite(windowWidth/2,windowHeight/2-100);
logo.addImage(logoimg);
logo.scale=1.4;

start=createSprite(windowWidth/2,windowHeight/2+150);
start.addImage(startimg);
start.scale=1.1;


gameover=createSprite(windowWidth/2,windowHeight/2-100);
gameover.addImage(gameoverimg);
gameover.scale=1.4;

restart=createSprite(windowWidth/2,windowHeight/2+90);
restart.addImage(restartimg);
restart.scale=0.3;

restart.visible=false;
gameover.visible=false;
start.visible=true;
logo.visible=true;

obstaclegrp= new Group();
score=0;
 }

function  draw(){


if (mousePressedOver(start)){
    gameState=PLAY;
    start.visible=false;
    logo.visible=false;
    player.velocityY=-20
    bg.velocityX=-9;
}

if (gameState===PLAY){

if(bg.x<0){
    bg.x=bg.width/2;
}
if(keyDown("space")){
    player.velocityY=-20;
}
player.velocityY=player.velocityY+2;

//if(obstaclegrp.isTouching(player)){
 //   gameState=END;
//}

obstacle();
}
//else if(gameState===END){
  //  gameover.visible=true;
    //restart.visible=true;
    //player.velocityX=0;
    //player.velocityY=0;
    //ground.velocityX=0;
    //bg.velocityX=0;
    //obstaclegrp.setVelocityXEach(0);
    //obstaclegrp.setVelocityYEach(0);
    //obstaclegrp.destroyEach();
//}
player.collide(ground);
drawSprites();

}

function obstacle(){
    if(frameCount%100===0){
        var obs=createSprite(1150,450,50,70);
        obs.velocityX=-6;
        rand=Math.round(random(1,5));
        switch (rand){
            case 1: obs.addImage(bombimg);
            obs.scale=0.5;
            break;

            case 2: obs.addImage(hurdlesimg);
            obs.scale=0.5;
            break;

            case 3: obs.addImage(landMonster);
            obs.scale=0.5;
            break;

            case 4: obs.addImage(redSpikes);
            obs.scale=0.5;
            break;

            case 5: obs.addImage(skeletonimg);
            obs.scale=0.5;
            break;
default: break;
        }
obstaclegrp.add(obs);
    }
}