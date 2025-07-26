console.log("Hello World");

setTimeout(() => {
  console.log("Inside 1st SetTimeout");
}, 2000);

console.log("Hello world 2");

setTimeout(() => {
  console.log("Inside 2nd SetTimeout");
}, 0);

const newPromise = new Promise((res, rej) => {
  let a = false;
  if (a) {
    setTimeout(() => res("Resolved cases"), 0);
  } else {
    setTimeout(() => rej("Rejected Cases"), 0);
  }
});



const handle = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    return res.json();
  } catch (err) {
    console.log("Fetch error:", err);
  }
};

newPromise
  .then(result => console.log(result))
  .catch(err => console.log(err));

handle().then(data => console.log(data)); 