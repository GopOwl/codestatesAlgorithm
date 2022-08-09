const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

solution(+input[0], input[1]);

function solution(N, testcase) {
  let result = 0;
  for (let i = 0; i < N; i++) {
    result += +testcase[i];
  }
  console.log(result);
}