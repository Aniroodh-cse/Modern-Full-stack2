console.log(a);
var a = 10;
console.log(a);

let b = 10;
console.log(b);

c = 78;
console.log(c);
aa();

//named function
function aa(){
    console.log("Named function");
}
aa();

//function expression 
//ab();

var ab = function(){
    console.log("function expression");
};

ab();

//arrow function 
let s=()=>{
    console.log("Arrow function ");
};

s();

//IIFE imeddiately invoked function expression 

{() => {
    console.log("IIFE");
}}