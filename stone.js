class Stone{
    constructor(x,y,r){
        var options={
            isStatic:false
        }
    this.body=Bodies.circle(x,y,r,options);
    this.r=r;
    this.stoneImage =loadImage("Plucking mangoes/stone.png");
    World.add(world,this.body);

 }

 display(){
    imageMode(RADIUS)
    image(this.stoneImage,this.body.position.x,this.body.position.y,this.r,this.r);
    
 }
}