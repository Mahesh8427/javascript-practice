//promise i do this work 
// resolve
// reject
// pending
function fun1(){
    return new Promise(function(resolve,reject){
           const error = true;
           if (!error){
           console.log(" Your promise has been resolve ")
           resolve(" you are great ");
           }else{
               console.log("your promise has not been resolve")
               reject("sorry i can't reslove this problem");
           }
        })
}
fun1().then(function(noterror){
   console.log(" Thank you so much " + noterror)
   }).catch(function(error){
       console.log(" very bad " + error)
   });



   function mahesh(){
       return new promise(function(resolve,reject){
           const error = false;
           if(!error){
               console.log(" mahesh your performane is improve ")
               resolve();
           }else{
               console.log(" very bad mahesh ")
               reject();
           }
       });
   }
   mahesh().then(function(notError){
console.log(" gratjob " + notError)
}).catch(function(error){
console.log("i am satified")
reject();
});