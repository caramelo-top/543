
var ship = createSprite(200,140,10,10);
var sea = createSprite(200,490,90,90);

function preload(){


}

function setup(){
  createCanvas(400,400);
  
}
//código para redefinir o plano de fundo
if(sea.x < 0){
  sea.x = sea.width/2;
}

createEdgeSprites();{

}

function draw() {
  background("blue");
  sea = loadImage("sea.png");
 ship = loadAnimation(ship-1,ship-2,ship-3,ship-4)  

   sea.addImage(sea);
drawSprites();

}
