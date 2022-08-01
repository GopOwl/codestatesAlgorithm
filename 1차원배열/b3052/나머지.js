const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const nArr = input.map(value => +value)

solution(nArr);

function solution(nArr) {
    const result = [];
    nArr.forEach((el) => {
        const num = el % 42;
        if(result.indexOf(num) === -1) {
            result.push(num);
        }
    })
    console.log(result.length);
}