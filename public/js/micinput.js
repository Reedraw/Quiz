function record(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.continuous = true;
    

    recognition.onresult = function(event){
        console.log(event);
        console.log(event.results[event.results.length-1][0].transcript);
        document.getElementById('speechToText').value = event.results[event.results.length-1][0].transcript

        var micresults = event.results[event.results.length-1][0].transcript.trim()
        console.log(`Here: ${micresults}`)
        if (micresults.toLowerCase() == "green"){
            console.log("Green1")
            document.getElementById("answer1").click()
        } else if (micresults.toLowerCase() == "red"){
            console.log("Red1")
            document.getElementById("answer2").click()
        } else if (micresults.toLowerCase() == "blue"){
            console.log("Blue1")
            document.getElementById("answer3").click()
        } else if (micresults.toLowerCase() == "orange"){
            console.log("Orange1")
            document.getElementById("answer4").click()
        }

    }

    recognition.start()
    
}