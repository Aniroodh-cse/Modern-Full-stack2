// Promise 
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("I have to give treat");
    } else {
        reject("No treat");
    }
});



myPromise
    .then((q) => console.log(q))
    .catch((q) => console.log(q));

// Async function using await
const handlePromise = async () => {
    try {
        const a = await myPromise;
        console.log(a);
    } catch (err) {
        console.log("error from async", err);
    } finally {
        console.log("it will run in every case"); 
    }
};

handlePromise();


//Async function
let a = 10;
console.log(a);
setTimeout(()=>{
    console.log("The message will print later");
},2000)
let b = 20;
console.log(b);


//Async function 
let c = 30;
console.log(a);
setTimeout(()=>{
    console.log("The message will print in 2000 ");
    setTimeout(()=>{
    console.log("The message will print in 3000");
   },2000)
},3000)
let d = 40;
console.log(b);

//api
const fetchData=()=>{
    try{
    const response = fetch("https://dummyjson.com/products");
    console.log(response);
    if(response.ok){
        const data = response.json();
        console.log(data);
    }
    }catch (err){
        console.log(err);
    }
};

fetchData();

