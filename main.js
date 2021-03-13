var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){

    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {

console.log(event);

var Content = event.results[0][0].transcript;
console.log(Content);
if ( Content == "take my selfie"){

    console.log("taking selfie ---");
    speak();
}

document.getElementById("textbox").innerHTML = Content;
speak();
Webcam.attach(camera);
}

function speak(){
    speak_data = "Taking your selfie in 5 seconds";
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance (speak_data);
    synth.speak(utterThis);

    setTimeout(function()   
    {
        take_snap();
        save();
    }, 5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
  });
camera = document.getElementById("camera");

function take_snap()
{

    Webcam.snap(function(data_url) {
     document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_url+'">';
})};

function save(){

    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
