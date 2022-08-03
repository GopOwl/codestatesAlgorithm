const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const testcase = [];
for (let i = 1; i <= +input[0]; i++) {
    testcase.push(input[i])
}

solution(+input[0], testcase);

function solution(N, testcase) {
    for (let i = 0; i < N; i++) {
        let result = 0;
        let correct = 0;
        let defeat = 0;
        for (let j = 0; j < testcase[i].length; j++) {
            if (testcase[i][j] === 'O') {
                correct++;
                result += correct;
            }
            else if (testcase[i][j] === 'X') {
                correct = defeat;
            }
        }
        console.log(result)
    }
}