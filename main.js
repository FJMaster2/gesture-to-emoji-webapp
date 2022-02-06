//
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZYaFZt45s/model.json",modelLoaded);
}
function modelLoaded(){
    console.log("loaded");
}
function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
}
function gotResult(error,result){
if(error){
    console.error(error);
}
else{
    console.log(result);
}
document.getElementById("result_object").innerHTML=result[0].label;
document.getElementById("object_accuracy").innerHTML=result[0].confidence.toFixed(3);
}