const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const [inputA, inputB] = input[0].split(' ').map(value => +value);
const inputC = input[1].split('\n').map(value => +value); //input.map(value => +value) 하면 B+C 했을때 NaN 나옴 이유를 모르겠음

solution(inputA, inputB, +inputC);

function solution(A, B, C) {
    let hour = Math.floor(((B + C) / 60));
    let min = (B + C) % 60;
    let minPlus = B + C;
    if (minPlus < 60) {
        console.log(`${A} ${minPlus}`);
    }
    else if (minPlus >= 60) {
        if (A + hour >= 24) {
            console.log(`${(A + hour) - 24} ${min}`)
        }
        else {
            console.log(`${A + hour} ${min}`)
        }
    }
}