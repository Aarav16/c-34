
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
}
function preload(){
  garden=garden.loadImage("garden.jpeg");
  tree=tree.loadImage("mango tree.jpeg")
  stone=stone.loadImage("stone.png")
}

function draw() 
{
  background(51);
  Engine.update(engine);
  
}

