const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

input = input[0].split(' ').map(value => +value);

solution(input[0], input[1], input[2]);

function solution(a, b, c) {
    if (a === b && b === c && c === a) {
        console.log(10000 + a * 1000);
    }
    else if (a === b || b === c || c === a) {
        if (a === b) {
            console.log(1000 + a * 100);
        }
        if (b === c) {
            console.log(1000 + b * 100);
        }
        if (c === a) {
            console.log(1000 + c * 100);
        }
    }
    else {
        let max = Math.max(a, b, c)
        console.log(max * 100);
    }
}