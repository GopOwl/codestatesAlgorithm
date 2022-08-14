const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

solution(input[0]);

function solution(str) {
    let obj = {};
    let newStr = str.toUpperCase()
    for (let i = 0; i < str.length; i++) {
        if (obj[newStr[i]]) {
            obj[newStr[i]]++;
        }
        else {
            obj[newStr[i]] = 1;
        }
    }
    let maxValue = 0;
    let maxChar = '';
    for (let el in obj) {
        if (obj[el] > maxValue) {
            maxValue = obj[el];
            maxChar = el;
        }
        else if (obj[el] === maxValue) {
            maxChar = '?'
        }
    }
    console.log(maxChar)

}