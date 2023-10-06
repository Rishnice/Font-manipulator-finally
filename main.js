leftWristX = 0;
rightWristX = 0;

size = 0;

function preload() 
{

}

function setup() 
{
    canvas = createCanvas(450 , 420);
    canvas.center();
    canvas.position(600, 120);
    video = createCapture(VIDEO);
    video.size(500, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() 
{
    background("#00ffff");
    text("Hello" , 50 , 100);
    fill("red");
    stroke("black");

    size = leftWristX - rightWristX;
    size = Math.floor(size);
    console.log(size);
    textSize(size);
}

function modelLoaded() 
{
    console.log("Model Loaded!");
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("leftWrist x = " + leftWristX);
        console.log("rightWrist x = " + rightWristX);
        leftWristX = results[0].pose.leftWrist.x -15;
        rightWristX = results[0].pose.rightWrist.x -10;
    }
}