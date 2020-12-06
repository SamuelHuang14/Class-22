const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine, world;
var ground;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var obj_options={
    restitution:1.0
  }
  obj=Bodies.circle(200,100,20,obj_options);
  World.add(world,obj);
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
  console.log(obj);
  console.log(obj.position.x);
  console.log(obj.position.y);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(obj.position.x,obj.position.y,20,20);
}