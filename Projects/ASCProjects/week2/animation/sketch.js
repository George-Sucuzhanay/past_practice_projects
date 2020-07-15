let xPos = 25;

function setup () {
    createCanvas (500,500);
    background(0);
}
function mouseClicked() {
    background(0,0,0);
    let r = random(0,255);
    let g = random(0,255);
    let b = random(0,255);
    fill(r,g,b);
}
function draw() {
    background(0,20);

    fill(0,255,0);
    ellipse(xPos, 250, 50, 50);

    xPos += 3;

    if (xPos > 525) {
        xPos = -25
    }
}
