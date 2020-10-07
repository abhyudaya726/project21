var bullet,wall;
var weight,thickness;

function setup() {
  createCanvas(1600,400);

  weight = Math.round(random(155,90));
    
  speed = Math.round(random(30,52));

  thickness = Math.round(random(22,33));

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  bullet = createSprite(50,200,50,25);
  bullet.velocityX = speed;
}

function draw() {
  background(0);

    if(collided(bullet,wall)){
        bullet.velocityX = 0;
        var damage = Math.round((0.5*weight*speed*speed)/(thickness*thickness*thickness));
        console.log(damage);
        
        if(damage>10){
            bullet.shapeColor = color(255,0,0);
        }
        if(damage<10){
            bullet.shapeColor = color(0,255,0);
        }
    }

  drawSprites();
}

function collided(object1,object2){
    var edge1 = object1.x + object1.width;
    var edge2 = object2.x;
    
    if(edge1>=edge2){
        return true;
    }else{
        return false;
    }
}