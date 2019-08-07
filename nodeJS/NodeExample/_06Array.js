var Users = [{name : '트와이스', age : 20}, {name : '레드벨벳', age : 21}];


// push, pop
{


    console.log('push() 호출 전 배열 요소의 수 : %d', Users.length);

    Users.push({name : '티아라', age : 23});

    console.log('push() 호출 후 배여 요소의 수 : %d', Users.length);

    Users.pop();

    console.log("pop() 호출 후 배열 요소의 수 : %d" , Users.length);

}

var Users = [{name : '트와이스', age : 20}, {name : '레드벨벳', age : 21}];
// unshift, shift
{
    Users.unshift({name:'여자친구', age : 22});

    console.log('unshift() 호출 전 배열 요소의 수  %d', Users.length);
    for(var i=0 ; i< Users.length; i++){
        console.log("check name : " + Users[i].name);
    }
    
    
    
    Users.shift();
    
    
    console.log('shift() 호출 후 배열 요소의 수 : %d', Users.length);
    for(var i=0 ; i< Users.length; i++){
        console.log("after check name : " + Users[i].name);
    }
    
}


var Users = [{name : '트와이스', age : 20}, {name : '레드벨벳', age : 21}];
{
    console.log("delete 키워드로 배열 요소 삭제 전 배열 오소의 수 : %d", Users.length);

    delete Users[1];

    console.log("delete 키워드로 배열 요소 삭제 후");
    console.dir(Users);

    Users.splice(1, 0 , {name : '에프터스쿨', age :  25});

    console.log('splice()로 요소를 인덱스 1에 추가한 후');
    console.dir(Users);

    Users.splice(2, 1);

    console.log('splice()로 인덱스 1의 요소를 1개 삭제한 후');
    console.dir(Users);
}


