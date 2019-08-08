## 20180125
+ javascript의 전역변수 유효범위가 java와 다르므로 주의해야함.

## 20180129
+ 도움될만한 JavaScript 책링크 : http://www.tutorialspoint.com/javascript/javascript_tutorial.pdf

## 20180130
+ 익명일 때 funcion()과 ()=> 는 같지만 ()=>는 callback (익명함수) 일 경우만 사용 가능하다. - function4.html 확인

## 20190808
####  JavaScript에서 미리 정의되어 있는 전역 함수.

+ 1. eval()
문자열로 표현된 자바스크립트 코드를 실행하는 함수.  
e.g)   
~~~
var x = 10, y = 20;

var a = eval("x + y"); // 30

var b = eval("y * 3"); // 60

document.write(a + "<br>" + b);
~~~

+ 2. isFinite() : 

3. isNaN()

4. parseFloat()

5. parseInt()

6. decodeURI()

7. decodeURIComponent()

8. encodeURI()

9. encodeURIComponent()

10. escape()

11. unescape()

12. Number()

13. String()
~~~
