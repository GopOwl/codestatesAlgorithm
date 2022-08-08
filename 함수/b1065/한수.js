const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

solution(+input[0]);

function solution(N) {
    let cnt = 0;
    for (let i = 1; i <= N; i++) {
        let str = String(i).split('');
        if (i < 100) {
            cnt++;
            continue;
        }
        else if (i >= 100 && i <= 1000) {
            let a = str[0] - str[1];
            let b = str[1] - str[2];
            if (a === b) {
                cnt++;
            }
        }
    }
    console.log(cnt);
}