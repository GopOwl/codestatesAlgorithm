const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

let num = +input[0];
let result = '';

function solution(i, j) {
    if (i % 3 === 1 && j % 3 === 1) {
        result += ' ';
    }
    else {
        if (Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0) {
            result += '*';
        }
        else {
            solution(Math.floor(i / 3), Math.floor(j / 3))
        }
    }
}

for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
        solution(i,j);
    }

    result += '\n';
}
console.log(result)
