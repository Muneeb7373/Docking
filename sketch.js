var issImg, iss, spacecraftImg, spacecraft;
var hasDocked;
var hasDocked = false;
var background, backgroundImg

function preload() {
issImg = loadImage(Docking-undocking/iss.png)
backgroundImg = loadImage(Docking-undocking/spacebg.jpg)
spacecraftImg = loadAnimation(Docking-undocking/spackecraft1.png,spackecraft2.png,spackecraft3.png,spackecraft4.png)
}

function setup() {
  iss = createSprite(330,130)
  iss.addImage(issImg)
  iss.scale = 0.25;
  spacecraft = createSprite(285,240)
  spacecraft.addAnimation(spacecraftImg)
  spacecraft.scale = 0.15;
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();

 if(!hasDock){
   spacecraft.x = spacecraft.x + random(-1,1)

   if(keyDown("UP_ARROW")){
     spacecraft.y = spacecraft.y - 2;
   }
   if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(spacecraftImg)
    spacecraft.y = spacecraft.y + 2;
  }
  if(keyDown("Right_ARROW")){
    spacecraft.x = spacecraft.x + 2;
    spacecraft.addImage(spacecraftImg)
  }
  if(keyDown("LEFt_ARROW")){
    spacecraft.x = spacecraft.x - 2;
    spacecraft.addImage(spacecraftImg)
 }
  if(spacecraft.isTouching(iss)){
    hasDocked = true;
    Text("Docking Successful")
  }
 }
}
