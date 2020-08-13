const person = function (name){
    if(name===" jak "){
        return function(topic){
           console.log( " Hii " + (name) + " What is "+(topic)+" please Explain us."  );    
        }
    }else if(name===" mak "){
        return function(topic){
           console.log( " Hii " + (name) + " What is "+(topic)+" please Explain us."  );    
        }
    }else if(name===" Alina "){
        return function(topic){
           console.log( " Hii " + (name) + " What is "+(topic)+" please Explain us."  );    
        }
    }else{
        console.log("Thank you so much");
    }
}
person(" jak " )("javaScript ?");
person(" mak ")("corejava ?");
person(" Alina ")("Nodejs ?");