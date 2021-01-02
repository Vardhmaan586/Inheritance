
var ground; 
var box1, box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird
var bg;

const Engine = Matter.Engine; //namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function preload(){
  bg = loadImage("sprites/bg.png");
}

function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

bird = new Bird(150,200);
  
 log1 = new Log(810,285,320,PI/2);
log2 = new Log(810,180,320,PI/2);
log3 = new Log(720,120,180,PI/7.5);
log4 = new Log(880,120,180,-PI/7.6);

 box1 = new Box(700,320,70,70);
 box2 = new Box(920,320,70,70);
box3 = new Box(700,240,70,70);
box4 = new Box(920,240,70,70);
 box5 = new Box(800,160,70,70);

 pig1 = new Pig(810,320);
 pig2 = new Pig(810,240);
    
  ground = new Ground(500,450,1000,20);
}

function draw() {
  background(bg);
  Engine.update(engine);


  bird.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
 log4.display();
  

  
}