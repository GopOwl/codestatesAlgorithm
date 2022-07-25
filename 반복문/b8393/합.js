const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(+input[0]);

function solution(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result = result + i;
    }
    console.log(result);
}