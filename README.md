## 20180125
+ javascript의 전역변수 유효범위가 java와 다르므로 주의해야함.

## 20180129
+ 도움될만한 JavaScript 책링크 : http://www.tutorialspoint.com/javascript/javascript_tutorial.pdf

## 20180130
+ 익명일 때 funcion()과 ()=> 는 같지만 ()=>는 callback (익명함수) 일 경우만 사용 가능하다. - function4.html 확인

## 20190808
####  JavaScript에서 미리 정의되어 있는 전역 함수.

+ eval()  
문자열로 표현된 자바스크립트 코드를 실행하는 함수.  
e.g)   
~~~
var x = 10, y = 20;

var a = eval("x + y"); // 30

var b = eval("y * 3"); // 60

document.write(a + "<br>" + b);
~~~

+ isFinite()  
잔달된 값이 유한한 수인지를 검사하여 그 결과를 반환한다.  
인수로 전달된 값이 숫자가 아니라면, 숫자로 변환하여 검사한다.  
e.g)  
~~~
isFinite(123);       // true
isFinite(123e100);   // true
isFinite(0);         // true
isFinite(true);      // true
isFinite(false);     // true
isFinite(null);      // true
isFinite("123");     // true
isFinite("");        // true

isFinite("문자열");  // false
isFinite(undefined); // false
isFinite(NaN);       // false
~~~
+ isNaN()  
전달된 값이 Nan인지를 검사하여 그 결과를 반환한다.  
인수로 전달된 값이 숫자가 아니라면, 숫자를 강제 변환하여 검사한다.  
e.g)  
~~~
isNaN(123);       // false
isNaN(123e100);   // false
isNaN(0);         // false
isNaN(true);      // false
isNaN(false);     // false
isNaN(null);      // false
isNaN("123");     // false
isNaN("");        // false
 
isNaN("문자열");  // true
isNaN(undefined); // true
isNaN(NaN);       // true
~~~
이 함수는 숫자로의 강제 변환에 따라 예상치 못한 결과를 얻을 수 있으므로 ECMAScript6부터는 Number.isNaN() 메소드의 사용을 권장  
+ parseFloat()  
문자열을 파싱하여 부동 소수점 수(floating point number)로 반환  
e.g)  
~~~
parseFloat("123");        // 123
parseFloat("123.000");    // 123
parseFloat("123.456");    // 123.456
parseFloat("12 34 56");   // 12
parseFloat(" 123 ");      // 123
parseFloat("123 초콜릿"); // 123
parseFloat("초콜릿 123"); // NaN
~~~

+ parseInt()  
문자열을 파싱하여 정수로 변환  
e.g)  
~~~
parseInt("123");        // 123
parseInt("123.000");    // 123
parseInt("123.456");    // 123
parseInt("12 34 56");   // 12
parseInt(" 123 ");      // 123
parseInt("123 초콜릿"); // 123
parseInt("초콜릿 123"); // NaN
 
parseInt("10", 10);     // 10
parseInt("10", 8);      // 8
parseInt("10", 16);     // 16
parseInt("0x10");       // 16
~~~
**지금까지 parseInt() 함수는 전달받은 문자열의 시작이 "0"로 시작하면, 해당 문자열을 8진수로 인식했다. 하지만 자바스크립트는 더 이상 이 문법을 지원하지 않는다.**

+ encodeURI()  
URI에서 주소를 표시하는 특수문자를 제외하고, 모든 문자를 이스케이프 시퀀스(escape sequences) 처리하여 부호화한다.  
하지만 encodeURIComponent() 함수는 URI에서 encodeURI() 함수에서 부호화하지 않은 모든 문자까지 포함하여 이스케이프 시퀀스 처리함.  
e.g)  
~~~
var uri = "http://google.com/search.php?name=홍길동&city=서울";
var enc1 = encodeURI(uri);
var enc2 = encodeURIComponent(uri);
document.write(enc1 + "<br>" + enc2);
~~~

+ decodeURI()  
encodeURI() 함수나 다른 방법으로 만들어진  URI(Uniform Resource Identifier)를 해독한다.  
decodeURIComponent() 함수는 encodeURIComponent() 함수나 다른 방법으로 만들어진 URI 컴포넌트를 해독한다.  
e.g)  
~~~
var uri = "http://google.com/search.php?name=홍길동&city=서울";
var enc1 = encodeURI(uri);
var enc2 = encodeURIComponent(uri);
document.write(enc1 + "<br>" + enc2 + "<br><br>");

var dec1 = decodeURI(enc1);
var dec2 = decodeURIComponent(enc2);
document.write(dec1 + "<br>" + dec2);
~~~

+ decodeURIComponent()  
전달받은 문자열에서 특정 문자들을 16진법 이스케이프 시퀀스 문자로 변환.  
unescape() 함수는 전달받은 문자열에서 escape() 함수나 다른 방법으로 만들어진 16진법 이스케이프 시퀀스 문자를 원래의 문자로 변환.  
e.g)  
~~~

~~~
+ Number()  
전달받은 객체의 값을 숫자로 반환  
e.g)  
~~~
Number("123");        // 123
Number("123.000");    // 123
Number("123.456");    // 123.456
Number("12 34 56");   // NaN
Number("123 초콜릿"); // NaN
 
Number(true);         // 1
Number(false);        // 0
Number(new Date());   // 현재 날짜에 해당하는 숫자를 반환함.
Number(null);         // 0
~~~

+ String()  
전달받은 객체의 값을 문자열로 반환  
e.g)  
~~~
String(123);        // 123
String(123.456);    // 123.456
String("123");      // 123
String(new Date()); // 현재 날짜에 해당하는 문자열을 반환함.
String(null);       // null
 
String(true);       // true
String(false);      // false
String(Boolean(1)); // true
String(Boolean(0)); // false
~~~

+ 자바스크립트 객체  
객체란 이름(name)과 값(value)으로 구성된 프로퍼티(property)의 정렬되지 않은 집합.  
프로퍼티의 값으로 함수가 올 수도 있는데, 이러한 프로퍼티를 메소드(method)라고 한다.  
~~~
var cat = "나비"; // 일반적인 변수의 선언
// 객체도 많은 값을 가지는 변수의 하나임.
var kitty = { name: "나비", family: "코리안 숏 헤어", age: 1, weight: 0.1 };
cat          // 나비
kitty.name   // 나비
~~~

+ 객체의 프로터피를 순회하는 방법 중 for / in 문 이외에도 다음과 같은 메소드를 사용할 수 있다.  
1. Object.keys() : Object.keys() 메소드는 해당 객체가 가진 고유 프로퍼티 중에서 열거할 수 있는 프로퍼티의 이름을 배열에 담아 반환합니다.
2. Object.getOwnPropertyNames() : Object.getOwnPropertyNames() 메소드는 해당 객체가 가진 모든 고유 프로퍼티의 이름을 배열에 담아 반환합니다.  
e.g)  
~~~
function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}
var myDog = new Dog("흰색", "마루", 1);

// color 프로퍼티의 enumerable 속성을 false로 설정함.
Object.defineProperty(myDog, 'color', {enumerable : false} );
// 객체가 가진 고유 프로퍼티 중에서 열거할 수 있는 프로퍼티 이름을 배열에 담아 반환함.
document.write(Object.keys(myDog) + "<br>");       // name, age
// 객체가 가진 모든 고유 프로퍼티의 이름을 배열에 담아 반환함.
document.write(Object.getOwnPropertyNames(myDog)); // color, name, age
~~~


