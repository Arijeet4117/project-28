class Sun{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
        this.sun=Bodies.circle(x,y,r,options)
        this.r=r;
        World.add(world,this.sun);
    }
    display(){
        fill("yellow")
        ellipseMode(RADIUS);
        ellipse(this.sun.position.x,this.sun.position.y,this.r,this.r)
    }
    
}