class Ball {
    constructor(x, y) {
        var ball_options = {
            restitution: 0.1,
            density: 0.006,
            airFriction: 0
        }

        this.body = Bodies.circle(x, y, 10, ball_options);
        this.radius = 10;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        fill(180, 0, 250);
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        circle(0, 0, this.radius);
        pop();
    }
}