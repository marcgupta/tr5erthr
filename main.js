var song1 = "";
var song2 = "";
var rightWristX = 0;
var rightWristY = 0;
var leftWristX = 0;
var leftWristY = 0;
var scoreleftWrist = 0;
var scorerightWrist = 0;
var song_name = "";

function preload() {

song1 = loadSound("music.mp3");
song2 = loadSound("music2.mp3");

}

function setup() {

    canvas = createCanvas(300,250);
    canvas.position(800,275);
    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
    
    }

    function draw() {

        image(video,0,0,300,250);

        fill("#00ff00");
    stroke("#ff0000");

    song_name = song1.isPlaying();
    console.log(song_name);

    song_name2 = song1.isPlaying();
    console.log(song_name);

    if(scoreleftWrist > 0.2){
        circle(leftWristX,leftWristY,20);
        fill("#fff0000")
        stroke("fff0000")
        song2.stop();
        if(song_name == false){
            song1.play();
        }
        else{
            console.log("Song Name: Harry Potter Theme Song");
            document.getElementById("song").innerHTML = "Song Name: Harry Potter Theme Song";
        }
    }
        }

        function modelLoaded(){
            console.log("poseNet Is Initialized");
        }
        
        function gotposes(results){
            if(results.length > 0){
                console.log(results);
               
                scoreleftWrist = results[0].pose.keypoints[9].score;
            console.log(scoreleftWrist);
                 
                leftWristX = results[0].pose.leftWrist.x;
                leftWristY = results[0].pose.leftWrist.y;
                console.log("left Wrist X = "+leftWristX+" leftWrist_y = "+leftWristY);
        
                rightWristX = results[0].pose.rightWrist.x;
                rightWristY = results[0].pose.rightWrist.y;
                console.log("rightWrist X = "+rightWristX+" rightWrist X = "+rightWristY);
            }
        }