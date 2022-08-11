const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const testcase = [];
for (let i = 1; i <= +input[0]; i++) {
  testcase.push(input[i].split(' '))
}
solution(+input[0], testcase)

function solution(T, R, S) {
  for (let i = 0; i < T; i++) {
    let result = '';
    R = testcase[i][0];
    S = testcase[i][1];
    for (let j = 0; j < S.length; j++) {
      result += S[j].repeat(R);
    }
    console.log(result)
  }
}

 