const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const numArr = input[1].split(' ').map(value => +value);

solution(+input[0], numArr);

function solution(N, numArr) {
    let max = numArr[0];
    let min = numArr[0];
    for (let i = 0; i < N; i++) {
        if (max < numArr[i]) {
            max = numArr[i];
        }
        if (min > numArr[i]) {
            min = numArr[i];
        }
    }
    console.log(`${min} ${max}`);
}