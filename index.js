var button;
var p1score = 0;
var p2score = 0;
var linex1 = 30;
var liney1 = 0;
var linex2 = 0;
var liney2 = 0;
var speedx = 3;
var speedy = 0;
var posx = 0;
var posy = 0;
var directionx = Math.floor(Math.random()*2);
var directiony = 0//Math.floor(Math.random()*2);

function setup() {
  createCanvas(windowWidth,windowHeight-20);
  makeButton("speed1",0,changeSpeed1);
  makeButton("speed2",1,changeSpeed2);
  makeButton("speed3",2,changeSpeed3);
  makeButton("speed4",3,changeSpeed4);
  makeButton("speed5",4,changeSpeed5);
  liney1 = height/2;
  liney2 = height/2;
  posx = width/2;
  posy = height/2;
}

function draw() {
//setup
  background(0);
  stroke(0);
  fill(255);
  textSize(30);
  text(p1score,50,50);
  text(p2score,width-65,50);
  lines();
  pongBall();
}

function lines() {
  linex2 = width-30;
  stroke(255);
  strokeWeight(5);
  liney1 = constrain(liney1,25,height-25);
  liney2 = constrain(liney2,25,height-25);
  line(linex1,liney1-25,linex1,liney1+25);
  line(linex2,liney2-25,linex2,liney2+25);
//lineMovement
  if (keyIsDown(87)) {
    liney1 -= 2;
  }
  if (keyIsDown(83)) {
    liney1 += 2;
  }
  if (keyIsDown(65)) {
    liney1 -= 2;
  }
  if (keyIsDown(68)) {
    liney1 += 2;
  }
  if (keyIsDown(UP_ARROW)) {
    liney2 -= 2;
  }
  if (keyIsDown(DOWN_ARROW)) {
    liney2 += 2;
  }
  if (keyIsDown(LEFT_ARROW)) {
    liney2 -= 2;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    liney2 += 2;
  }
}

function pongBall() {
  //ball
    ellipse(posx,posy,10,10);
  //check ball hit and bounce
    if (posx <= linex1+7 && posx >= linex1+7-speedx && posy > liney1-30 && posy < liney1+30) {
      directionx = 1;
      speedy = Math.random()*3
    } else if (posx >= linex2-7 && posx <= linex2-7+speedx && posy > liney2-30 && posy < liney2+30) {
      directionx = 0;
      speedy = Math.random()*3
    }
  //change directionx
    if (directionx == 0) {
      posx -= speedx;
    } else {
      posx += speedx;
    }
  //change directiony
    if (directiony == 0 ) {
      posy -= speedy;
    } else {
      posy += speedy;
    }
  //reset ball
    if (posx <= 5) {
      posx = width/2;
      posy = height/2;
      p2score++
    } else if (posx >= width-5) {
      posx = width/2;
      posy = height/2;
      p1score++
    }
  //check if bounce on top and bottom
    if (posy <= 5) {
      directiony = 1;
    } else if (posy >= height-5) {
      directiony = 0;
    }
}

function changeSpeed1() {
  speedx = 1;
}
function changeSpeed2() {
  speedx = 2;
}
function changeSpeed3() {
  speedx = 3;
}
function changeSpeed4() {
  speedx = 4;
}
function changeSpeed5() {
  speedx = 5;
}

function makeButton(text,x,d) {
  button = createButton(text);
  button.position(((width-285)/2)+57*x,height);
  button.mousePressed(d);
}
