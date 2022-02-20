let x = 400,
    y = 400;
let x1 = 200,
    y1 = 200;
let x2 = 100,
    xspeed = 2,
    y2 = 500,
    yspeed = 3;
let rad = 100,
    spin = true;
let diameter = 100;
let bsrad = 10;
let bsbool = true;





// prevent keys from moving page
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);



function preload() {
    img = loadImage('star.jpg');
}


function setup() {
    createCanvas(700, 700);
    noCursor();
}


function draw() {

    background(51);
    line(0, 350, 700, 350);
    line(350, 0, 350, 700);
    image(img, x, y, diameter / 2, diameter / 2);

    //cursor pulse
    fill(255, mouseX / 2, mouseY / 2, 130);
    circle(mouseX, mouseY, bsrad);
    if (bsbool == true) {
        bsrad += .3;
        if (bsrad >= 40) {
            bsbool = false;
        }
    }
    if (bsbool == false) {
        bsrad -= .3;
        if (bsrad <= 20) {
            bsbool = true;
        }
    }

    //bouncing ball
    fill(x2 / 2, y2 / 2, 150, 180);
    circle(x2, y2, 75);
    if (x2 + 50 >= width || x2 - 50 <= 0) {
        xspeed *= (-1);
    }
    if (y2 + 50 >= height || y2 - 50 <= 0) {
        yspeed *= (-1);
    }
    x2 += xspeed, y2 += yspeed;
    keyPressed();
    y = constrain(y, 0 + rad / 2, 700 - rad / 2);
    x = constrain(x, 0 + rad / 2, 700 - rad / 2);
    y1 = constrain(y1, 0 + rad / 2, 700 - rad / 2);
    x1 = constrain(x1, 0 + rad / 2, 700 - rad / 2);

    fill(0, 255, 191, 200);
    rectMode(CENTER);
    translate(x1, y1);

    if (spin) {
        rotate(frameCount * (0.03));
    }
    square(0, 0, rad);

}

function keyPressed() {
    //circle controls
    if (keyIsDown(UP_ARROW)) {
        y -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        y += 3;
    }
    if (keyIsDown(LEFT_ARROW)) {
        x -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x += 3;
    }
    if (keyIsDown(107) || keyIsDown(187)) {
        diameter += 1;
    }
    if (keyIsDown(109) || keyIsDown(189) && diameter != 0) {
        diameter -= 1;
    }
    //square controls

    if (key === 'q') {
        spin = false;
    }
    if (key === 'e') {
        spin = true;
    }
    if (key === 'w') {
        y1 -= 3;
    }
    if (key === 'a') {
        x1 -= 3;
    }
    if (key === 's') {
        y1 += 3;
    }
    if (key === 'd') {
        x1 += 3;
    }
}