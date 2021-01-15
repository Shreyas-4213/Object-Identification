img="";
status="";
function preload(){
img=loadImage('dog_cat.jpg');
}

function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
console.log(modelLoaded);
status=true;
objectDetector.detect(img,gotResults);
}

function gotResults(error,results){
if (error) {
console.log(error)  
}
console.log(results);
}

function draw(){
image(img,0,0,640,420);
fill("#FF0000");
text("dog",45,75);
noFill();
stroke("#FF0000");
rect(30,60,450,350);
fill("#34E104");
text("bowl",225,325);
noFill();
stroke("#34E104");
rect(275,325,120,80);
fill("#0377FD")
text("cat",550,85);
noFill();
stroke("#0377FD");
rect(275,67,300,350);
}