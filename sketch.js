
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var sp
var a
var b
function preload(){
	p1 = loadImage("image/s1.png")
	spa = loadImage("image/space.png")
	bu = loadImage("image/bullet2.png")
	astro= loadImage("image/redbubble.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	sp = createSprite(400,350,20,20)
	sp.addImage(spa);
	sp.scale = 2

    a = createSprite(400,650,20,20)
	a.addImage(p1);
    
    eGroup = new Group
	bGroup = new Group

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  drawSprites();

  if(keyDown("space")) {
	  b = createSprite(a.x , 650 , 5 , 5)
	  b.addImage(bu);
	  b.scale = 0.1
	  b.velocityY = -3
	  b.lifetime = 800/3
	  bGroup.add(b)
  }

  if (keyDown(LEFT_ARROW)) {
	  a.x = a.x - 10
  }
  if (keyDown(RIGHT_ARROW)) {
	  a.x = a.x + 10
}
 
if (frameCount % 100 === 0) {
	var e = createSprite(random(5,795) , 0 , 10 , 10)
	e.velocityY = 3
	e.addImage(astro)
	e.scale = random(0.07,0.1)
	eGroup.add(e)
	if (eGroup.isTouching(bGroup)) {
		eGroup.lifetime = 0
	}
}
}
