const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const [inputA, inputB] = input[0].split(' ').map(value => +value);
const arrayA = input[1].split(' ').map(value => +value);

solution(inputA, inputB, arrayA);

function solution(N, X, A) {
    let result = [];
    for (let i = 0; i < N; i++) {
        if (A[i] < X) {
            result.push(A[i])
        }
    }
    console.log(result.join(' '));
}