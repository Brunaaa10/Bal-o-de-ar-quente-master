var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var jumpSong, dieSong;
var restart;
var obsBottom1, obsBottom2, obsBottom3;
var obsTop1, obsTop2;

function preload(){
  bgImg = loadImage("./assets/bg.png")

  balloonImg = loadAnimation("assets/balloon1.png","./assets/balloon2.png","./assets/balloon3.png");
  restart = loadImage("./assets/restart.png");
  obsBottom1 = loadImage("./assets/obsBottom1.png");
  obsBottom2 = loadImage("./assets/obsBottom2.png"); 
  obsBottom3 = loadImage("./assets/obsBottom3.png");

  obsTop1 = loadImage("./assets/obsTop1.png");
  obsTop2 = loadImage("./assets/obsTop2.png");


  jumpSong = loadSound("./assets/jump.mp3");
  dieSong = loadSound("./assets/die.mp3");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
//imagem de fundo
  bg = createSprite(width/2, height/2, width, height);
  bg.addImage(bgImg);
  bg.scale = 1.3

  //criar o solo superior e inferior
  bottomGround = createSprite(200,390,800,20);
  bottomGround.visible = false;

  topGround = createSprite(200,10,800,20);
  topGround.visible = false;
        
  //criar o balão     
  balloon = createSprite(100,200,20,50);
  balloon.addAnimation("balloon", balloonImg);
  balloon.scale = 0.7;

}

function draw() {
  
  background("black");
        
          //faça o balão de ar quente pular
          if(keyDown(RIGHT_ARROW)) {
            balloon.velocityX= 6;
            
          }
          if(keyDown(LEFT_ARROW)) {
            balloon.velocityX= -6 ;
            
          }
          if(keyDown("up")){
            setTimeout(() => {
              balloon.velocityY= -6
            }, 700);

            jumpSong.play();
            jumpSong.setVolume(0.09);
          }


          //adicione gravidade
           balloon.velocityY = balloon.velocityY+0.5;
   
        drawSprites();
        
}

function Reset(){

}
