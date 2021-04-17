//Create variables here
var dog, happyDog, database, foodS, foodStock;
var happyDog_img,dog_image;

function preload()
{
  happyDog_img=loadImage("images/happydog.png",happyDog_img);
  dog_image=loadImage("images/dogImg.png",dog_image);
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250);
  dog.addImage(dog_image);
  dog.scale=0.2;
  database=firebase.database();
foodStock=database.ref('Food');
foodStock.on("value",readStock);
}



function draw() {  
background(46, 139, 87);
if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
 dog.addImage(happyDog_img);
}
  drawSprites();
  fill("red");
//text(foodStock.val,200,100)
text("Note:Press Up_Arrow Key To Feed Milk",100,50);
}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
  if (x<=0){
    x=0;
  }else {
    x=x-1
  }
  database.ref('/').update({Food:x})
}

