function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("MobileNet",modelloaded);
    

    
}

                
                
                function modelloaded(){
                    console.log("modelisloaded");

                }


                function draw()
                {
                  image(video,0,0,300,300);
                    classifier.classify(video,getresult);

                }
            
                

                function getresult(error,result){
                    if(error){console.error(error);}
                    else{
                        console.log(result);
                        document.getElementById("objectname").innerHTML=result[0].label;
                        document.getElementById("objectaccuracy").innerHTML=result[0].confidence.toFixed(3);
                    }
                }