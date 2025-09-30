const sleep = (ms) => new Promise((resolve, reject) => setTimeout(() => reject(), ms));

let promise = sleep(1000);

promise.then(() => {
  console.log(promise);
}).catch(() => {
  console.log(promise);
})

console.log(promise);