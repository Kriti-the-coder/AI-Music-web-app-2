song_1="";
song_2="";

function preload(){
song_1 = loadSound("Maroon 5 - Memories (Lyrics).mp3");
song_2 = loadSound("Sub Urban - Cradles (Lyrics).mp3");
}

function setup(){
canvas =  createCanvas(350,300);
canvas.center();
video=  createCapture(VIDEO);
video.hide();
}

function draw(){
  image(video,0,0,350,300);
}
