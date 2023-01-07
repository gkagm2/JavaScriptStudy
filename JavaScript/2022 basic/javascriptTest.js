const arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < arr.length; ++i) {
    console.log("for " + arr[i]);
}

let i = 0;
while (i < arr.length) {
    console.log("while " + arr[i]);
    ++i;
}

i = 0;
do {
    console.log("do " + arr[i]);
    ++i;
} while (i < arr.length);

for (const item of arr) {
    console.log("for of " + item);
}

const Obj = {
    red: "RED",
    blue: 2345,
    green: "GREEN",
};
for (const idx in Obj) {
    console.log("for in " + idx + " " + Obj[idx] + " " + typeof Obj[idx]);
}


function* Gen() {
    yield 10;
    yield 20;
    return 30;
}

const func = Gen()
console.log(func.next());
console.log(func.next());
console.log(func.next());

let v = [1, 4, 2, 7, 5];
//let cnt = v.map(function(e){return e.length;});
v.sort();
console.log(v);


class Person {
    _bloodType
    constructor(bloodType) {
        if (bloodType === 'A' && bloodType === 'B' && bloodType === 'O' && bloodType === 'AB')
            this._bloodType = bloodType;
    }
    set bloodType(bt) {
        this._bloodType = bt;
    }
    get bloodType() { return this._bloodType; }
}

let person = new Person("A");
person._bloodType = 'C';
console.log(person);
delete person.bloodType;


const myobj = Object.create(null, {
    name: {
        value: "jang",
        writable: true, // 쓰기 가능 , false면 read only
        configurable: true // true면 delete 가능. false면 삭제 못함.
    }
})

myobj.name = "fd";
delete myobj.name;
console.log(myobj.name);

function ul(child) {
    return `<ul>${child}</ul>`;
}
function ol(child) {
    return `<ol>${child}</ol>`;
}

//////////////////////////////////////////////////////////////////

// container는 설정한 규격의 함수만을 받겠다 라는 것임

// 일급함수
// type script에서만 가능한듯?
// function DiscountPrice(discountRate) {
//     return function(price) {
//         return price - (price * (discountRate * 0.01));
//     }
// }

// console.log("여름 세일 : " + DiscountPrice(30)(567000));
// console.log("겨울 세일 : " + DiscountPrice(20)(567000));

// let summerPriceFunc = DiscountPrice(30);
// let winterPriceFunc = DiscountPrice(20);

// console.log("여름 세일2 : " + DiscountPrice(567000));
// console.log("겨울 세일2 : " + DiscountPrice(567000));


///////////////////////////////////////////////////////
// 1. Producer
// 마지막에 최종 데이터를 전달하는 resolve 콜백 함수, 중간에 문제가 생기면 호출하게될 reject 콜백 함수 필요
// 새로운 Promise가 생성되는 순간 전달한 executor라는 콜백 함수가 바로 실행 됨.
const promise = new Promise((resolve_callbackFunc, reject_callbackFunc) => {
    // doing some heavy work(); // 네트워크에서 데이터를 받아오거나 파일에서 무언가 큰 데이터를 읽어오는 과정.
    // setTimeout은 시간을 딜레이해줌
    //setTimeout(()=>{resolve_callbackFunc('ellie')}, 2000); // 2초정도 무엇인가 한 후 resolve_callbackFunc를 호출.
    console.log("do something");
    // 무엇인가 실패 했을 경우 reject_callbackFunc를 호출하게 함. rect는 Error() 오브젝트를 이용해서 값을 전달함.
    setTimeout(() => {
        try {
            resolve_callbackFunc('ellie')
        }
        catch {
            reject_callbackFunc(new Error('no network'))
        }
    }, 2000);
});

// 2. Consumers : then, catch, finally를 이용해서 값을 받올 수 있다.
// 값이 정상적으로 잘 수행된다면 -> then  // ellie라는 값이 value에 들어 올 것임. // finally는 성공여부에 관계없이 무조건 호출 됨.
promise.then((value) => { console.log(value); }).catch((error) => { console.log(error) }).finally(() => { console.log("finally") });


// 3. Promise chaning
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 1000); // 1초 후 숫자 10 전달
});

// then을 묶어서 사용 가능, 또한 then안에 Promise를 넣을 수 있음
fetchNumber.then((value) => value * 2).then(value => value * 3).then(value => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value - 1), 3000);
    });
})
    .then(value => console.log("최종 값 : " + value));

// 4. Error handling
const getHen = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000)
    });
};

const getEgg = (hen) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} -> 달걀`), 1000);
    });
}
const cook = (egg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} -> 달걍 후라이`), 1000);
    });
}

getHen().then(hen => getEgg(hen)).then(egg => cook(egg)).then(meal => console.log(meal));

// 비동기 코드 (function 시그니처 앞에 async  붙이기) (기존의 promise 객체를 반환하는 함수가 있다면 그 앞에 await를 붙이면 된다.)
async function Main() {
    try {
        const result = await fetchNumber(1); // promise를 반환하는 delay 객체라고 치셈
        console.log('done async!' + result);
    } catch (e) {
        console.log('fail async!' + e);
    }
}
Main();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 함수 내부에 누적 값 적용
function makeGen(){
    let a=0;
    return ++a;
}
for (let i = 0; i < 3; ++i) {
    console.log("그냥 호출 : " + makeGen());
}
function makeGen2() {
    let a = 0;
    return function(){
        ++a;
        return a;
    }
}

const mg = makeGen2();
for (let i = 0; i < 3; ++i) {
    //console.log("누적 호출2 : " + makeGen2());
    console.log("누적 호출2 : " + mg());
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Generator function