const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
    input = input.map(value => +value);
    solution(input[0], input[1]);
    process.exit();
});

solution(input[0], input[1]);

function solution(x, y) {
    console.log(typeof x)
    if (x > 0 && y > 0) {
        console.log(1);
    }
    else if (x < 0 && y > 0) {
        console.log(2);
    }
    else if (x < 0 && y < 0) {
        console.log(3);
    }
    else if (x > 0 && y < 0) {
        console.log(4);
    }
}