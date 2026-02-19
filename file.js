const fs = require("fs");

//Sync file creation:-
fs.writeFileSync("test.txt", "Sync File creation");

//Async file creation:-
fs.writeFile("test2.txt", "Async File creation", (err) => {});

//Sync file reading:-
const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);

//Sync file reading:-
fs.readFile("./contacts.txt", "utf-8", (err, result) => {
  if (err) {
    ("Error=", err);
  } else {
    console.log(result);
  }
});

//Sync file append:-
fs.appendFileSync("./contacts.txt", "\nAbrar:+9133333333");

//Async file append:-
fs.appendFileSync("./contacts.txt", `${Date.now()}\n Abrar2:+9133333333`);

fs.copyFileSync("./contacts.txt", "copy");
fs.unlinkSync("copy");
fs.mkdirSync("newData");
