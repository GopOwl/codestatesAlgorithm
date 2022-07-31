const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const nArr = input.map(value => +value)

solution(nArr[0],nArr[1],nArr[2]);

function solution(A, B, C) {
    let result = String(A * B * C);
    let resultArr = result.split('').map(value => +value)
    for(let i=0; i<=9; i++) {
        let cnt = 0;
        for(let j=0; j<resultArr.length; j++) {
            if(resultArr[j] === i) {
                cnt++;
            }
        }
        console.log(cnt);
    }
}