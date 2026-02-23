//Q1:-
// const fs = require("fs");
// setTimeout(() => console.log("Hello from Timer 1"), 0);
// console.log("Hello from top level code");

//Q2:-
// const fs = require("fs");
// setTimeout(() => console.log("Hello from Timer 1"), 0);
// setImmediate(() => console.log("Hello from Immediate Fn 1"));
// console.log("Hello from top level code"); //o/p not determinable outside I/O cycle but mostly
//checks for expired timers so setTimout executes first

//Q3:-
// const fs = require("fs");
// setTimeout(() => console.log("Hello from Timer 1"), 0);
// setImmediate(() => console.log("Hello from Immediate Fn 1")); //o/p not determinable outside
//I/O cycle

//Q4:-
// const fs = require("fs");
// fs.readFile("sample.txt", "utf-8", () => {
//   console.log("I/O polling finish");
// });
// console.log("Hello from top level code");

//Q5:-
// const fs = require("fs");
// setTimeout(() => console.log("Hello from Timer 1"), 0);
// setImmediate(() => console.log("Hello from Immediate Fn 1"));
// fs.readFile("sample.txt", "utf-8", () => {
//   console.log("I/O polling finish");
//   setTimeout(() => console.log("Hello from Timer 2"), 0);
//   setTimeout(() => console.log("Hello from Timer 3"), 5000);
//   setImmediate(() => console.log("Hello from Immediate Fn 2"));
// });
// console.log("Hello from top level code");

//Q6:-
// const fs = require("fs");
// const crypto = require("crypto");
// const start = Date.now();
// setTimeout(() => console.log("Hello from Timer 1"), 0);
// setImmediate(() => console.log("Hello from Immediate Fn 1"));
// fs.readFile("sample.txt", "utf-8", () => {
//   console.log("I/O polling finish");
//   setTimeout(() => console.log("Hello from Timer 2"), 0);
//   setTimeout(() => console.log("Hello from Timer 3"), 5000);
//   setImmediate(() => console.log("Hello from Immediate Fn 2"));

//   //CPU Intensive work
//   crypto.pbkdf2("password1", "salt1", 100000, 1024, "sha512", () => {
//     console.log(`${Date.now() - start}ms`, "Password 1 Done");
//   });
//   crypto.pbkdf2("password2", "salt1", 100000, 1024, "sha512", () => {
//     console.log(`${Date.now() - start}ms`, "Password 2 Done");
//   });
//   crypto.pbkdf2("password3", "salt1", 100000, 1024, "sha512", () => {
//     console.log(`${Date.now() - start}ms`, "Password 3 Done");
//   });
//   crypto.pbkdf2("password4", "salt1", 100000, 1024, "sha512", () => {
//     console.log(`${Date.now() - start}ms`, "Password 4 Done");
//   });
//   crypto.pbkdf2("password5", "salt1", 100000, 1024, "sha512", () => {
//     console.log(`${Date.now() - start}ms`, "Password 5 Done");
//   });
// });
// console.log("Hello from top level code");

//Q7:-
const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();
// process.env.UV_THREADPOOL_SIZE = 5; {But with using it here 4 default threads have
// alrady been created, so write in terminal before executing the code}

//Write $env:UV_THREADPOOL_SIZE=5 in the terminal and then node index to run all 5 task //ly

setTimeout(() => console.log("Hello from Timer 1"), 0);
setImmediate(() => console.log("Hello from Immediate Fn 1"));
fs.readFile("sample.txt", "utf-8", () => {
  console.log("I/O polling finish");
  setTimeout(() => console.log("Hello from Timer 2"), 0);
  setTimeout(() => console.log("Hello from Timer 3"), 5000);
  setImmediate(() => console.log("Hello from Immediate Fn 2"));

  //CPU Intensive work
  crypto.pbkdf2("password1", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms`, "Password 1 Done");
  });
  crypto.pbkdf2("password2", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms`, "Password 2 Done");
  });
  crypto.pbkdf2("password3", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms`, "Password 3 Done");
  });
  crypto.pbkdf2("password4", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms`, "Password 4 Done");
  });
  crypto.pbkdf2("password5", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms`, "Password 5 Done");
  });
});
console.log("Hello from top level code");
