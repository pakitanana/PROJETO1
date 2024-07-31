function setup() {
  createCanvas(1000, 800);
  background("blue");
}
function draw() {
   fill("red");
  stroke("lightblue");
  if(mouseIsPressed)
    rect(mouseX,mouseY,30,50);
}
