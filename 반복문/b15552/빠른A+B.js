const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const testCase = [];
for (let i = 1; i <= +input[0]; i++) {
    testCase.push(input[i].split(' ').map(value => +value));
}
solution(+input[0], testCase);

function solution(T, testCase) {
    let result = '';
    for (let i = 0; i < T; i++) {
        result += testCase[i][0] + testCase[i][1] + '\n';
    }
    console.log(result);
}