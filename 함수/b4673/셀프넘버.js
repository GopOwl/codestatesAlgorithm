const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

solution();

function d(n) {
    let sum = 0;
    let str = String(n).split('').map(value => +value);
    for(let i=0; i<str.length; i++) {
        sum += str[i]; 
    } 
    return sum + n;
}

function solution() {
    let ans = [];
    for(let i=1; i<=10000; i++) {
        ans.push(d(i))
        if(!ans.includes(i)) {
            console.log(i)
        }
    }
}



