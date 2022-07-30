const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const num = input.map(value => +value)
solution(num);

function solution(num) {
    let max = num[0];
    let cnt = 0;
    for (let i = 1; i < 9; i++) {
        if (max < num[i]) {
            max = num[i];
            cnt = i + 1;
        }
    }
    console.log(max);
    console.log(cnt);
   
}