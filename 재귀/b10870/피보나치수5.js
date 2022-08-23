const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

console.log(solution(+input[0]));

function solution(n) {
    if(n < 2) {
        return n; 
    }
    return solution(n-1) + solution(n-2);
}
