
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var player,football,goalpost,ground,launcher;
function preload()
{
	player=loadImage("images/player.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
football=new Football(100,570,30,30)
goalpost=new Goalpost(1100,350,300,400)
ground=new Ground(650,580,1300,20)
launcher=new Launcher(football.body,{x:180,y:300})
	//Engine.run(engine);
  
}


function draw() {
  
  background("white");
  Engine.update(engine)
  image(player,50,260,200,300);
football.display();
goalpost.display();
ground.display();
 launcher.display();
}

function mouseDragged(){
	Matter.Body.setPosition(football.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	launcher.fly();
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(football.body,{x:180,y:300})
		launcher.attach(football.body);
	}
}