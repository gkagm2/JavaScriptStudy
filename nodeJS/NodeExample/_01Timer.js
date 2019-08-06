var result = 0;


var a = 1;
var n = 900000;
var l = 1;





console.time('duration_sum');
// 반복문보다
// for(var i=0 ;i <=n;i++){
//     result += i;
// }

// 공식을 사용하셈
result = n*(a + n) / 2;

console.timeEnd('duration_sum');




console.log('1부터 1000까지 더한 결과물 : %d', result);

var Person = {name : "소녀시대", age : 30};
console.dir(Person);
console.log('%j', Person);
