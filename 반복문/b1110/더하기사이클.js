const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

solution(+input[0]);

function solution(N) {
    let newNum = N;
    let sum;
    let cnt = 0;
    while (newNum !== N || cnt === 0) {
        cnt++;
        sum = Math.floor(newNum / 10) + (newNum % 10);
        newNum = (newNum % 10) * 10 + (sum % 10);
        if (newNum === N) {
            break;
        }
    }
    console.log(cnt);
   
}