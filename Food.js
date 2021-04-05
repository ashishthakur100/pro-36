class Food
{
    constructor()
    {
        this.foodStock = 0;
        this.image = loadImage("Images/Milk.png")
        this.lastFed;
    }



getFoodStock()
{
    return this.foodStock;
}

deductFood()
{
    if(this.foodStock>0)
    {
        this.foodStock = this.foodstock - 1;
    }
    
}

updateFoodStock(foodStock)
{
    this.foodStock = foodStock;
}
getFedTime(lastFed)
{
    this.lastFed = lastFed
}

display(){
    
    var x = 80, y = 100;
    imageMode(CENTER);
    image(this.image,720,220,70,70);

    if(this.foodStock!=0){
        for(var i =0;i<this.foodStock;i++){
            if(i%10==0){
                x=80;
                y=y+50;
            }
            this.image(this.image,x,y,50,50);
            x=x+30;
            
        }
        
    }
}


}
