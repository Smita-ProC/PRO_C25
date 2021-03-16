class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            density:1.2
        }
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.image = loadImage("dustbingreen.png");

        this.bottomBody = Bodies.rectangle(x,y+100,width,20,options);
        World.add(world,this.bottomBody);

        this.leftEdge = Bodies.rectangle(x-width/2,y,20,100,options);
        World.add(world,this.leftEdge);

        this.rightEdge = Bodies.rectangle(x+width/2,y,20,100,options);
        World.add(world,this.rightEdge);
    }

    display(){
        rectMode(CENTER);
        imageMode(CENTER)
        
        push();
        fill("yellow");
        image(this.image,this.x,this.y,this.width,this.height);

        //rect(this.x-this.width/2,this.y,20,150);

        //rect(this.x+this.width/2,this.y,20,150);
        pop();
    }
}