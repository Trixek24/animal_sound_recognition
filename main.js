    function startClassification()
    {
        navigator.mediaDevices.getUserMedia({ audio:true});
        classifier = ml5.soundClassfier("https://teachablemachine.withgoogle.com/models/DIlYiObDM/model.json", modelReady);
    }    

    function modelReady()
    {
        classifier.classify(gotResults);
    }

    function gotResults(error, results)
    {
        console.log("got results");
    }