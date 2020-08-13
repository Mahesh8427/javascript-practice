// Function Practice(1)...
var saigma = "yes"; 

function test(isSigma, strValue,callback){
    
     //console.log("sigma value:" , saigma);
    console.log("isSigma value:", isSigma);
    console.log("param value:", strValue);
    
    callback(isSigma,strValue);
}
test(saigma,"hello guys", ()=>  {console.log("hii")});




//Function Practice(2)...
    function geeks_inner(value){ 
        return 'hello '+value; 
    }   
    function geeks_outer(a, func){ 
        var s =  func(a)
       console.log(s); 
    } 
    geeks_outer("geeks",geeks_inner)




//Function Practice(3)...
function geeks_inner(value, tah) {
    return ('hello ' + value + " " + tah);
}
function geeks_outer(a, ad, callback) {

    console.log(callback(a, ad))
}
geeks_outer("geeks", "hello", geeks_inner)






