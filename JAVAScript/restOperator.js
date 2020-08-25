 // // Rest operator:- bascially it is use inside the function and add a parameter and disp on Array from.. 
// function a(a, b, c,...args){
    
//     return a+b+c+args;
// }
// let arr = a('hello ', 'guys', 'whtsup',' sdasd ',' sdfsfdf ','asdadada');
//  console.log(arr);




 let s =["jack","mak","alina","rockey"]
  var  [a,b,...args]=s
  console.log(a);
  console.log(b);
 console.log(args);

 


// ///  rest parameter in Dynamic Function..
//  let num = new Function('...args','return args');  
// console.log(num(10, 20, 30,25,30,14,2,5));  