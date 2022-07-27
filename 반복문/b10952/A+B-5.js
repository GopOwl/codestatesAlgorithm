const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const testcase = [] 
for(let i=0; i<input.length; i++) {
    testcase.push(input[i].split(' ').map(value => +value));
}

solution(testcase);

function solution(A,B) {
    for(let i=0; i<testcase.length; i++) {
        A = testcase[i][0];
        B = testcase[i][1];
        if(A===0 && B===0) {
            break;
        }
        console.log(A+B);
    }
    
}