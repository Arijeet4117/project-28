class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
    this.body=Bodies.circle(x,y,r,options);
    this.r=r;
    this.mangoImage =loadImage("Plucking mangoes/mango.png");
    World.add(world,this.body);

 }

 display(){
    imageMode(RADIUS)
    image(this.mangoImage,this.body.position.x,this.body.position.y,this.r,this.r);
    
 }

 
}