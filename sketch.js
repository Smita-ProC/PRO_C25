
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper, dustbin;


function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = Bodies.rectangle(width/2,height-30,width,20,{isStatic:true});
	World.add(world,ground);
    
    paper = new  Paper(40,660,40);

	dustbin = new Dustbin(600,height-150,200,220 );
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  paper.display();
  dustbin.display();
  rect(ground.position.x,ground.position.y,width,20);
}


function keyPressed(){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:255,y:-285})
}



