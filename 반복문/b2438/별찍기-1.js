const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(+input[0]);

function solution(N) {
    let result = ''
    for(let i=1; i<=N; i++) {
        result += '*'
        console.log(result)
    }
}