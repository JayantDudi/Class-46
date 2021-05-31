var Dog,DOG,BONE,BOX,ground,BoxGroup,foodGroup;
var gameState,Score;
var invisibleg;

function preload(){
  DOG=loadAnimation("Dog1.png","Dog2.png");
  BONE=loadImage("bone.png")
  BOX = loadImage("box.png")
}


function setup() {
  createCanvas(displayWidth,450);

 Dog  = createSprite(100,360,20,29);
 Dog.addAnimation("dog",DOG);
Dog.scale=0.2;
Dog.setCollider("rectangle",0,0,Dog.width,Dog.height);

 

ground = createSprite(620,400,1500,15);
ground.x = ground.width /2;
  
ground.shapeColor="brown";


BoxGroup = new Group();
foodGroup = new Group();

invisibleg = createSprite(620,410,1500,15);
invisibleg.visible = false ;




Score=0;
  

  
  

  
}

function draw() {
  background("yellow");

  if(Score<-10){
    foodGroup.destroyEach();
    BoxGroup.destroyEach();
    Dog.destroy();
    foodGroup.velocityX=120;
    BoxGroup.velocityX=120;
    foodGroup.setLifetime=0;
    BoxGroup.setLifetime=0;
    background("red");
    textSize(50);
    text("You loose , Game Ended",500,250);
  }

    

  textSize(25);
  text("Score : "+Score,700,100);

  Dog.collide(invisibleg);

  if(Score>50){
    foodGroup.destroyEach();
    BoxGroup.destroyEach();
    Dog.destroy();
    foodGroup.velocityX=120;
    BoxGroup.velocityX=120;
    foodGroup.setLifetime=0;
    BoxGroup.setLifetime=0;
    background("blue");
    textSize(50);
    
    text(" You won , Game Ended",500,250);
    
    }

  
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  rand = Math.round(random(1,4));
    if(frameCount%80===0){
        boneCreatedFrame=frameCount;
        bone = createSprite(1400,random(20,360) , 30, 40);
        bone.addImage(BONE);
        bone.scale=0.06;
        bone.velocityX = -3;
        bone.setCollider("rectangle",0,0,bone.width,bone.height);
        bone.lifetime=450;
        
        foodGroup.add(bone);
    }

    rand = Math.round(random(1,4));
    if(frameCount%97===0){
        boxCreatedFrame=frameCount;
        box = createSprite(random(800,1400),335 , 30, 40);
        box.addImage(BOX);
        box.scale=0.8;
        box.velocityX = -4;
        box.setCollider("rectangle",0,0,box.width,box.height);
        BoxGroup.add(box);
    }


 
    if(Dog.isTouching(foodGroup)){
      Score=Score+0.2;
      Math.round(Score);
    }

    if(keyDown("space")&& Dog.y >= 100) {
      Dog.velocityY = -12;
     
  }

  Dog.velocityY = Dog.velocityY + 0.8

  if(Dog.isTouching(BoxGroup)){
    Score=Score-0.1;
  }





  //text(mouseX+","+mouseY,mouseX,mouseY)
 


  drawSprites();

}

