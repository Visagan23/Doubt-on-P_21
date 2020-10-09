 var wall,thickness;
 var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(90,200,20,10);

  wall = createSprite(1200,200,thickness,height/2);
  
  thickness = random(22,83)
  speed = random(223,321)
  weight = random(30,52)
}

function draw() {
  background("black"); 
  
  if (hasCollided(bullet,wall)) {
   
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

   if (damage > 10) {
     wall.shapeColor = rgb(255,0,0);
   }
  }

  drawSprites();
}

function hasCollided(LbuLLet,LwaLL) {
  bulletRightEdge = LbuLLet.x + LbuLLet.weight;
  wallLeftEdge = LwaLL.x;
  if (bulletRightEdge >= wallLeftEdge) {
     return true
  }
     return false;
}