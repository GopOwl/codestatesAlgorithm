const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const testcase = [];
for (let i = 1; i <= +input[0]; i++) {
    testcase.push(input[i])
}
solution(+input[0], testcase);

function solution(N, testcase) {
    let result = 0;
    for (let i = 0; i < N; i++) {
        let obj = {};
        let nowChar = testcase[i][0]
        obj[nowChar] = true;
        let groupChar = true;
        for (let j = 1; j < testcase[i].length; j++) {
            if (nowChar !== testcase[i][j]) {
                if (obj[testcase[i][j]]) {
                    groupChar = false;
                }
                else {
                    nowChar = testcase[i][j]
                    obj[testcase[i][j]] = true;
                }
            }
        }
        if (groupChar) {
            result++;
        }
    }
    console.log(result)
}