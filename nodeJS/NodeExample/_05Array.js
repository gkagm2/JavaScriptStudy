// 객체를 배열로 만들고 추가하기
var Users = [{name : '트와이스', age : 20}, {name : '레드벨벳', age : 21}];

Users.push({name : 'EXID', age : 23});

// var addF = function(a, b){
//     return a + b;
// }

// Users.push(addF);





console.log('사용자 수 : %d', Users.length);
console.log('첫번째 사용자 이름 : %s', Users[0].name);
console.log('첫번째 사용자 나이 : %s', Users[0].age);

for(var i=0 ;i <Users.length; i++){
    console.log("배열 요소 ::: " + i + " : %s", Users[i].name);
}

Users.forEach(function(item, index){
    console.log("배열 요소2 ::: " + index + " : %s", item.name);
});