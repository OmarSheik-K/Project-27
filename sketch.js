const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5
var roofObject;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
    roofObject = new roof(400, 100, 300, 15);

	bobObject1 = new bob(280, 300, 60);
	//SCALE EVERYTHING UP
	rope1 = new rope(bobObject1.body, roofObject.body, 60*-2, 0)
	//pointA is the center of the bob, 

	bobObject2 = new bob(340, 300, 60);
	rope2 = new rope(bobObject2.body, roofObject.body, 60*-1, 0)

	bobObject3 = new bob(400, 300, 60);
	rope3 = new rope(bobObject3.body, roofObject.body, 60*0, 0)

	bobObject4 = new bob(460, 300, 60);
	rope4 = new rope(bobObject4.body, roofObject.body, 60*1, 0)

	bobObject5 = new bob(520, 300, 60);
	rope5 = new rope(bobObject5.body, roofObject.body, 60*2, 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 200, 255);

  roofObject.display();
  bobObject1.display();
  rope1.display();
  bobObject2.display();
  rope2.display();
  bobObject3.display();
  rope3.display();
  bobObject4.display();
  rope4.display();
  bobObject5.display();
  rope5.display();

  
  drawSprites();
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-150,y:-150});
	}
}
