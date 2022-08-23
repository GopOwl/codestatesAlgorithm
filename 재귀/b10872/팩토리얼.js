const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

console.log(solution(+input[0]));

function solution(N) {
    if(N <= 1) {
        return 1; 
    }
    return N*solution(N-1);
}
