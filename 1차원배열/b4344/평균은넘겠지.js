const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const testcase = [];
for (let i = 1; i <= +input[0]; i++) {
    testcase.push(input[i].split(' ').map(value => +value))
}

solution(+input[0], testcase)

function solution(C, testcase) {
    for (let i = 0; i < C; i++) {
        let average = 0;
        let sum = 0;
        let cnt = 0;
        let result = 0;
        for (let j = 1; j < testcase[i].length; j++) {
            sum += testcase[i][j];
            average = sum / (testcase[i].length - 1);

        }
        for (let k = 1; k < testcase[i].length; k++) {
            if (testcase[i][k] > average) {
                cnt++;
            }
        }
        result = cnt / (testcase[i].length - 1) * 100
        console.log(`${result.toFixed(3)}%`)
    }
}