var PLAY=1
var END=0
var gameState=1
var sword , swordImage
var fruit , fruit1, fruit2 , fruit3 , fruit4 , fruitGroup
var enemy , enemyS , enemyGroup
var gameover ,gameOver

function preload(){
  
  swordImage = loadImage("sword.png")
  fruit1= loadImage("fruit1.png")
  fruit2 =loadImage("fruit2.png")
  fruit3= loadImage("fruit3.png")
  fruit4= loadImage("fruit4.png")
  enemyS = loadAnimation("alien1.png","alien2.png")
  gameOver=loadImage("gameover.png")
}

function setup(){
  createCanvas(600,600)
  
  sword = createSprite(40,200,20,20)
  sword.addImage(swordImage)
  sword.scale = 0.7
  
  score=0;
  fruitGroup= new Group();
  enemyGroup= new Group();
  
}

function draw(){
background('lightblue')
  
  if(gameState===PLAY){
    
    
    fruits();
    Enemy();
    
    sword.y=World.mouseY
  sword.x=World.mouseX
    
    if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach()
      score=score+2
    }
    else{
      
    
      if(sword.isTouching(enemyGroup)){
        gameState=END
     enemyGroup.destroyEach()
    fruitGroup.destroyEach()
  fruitGroup.setVelocityXEach(0)
  enemyGroup.setVelocityXEach(0)
  sword.addImage(gameOver)
  sword.x=200
  sword.y=200
}
  
    }
  }
  text('Score:'+score,500,50)
  
  drawSprites()
}

function fruits(){
  if(World.frameCount%80===0){
    fruit = createSprite(400,200,20,20)
    fruit.scale=0.2
    r=Math.round(random(1,4))
    if (r == 1){
      fruit.addImage(fruit1)
    }else if (r == 2){
      fruit.addImage(fruit2)
    }else if (r == 3){
      fruit.addImage(fruit3)
    }else {
      fruit.addImage(fruit4)
    }
    
    fruit.y=Math.round(random(50,340))
    fruit.velocityX=-6
    fruit.setLifetime=100
    
    fruitGroup.add(fruit)
  }
}

function Enemy(){
  if(World.frameCount%200===0){
    enemy = createSprite(500,100,20,20)
    enemy.addAnimation("enemyS",enemyS)
    enemy.y=Math.round(random(100,300))
    enemy.velocityX=-7
    enemy.setLifetime=50
    
    enemyGroup.add(enemy)
  }
}
