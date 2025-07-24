// ID selector
const h =  document.getElementByTagName("h1");
console.log(h[0]);

//id selector
const i = document.getElementsById("a");
console.log(i);

//class selector
const c = document.getElementsByClassName("b");
console.log(c);

//querry selector
const d=document.querySelector(".b");
console.log(d);

//query selector
const e = document.querySelectorAll("h1");
console.log(d);

//read/write
console.log(d.textContent);
i.textContent = "Dom Manipulation";

