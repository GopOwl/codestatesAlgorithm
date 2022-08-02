const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const grade = input[1].split(' ').map(value => +value);

solution(+input[0], grade);

function solution(N, grade) {
    let newGrade = []
    let max = Math.max(...grade) // 다른 사람은 어떻게 최댓값 구했는지 보기
    for (let i = 0; i < N; i++) {
        newGrade.push((grade[i] / max * 100))
    }
    let sum = 0;
    for (let i = 0; i < newGrade.length; i++) {
        sum += newGrade[i];
    }
    console.log(sum / newGrade.length)
    // let sum = 0;
    // for (let i = 0; i < N; i++) {
    //     sum += (grade[i] / max * 100)
    // }
    // console.log(sum/N) 이렇게 풀어도 됨 이 풀이가 더 나은듯 ㅇㅇ 
}