
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	 createCanvas(1200, 500);


	 engine = Engine.create();
	 world = engine.world;

	 //Create the Bodies Here.

	 ground1 = new Ground();

	 dustbinRect1 = new dustbin(1000, 430, 200, 20);
	 dustbinRect2 = new dustbin(900, 390, 20, 100);
	 dustbinRect3 = new dustbin(1100, 390, 20, 100);

	 var paper_options =
	 {
		
		restitution: 0.3,
		isStatic:false,
		density:1.2,
		friction:0.5

	
	 }

	 paper = Bodies.circle(200,430,20, paper_options);
     World.add(world,paper);


	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  dustbinRect1.display();
  dustbinRect2.display();
  dustbinRect3.display();

  ellipseMode(RADIUS);
  fill("pink")
  ellipse(paper.position.x, paper.position.y, 20, 20);
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Matter.Body.applyForce(paper, paper.position, {x:85, y:-65});
	   
	 }
   }

