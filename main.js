Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90,
    
    constraints:{
     facingMode:"enviroinment"
     }    
});
var camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'">';
    });
}

console.log( "ml5 version :",ml5.version);

var classifier =  ml5.imageClassifier('Mobilenet',modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}

function Check(){
    var image = document.getElementById("captured_img").src;
    classifier.classify(image,Result);
}

function Result(error,result){
    if(error){
       console.error(error);
    }else{
        console.log(result);
        document.getElementById("object").innerHTML = result[0].label;
    }
}