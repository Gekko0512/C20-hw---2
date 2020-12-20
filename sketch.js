var car,wall;
var speed,weight;
var carImg;

function setup() {
  createCanvas(1366,656);
  
  car=createSprite(50,200,50,50);
  
  

  wall = createSprite(1300,325,130,660);
  

  speed = random(55,90);
  weight = random(400,1500); 

  car.velocityX = speed;

}

function draw() {
  background(0,0,0);  
  wall.shapeColor = color(180,80,100);
  fill(255);
  textSize(25);
    
  if(wall.x - car.x <(car.width + wall.width)){
   car.velocityX= 0;
    var deformation = (0.5*weight*speed*speed)/22500 ; 
   //critical
   if(deformation >= 181){
      car.shapeColor = color(255,0,0);
      text ("Weight :"  + weight,300,200);
      text ("Speed :" + speed ,300,300);
      text ("Deformation :" + deformation , 300,400);
   }
   //mediocre
   if(deformation <= 180 && deformation >= 100){
      car.shapeColor = color(230,230,0);
      text ("Weight :"  + weight,300,200);
      text ("Speed :" + speed ,300,300);
      text ("Deformation :" + deformation , 300,400);
   }
   //safe
   if(deformation < 100){
      car.shapeColor = color(0,255,0);
      text ("Weight :"  + weight,300,200);
      text ("Speed :" + speed ,300,300);
      text ("Deformation :" + deformation , 300,400);
   }

}
  drawSprites();

}