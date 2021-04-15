
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

  ball=new Ball(250,600,40)

	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 
	//creating the ball
  


	//Create the Bodies Here.
    box1=new Wall(1205,580,20,150);
	box2=new Wall(1295,630,240,20);
	box3=new Wall(1360,560,20,150);

  //creating dustbin
 // bin1 = new Dustbin(1295,577,180,140);

 slingshot1=new SlingShot(ball.body,{x:300,y:150})
  
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);


 



  box1.display();
  box3.display();
  box2.display();
  
  
  ball.display();
 // bin1.display();


  slingshot1.display();
 
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
  slingshot1.fly()
}

