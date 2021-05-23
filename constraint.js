class Wire{
    constructor(a,ff){
        var options={
            bodyA:a,
            pointB:ff,
            stiffness:0.12,
            length:10

        }
        this.continue=Constraint.create(options)
        this.mc=ff;
        World.add(world,this.continue)
    }

    fly(){

        this.continue.bodyA=null
    }
    

    display(){
        if(this.continue.bodyA){
        line(this.continue.bodyA.position.x,this.continue.bodyA.position.y,this.mc.x,this.mc.y)
        }
        
    }
}