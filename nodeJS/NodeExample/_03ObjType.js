// 객체는 중괄호를 이용해 만들어 진다.
// 그 안에 속성을 추가 할 수 있다.

var Persion = {}; // <- this is object not a value.
Person['age'] =  20;
Person['name'] = '트와이스';
Person.mobile = '010-0000-1111';

console.log('나이 : %d', Person.age);
console.log('나이 : %s', Person.name);
console.log('나이 : %s', Person.mobile);
