nosex=0
nosey=0
function preload(){
mouth=loadImage("mouth.png");
}

function setup(){
canvas=createCanvas(300, 300);
canvas.center()
video=createCapture(VIDEO);
video.hide()
video.size(300, 300);
PoseNet=ml5.poseNet(video, modelloaded);
PoseNet.on("pose", gotposes);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mouth, nosex-29, nosey+5, 50, 50)
}

function clickphoto(){
    save("picture.png")
}

function modelloaded(){
    console.log("success");
}

function gotposes(results){
    if(results.length>0){
nosex=results[0].pose.nose.x
nosey=results[0].pose.nose.y
console.log("nosex is "+nosex)
console.log("nosey is "+nosey)
    }
}