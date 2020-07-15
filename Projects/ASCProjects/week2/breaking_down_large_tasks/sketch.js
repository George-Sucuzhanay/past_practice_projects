function setup() {
    createCanvas(500,500);
    background(255);
}
function draw() {
    // make each circle have a random size
    let size = random(5,35);

    // make each circle have a random color
    let r = random(255);
    let g = random(255);
    let b = random(255);
    fill(r,g,b);

    // random transparency
    let a = random(120,180);

    fill(r,g,b, a);

    // give each circle a random offset
    let offsetX = random(-25.25);
    let offsetY = random(-25,25);

    // no outline
    noStroke();
    // make circles follow the mouse
    ellipse(mouseX + offsetX,mouseY+ offsetY, size,size);
}
function mouseClicked() {
    // erase the canvas
    background(255);
}