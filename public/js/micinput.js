function record(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.continuous = true;
    
    recognition.onresult = function(event){
        console.log(event);
        console.log(event.results[0][0].transcript);
        document.getElementById('speechToText').value = event.results[0][0].transcript

        var micresults = event.results[0][0].transcript
        if (micresults.toLowerCase() == "green"){
            console.log("Green")
            document.getElementById("answer1").click()
        } else if (micresults.toLowerCase() == "red"){
            console.log("Red")
            document.getElementById("answer2").click()
        } else if (micresults.toLowerCase() == "blue"){
            console.log("Blue")
            document.getElementById("answer3").click()
        } else if (micresults.toLowerCase() == "orange"){
            console.log("Orange")
            document.getElementById("answer4").click()
        }

    }

    recognition.start();
}