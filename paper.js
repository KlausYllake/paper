class paper {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }

        this.image = loadImage("paper.png");
        this.x = x;
        this.y = y;
        this.r = radius;

        this.body = Bodies.circle(x,y,radius/3,options);
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}