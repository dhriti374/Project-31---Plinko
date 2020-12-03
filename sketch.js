const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}
var particles = [];
var plinkos = [];
var division = [];
var ground,plinkos,particles,divisions;

var divisionht = 300;

function draw() {
  background(255,255,255); 

  ground = new Ground(0, 200, 50, 20);

  for(var k=0; k<=width; k=k+80){
    division.push(new Divisions(k, height-divisionht/2, 10, divisionht));
  }

  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new PLinko(j,175));
  }

  for(var i=0; i<particles.length; i++){
    particles[i].display();
  }

  for(var i=0; i<divisions.length; i++){
    divisions[k].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10, 10));
  }

  drawSprites();
}