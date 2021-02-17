class Rope {
    constructor(bodyA,bodyB){
    this.Rope = constraint.create(options);

    World.add(world, this.Rope);
    var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.04,
        lenght: 10
    }

    }
    display(){
var pointA = this.Rope.bodyA.position
var pointB = this.Rope.bodyB.position
strokeweight(3);
line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}