const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n')

let ans = '';
function hanoi(N,start,goal,sup) {
    if(N===0) {
        return;
    }
    hanoi(N-1,start,sup,goal);
    ans += `${start} ${goal}` + '\n';
    hanoi(N-1,sup,goal,start);
}
hanoi(+input[0],1,3,2)
console.log(Math.pow(2,+input[0])-1);
console.log(ans);