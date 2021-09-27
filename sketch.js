
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ninja1
var bg

function preload(){
  jump=loadAnimation("ninjaJump1.png","ninjaJump2.png","ninjaJump3.png","ninjaJump4.png")
  run=loadAnimation("ninjaRun1.png","ninjaRun2.png","ninjaRun3.png","ninjaRun4.png","ninjaRun5.png","ninjaRun6.png","ninjaRun7.png","ninjaRun8.png","ninjaRun9.png","ninjaRun10.png")
  ninja_idle=loadAnimation("ninja1.png")
  //ninja_idle=loadImage("ninja1.png")
  bg=loadImage("bg.png")
  spikesImg=loadImage("spikes.png")
  spikeImg=loadImage("spike.png")
  treasureImg=loadImage("treasure.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight-4);
  jump.frameDelay = 19;

  engine = Engine.create();
  world = engine.world;
  ground= new Ground(width/8+100,height-5,width/4+200,10)
  ground1= new Ground(width-60,height-5,width/2-30,10)
  ground2= new Ground(width/2-50,height/2-5,width-100,10)
  wall= new Ground(-5,height/2,10,height)
  wall2= new Ground(width+5,height/2,10,height)
  ground3= new Ground(500,height-130,150,10)
  ground4= new Ground(500,height-260,50,10)
  ground5= new Ground(width-75,height-130,150,10)
  ninja=Bodies.rectangle(300,height-200,50,100);
  
  World.add(world,ninja)

  
  ninja1 = createSprite(ninja.position.x,ninja.position.y,50,100);
  ninja1.scale=0.7
  ninja1.addAnimation("idle",ninja_idle)
  ninja1.addAnimation("jump",jump)
  ninja1.addAnimation("run",run)

  spikes1=createSprite(500,height-35)
  spikes1.addImage("spikes",spikesImg)
  spikes2=createSprite(500,430)
  spikes2.addImage("spikes",spikesImg)
  spikes3=createSprite(width-500,430)
  spikes3.addImage("spikes",spikesImg)

  spike1=createSprite(500,height-290)
  spike1.addImage("spike",spikeImg)

  treasure=createSprite(100,430)
  treasure.addImage(treasureImg)
  treasure.scale=0.2
  var render = Matter.Render.create({ element:document.body, engine:engine, options: { width:windowWidth, height:windowHeight, wireframes:false } }); Matter.Render.run(render);
  
}


function draw() 
{
  background(bg);
  Engine.update(engine);
  ground.show()
  ground1.show()
  ground2.show()
  ground3.show()
  ground4.show()
  ground5.show()
  drawSprites();
  ninja1.position.x=ninja.position.x
  ninja1.position.y=ninja.position.y

  if(keyDown("RIGHT_ARROW")){
    //Body.applyForce(ninja,ninja.position,{x:0.007,y:0})
    Body.translate(ninja,{x:10,y:0})
    ninja1.changeAnimation("run") 
    ninja1.mirrorX(1)
  }
  if(keyDown("LEFT_ARROW")){
    Body.translate(ninja,{x:-10,y:0})
    ninja1.changeAnimation("run") 
    ninja1.mirrorX(-1)
  }
  


  if(ninja1.y>height-70){
  if(keyDown("SPACE")){
    Body.applyForce(ninja,ninja.position,{x:0,y:-0.1})
    ninja1.changeAnimation("jump")
  }
 }

}

function keyReleased() {
  if (keyCode === RIGHT_ARROW||LEFT_ARROW){
    ninja1.changeAnimation("idle")
  }
  
}  
