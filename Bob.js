class Bob {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.5,
            'friction':0.5,
            'density':1.2,
            'isStatic' : false
        }
        this.body = Bodies.circle(x, y, radius, options); 
        this.radius = radius
        World.add(world, this.body);
       
        
   }
   display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    fill(rgb(255, 0, 128));
    ellipseMode(CENTER);
    ellipseMode(RADIUS)
    ellipse(0,0,this.radius);
    pop();
   }
}
