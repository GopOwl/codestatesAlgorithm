const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

solution(input[0]);

function solution(S) {
    let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    for (let i = 0; i < alpha.length; i++) {
        if (S.indexOf(alpha[i]) !== -1) {
            alpha[i] = S.indexOf(alpha[i])
        }
        else {
            alpha[i] = -1;
        }
    }
    console.log(alpha.join(' '))
}