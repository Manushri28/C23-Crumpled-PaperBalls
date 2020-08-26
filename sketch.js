const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var binPart1, binPart2, binPart3;
var engine, world;
var paperBall;
 

function setup()
{
  createCanvas(900, 500);
  
  engine = Engine.create();
  world = engine.world;
  
  paperBall = new CrumpPaper (170, 445, 40);
  
   ground = new Ground (450, 475, 900, 12);

	binPart1 = new ThrowBin (620,375,20, 150);
	binPart2 = new ThrowBin (690,460,160, 20);
  binPart3 = new ThrowBin (760,375,20, 150);

  Engine.run(engine);
  
}

function draw() {

  background(0);
  
  paperBall.display();

  binPart1.display();
  binPart2.display();
  binPart3.display();

  ground.display();  

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
     Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:0.2,y:-0.21});
  }
}
