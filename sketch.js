var dog,sadDog,happyDog;
var foods
var feed,addFood
var foodObj

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  database=firebase.database()
  createCanvas(1000,400);
  
  foodObj = new Food();
  foodStock = database.ref("Food");
  foodStock.on("value",readstalk);


  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

feed = createButton("feedTheDog")
feed.position(700,95);
feed.mousePressed(feedDog);


addFood = createButton("addFood")
addFood.position(800,95)
addFood.mousePressed(addFoods);


}

function draw() {
  background(46,139,87);
  if(lastFeed>=12){
    Text("lastfeed"+lastFed%12+"pm",35,30)

  }
  else if(lastfeed === 0{ 
    text("lastfeed" ,35,30)
  })
  drawSprites();
  
  
}

//function to read food Stock
function readStock(data)
{
  foodS = data.val();
  foodObj.updateFoodStock(foodS);
}


//function to update food stock and last fed time
function feeddog(){
  dog.addImage(happyDog);

  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
}


//function to add food in stock
functions addFoods(){
  foods++;
  databse.ref('/').update({
    food:foods
  })
}
