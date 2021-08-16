var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var bobDiameter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var rope1, rope2, rope3, rope4, rope5;
var world;
var roofObject;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	

	

	engine = Engine.create();
	world = engine.world;
	roofObject=new roof(width/2,height/4,width/7,20);

	bobDiameter= 40;

	//Create the Bodies Here.
	startPositionX= width/2;
	startPositionY= height/4+500
    bobObject1= new bob(startPositionX-bobDiameter*2, startPositionY,bobDiameter)
	bobObject2= new bob(startPositionX-bobDiameter, startPositionY,bobDiameter)
	bobObject3= new bob(startPositionX, startPositionY,bobDiameter)
	bobObject4= new bob(startPositionX+bobDiameter, startPositionY,bobDiameter)
	bobObject5= new bob(startPositionX+bobDiameter*2, startPositionY,bobDiameter)

	
    
var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
	}
  });

	rope1 = new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
	rope2 = new rope(bobObject2.body,roofObject.body,-bobDiameter*1,0)
    rope3 = new rope(bobObject3.body,roofObject.body,-bobDiameter*0,0)
    rope4 = new rope(bobObject4.body,roofObject.body,-bobDiameter*1,0)
    rope5 = new rope(bobObject5.body,roofObject.body,-bobDiameter*2,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lime");
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
 


  
  drawSprites();
 
}
function keyPressed() {
    if (keyCode === UP_ARROW) {

        Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

    }
}


function drawLine(constraint)
{
    bobBodyPosition=constraint.bodyA.position
    roofBodyPosition=constraint.bodyB.position

    roofBodyOffset=constraint.pointB;
    
    roofBodyX=roofBodyPosition.x+roofBodyOffset.x
    roofBodyY=roofBodyPosition.y+roofBodyOffset.y
    line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}









