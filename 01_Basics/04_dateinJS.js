let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate)

let timeStamp = Date.now();
console.log(timeStamp);
console.log(myDate.getTime());

let newDate = new Date();

console.log(newDate.toLocaleString("default",{
    month:"numeric"
}))