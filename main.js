img="";

function preload(){
img=loadImage('dog_cat.jpg');
}

function setup(){
canvas=createCanvas(640,420);
canvas.center();
}

function draw(){
image(img,0,0,640,420);
fill("#FF0000");
text("dog",45,75);
fill("#34E104");
text("bowl",225,325);
noFill();
stroke("#34E104");
rect(275,325,120,80);
noFill();
stroke("#FF0000");
rect(30,60,450,350);
}