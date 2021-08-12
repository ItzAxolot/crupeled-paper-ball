
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left_ground
var right_ground

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,495,1000,10);
	left_ground = new Ground(750,450,10,100);
	right_ground = new Ground(900,450,10,100);

	var ball_options={
        restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
    ball = Matter.Bodies.circle(100,100,10,ball_options);
	World.add(world,ball);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  drawSprites();

  ellipseMode(RADIUS);
 
  ellipse(ball.position.x,ball.position.y,10,10);

  ground.display();
  left_ground.display();
  right_ground.display();
}

function keyPressed(){

if(keyCode===UP_ARROW){

Matter.Body.applyForce(ball,ball.position,{x:17.5,y:-17.5});


}



}

