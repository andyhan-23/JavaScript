// //심볼의 생성 및 활용
// var sym1 = Symbol();
// var sym2 = Symbol('andy');
// var sym3 = Symbol('han');

// //자바스크립트에서 객체의 프로퍼티 키는 보통 문자열 값이다.
// var obj={};

// obj.propertyKey1 = 'propertyValue1';
// obj['propertyKey2']= 'propertyValue2';
// obj[2]= 'propertyValue3';
// console.log(obj[2]); //property value

// var obj2={
//     1: 'andy',
//     2: 'han',
//     2: 'kim',
//     1: 'adasd',
// };
// console.log(obj2);

//문자열 대신 심볼도 프로퍼티 키로 사용될 수 있다.-> 이 경우 기본적으로 심볼은 고유하기 때문에 
//심볼을 키로 값는 프로퍼티는 다른 어떤 프로퍼티와도 충돌하지 않음
// var obj={};
// var key1 = Symbol(); 
// var key2 = Symbol('andy');
// var key3 = Symbol('andy');

// obj[key1] = 'jaehyeok';
// obj[key2] = 'andy';
// obj[key3] = 'han'; //충돌이 일어나지 않음

// console.log(obj);
 
//내장 심볼

// //Symbol.for()메소드
// var sym1 = Symbol.for('foo'); //create symbol
// var sym2 = Symbol.for('foo'); //reuse symbol

// console.log(sym1===sym2);

// //Symbol.keyFor()메서드
// var name = Symbol('andy');

// var id = Symbol.keyFor(name);
// console.log(id); //undefined

// var test = Symbol.for('andy');
// var result= Symbol.keyFor(test);
// console.log(test); //andy
// //인자로 전달받은 심보을 전역 심볼 레지스터리에서 찾고, 그 심볼의 키를 반환하고, 탐색에 실패하면 undefined를 반환합니다.

// var obj={};

// obj[Symbol('a')] ='a';
// obj[Symbol('b')]='b';
// obj.c = 'c';
// obj['d']='d';

// for(var key in obj){
//     console.log(key); //c, d
// }

// var sym = Symbol('andy');

// var obj ={
//     [sym]: 'andy',
//     han: 'han',
//     1:123
// }

// console.log(obj['1']);

// var a='1';
// var b=1;
// console.log(a===b);

// //다른 개발자가 만들어 놓은 객체
// var user = {
//    name: 'andy',
//    age: 25, 
// };

// function test(){
//     return console.log(user);
// }

// //내가 작업
// var key= Symbol('andy'); 

// // user[key]= function(){
// //     console.log(this.age);
// // };

// user[key]=12;
// // //사용자가 접속하면 보는 메세지
// // for(key in user){
// //     console.log(`his ${key} is ${user[key]}.`);
// // }

// // console.log(user[key]);
// user[key];
// test();

//정규 표현식

//정규표현식 리터럴: 다음과 같이 슬래시로 패턴을 감싸서 작성합니다.
// var regExp = /a/;
// console.log(regExp);

// var re = new RegExp("ab+c");
// console.log(re);

// //정규표현식으로 아래와 같은 패턴을 만들어주면, 특정 문자열이 해당 페턴이 맞는지 체크 가능
// const phoneNumber = /\d{3}-\d{4}-\d{4}/;
// var result=phoneNumber.test('0123-123-123');
// var result=phoneNumber.test('010-1234-5678');
// console.log(result);

// //정규 표현식 객체 생성자
// //var pattern  = new regExp('a');

// var result=regExp.exec('aasdasdasd');

// var regExp = /a./;
// //여기서 .은 하나의 문자 -> .안에는 문자가 와야 하고 반드시 앞에는 a가 있어야 함
// var result=regExp.exec("asdasdadasd");
// console.log(result); // "as"
// var result2 =regExp.test("as");
// console.log(result2);

//map

// var user ={};

// user.name= "andy";
// user.age =25;

// console.log(user.age);

// //object 객체 에서 name가져올때
// var user ={};
// user.name="andy"; 
// user.age= 25;
// user.job="front-end developer";

// console.log(user.name);

// //map 객체 생성해서 name 가져올때
// var userMap = new Map();

// userMap.set("이름", "andy");
// userMap.set("나이", 25);
// userMap.set("직업", "frontend-developer");
// userMap.set(1,"Adads");

// console.log(userMap.get("1"));

//object
// var GuestArr=[
//     {name: "A" , city: "SEOUL"},
//     {name: "B" , city: "SEOUL"},
//     {name: "C" , city: "SEOUL"},
//     {name: "D" , city: "JEJU"},
//     {name: "E" , city: "JEJU"},
//     {name: "F" , city: "SEOUL"},
// ];

// var guest={};
// GuestArr.forEach(function(item){
//     if(!guest[item.city]){
//         guest[item.city] =[];
//     }
//     guest[item.city].push(item.name);
// })
// console.log(guest);

// //map
// var mapGuest = new Map();

// GuestArr.forEach(function(item){
//     if(!mapGuest.has(item.city)){
//         mapGuest.set(item.city, []);
//     }
//     mapGuest.get(item.city).push(item.name);
// })

// console.log(mapGuest);

// var m = new Map();

// m.set("a","b");
// m.set({a:'a'},{b:'b'});

// console.log({a:'a'}==={a: 'b'});

// var key = {key: 'key'};
// m.set(key, "123");

// console.log(m.size);

// var obj ={a:'a', b:'b', c:'c'};

// for(var i in obj){
//     console.log(obj[i]);
// }

// var set = new Set();

// set.add(3);
// set.add(2);
// set.add(2);
// console.log(set);

// var arr2  =[1,2,3,4,5,6,6,6];

// var set = new Set(arr2);
// //console.log(set);
// var result=Array.from(set);
// console.log(result);

// var wm = new WeakMap();

// var m = new Map();
// var obj={a:'a'};
// var key={a:'a'};
// wm.set(obj, '123');
// m.set(key, '123');
// console.log(wm.get(obj));
// console.log(wm);
// obj= null;
// //console.log(wm.get(obj));
// //console.log(m.get(key));
// key=null;
// //console.log(m);

// var test ={
//     name: 'andy'
// }
// test=null;
// console.log(test);

// var user = { 
//     name: "andy",
//     age: 25,
//  }
// user = null;
// console.log(user);

var andy={
    name: 'andy'
};

var han={
    name: 'han'
};

//var map = new Map();
var weakmap= new WeakMap();
weakmap.set(andy,"andy value");
weakmap.set(han, "han value");

andy= null;
console.log(weakmap.has(andy)); //false
// for(var obj of weakmap.keys()){
//     console.log(obj);
// };

