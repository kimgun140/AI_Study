var min_num, max_num, count=0;
var num1 = parseInt(prompt("첫번째 숫자 입력!!"));
var num2 = parseInt(prompt("두번째 숫자 입력!!"));

if (num1 > num2) {
    min_num = num2;
    max_num = num1;
}
else{
    min_num = num1;
    max_num = num2;
} 

for (var i = min_num; i <= max_num; i++) {
    for (var j = 2; j < i; j++)
    {
        if (i % j == 0) {
            break;
        }
        
    }
    if (i == j) {
        count++;
        console.log(i);
    }
}

console.log("총소수의 갯수 = ", count);