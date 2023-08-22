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

// var andy={
//     name: 'andy'
// };

// var han={
//     name: 'han'
// };

// //var map = new Map();
// var weakmap= new WeakMap();
// weakmap.set(andy,"andy value");
// weakmap.set(han, "han value");

// andy= null;
// console.log(weakmap.has(andy)); //false
// // for(var obj of weakmap.keys()){
// //     console.log(obj);
// // };

// var obj={
//     a: 1,
//     b:[1,2,3]
// };
// obj.b='asd';
// console.log(obj);

// var a=10;
 
// var user ={
//     name: 'andy',
//     extra : {
//         age: 25,
//         gender: 'male',
//     }
// };
// var deepCopyObject = function(target){
//     return JSON.parse(JSON.stringify(target));
// };

// var result= deepCopyObject(user);

// result.name='kim';
// result.extra.age=14;
// result.extra.gender="asd";
// console.log(result);

// //배열의 뒷부분 값을 삭제
// var arr= new Array();
//  arr= [1,2,3,4];
//  arr.pop();
//  console.log(arr); //[1,2,3]

//  //배열 뒷부분에 값을 삽입
//  arr=[1,2,3]
//  arr.push(4);
//  console.log(arr); //[1,2,3,4]

//  //배열 앞부분에 값을 삽입
//  arr=[1,2,3];
//  arr.unshift(0);
//  console.log(arr);

//  //배열 앞부분의 값을 삭제
//  arr=[1,2,3,4];
//  arr.shift();
//  console.log(arr); //[2,3,4]

// //배열의 특정위치에 요소를 추가하거나 삭제
// //매개변수로(index, 제거할 요소 개수, 배열에 추가될 요소)
// var arr=[1,2,3,4,5]; 
// arr.splice(2,2);
// console.log(arr); //2번째 인덱스부터 2개 제거

// var arr=[1,2,3,4,5];
// arr.splice(2,1,0);
// console.log(arr); //2번째 인덱스부터 1개 제거후 숫자 0 추가

// //다수의 배열을 합치고 병합된 배열의 사본을 반환
// var arr1= [1,2,3];
// var arr2= [4,5,6];
// var arr3= arr1.concat(arr2);
// console.log(arr3);

// //배열의 모든 요소가 제공한 함수로 구현된 테스트를 통과했는지를 테스트
// arr =[1,2,4];

// var even =function(value){
//     return value %2===0;
// };
// console.log(arr.every(even));

// //지정된 함수의 결과가 true일때까지 배열의 각 원소를 반복
// arr =[1,2,4];

// var even =function(value){
//     return value %2===0;
// };
// console.log(arr.some(even)); // true, 하나라도 true이면 true를 반환

// //배열의 각 원소별로 지정된 함수를 실행
// var arr=[1,2,3];
// arr.forEach(function(value){
//     console.log(value); /*1
//                           2
//                           3
//                           */         
// })


// //map 메서드는 파라미터로 콜백함수를 받는데, 그 콜백 함수의 파라미터는 요소, index, map메서드를 호출한 배열이디.
// var arr =  [1,2,3,4,5];

// var myArr= arr.map(function(current, index, array){

//     return current *2;
// });

// console.log(myArr);

// var arr=[1,2,3,4,5];

// var newArr= arr.map(function(current, index){
//     console.log(`요소${current}`);
//     console.log(`키${index}`);
    
//     return current *2; // [2,4,6,8,10]
// })

// console.log(newArr);
// //결과적으로 map은 메서드를 호출한 배열의 길이 만큼의 새로운 배열을 만들어내는게 핵심인데, 콜백 함수의 return 값을 통해 새로운 배열들의 각 요소를 변형할수 있다는 특징


// //끝으로 만약 map메서드의 콜백 함수가 아무것도 리턴하지 않을 경우 호출한 배열의 길이 만큼 undefined가 채워진 배열이 리턴된다.
// var arr=["asd","aasd"];

// var newArr=arr.map(function(){
 
// });
// console.log(newArr); //[undefined undefined] 

// //filter

// //지정된 함수의 결과 값을 true로 만드는 원소들로만 구성된 별도의 배열을 반환한다.
// var arr= [1,2,3,4,5,6,7,8,9,10];
// var even = function(value){
//     return value % 2=== 0;
// };

// var newArr = arr.filter(even);
// console.log(newArr); [2,4,6,8,10] 

// //reduce
// //누산기(accumulator) 및 배열의 각 값(좌에서 우로)에 대해 (누산된) 한 값으로 줄도록 함수를 적용
// var arr=[1,2,3,4,5,6,7,8,9,10];

// var value = arr.reduce(function(accumulator, current, index){
//     return accumulator+current+index;
// });
// console.log(value); //55

// //배열의 원소 순서를 거꾸로 바꾼다

// var arr= [1,2,3,4];
// arr.reverse();
// console.log(arr);

// //배열의 원소를 알파벳순으로, 또는 지정된 함수에 따른 순서로 정렬한다. 모든 원소를 문자열로 취급해 사전적으로 정렬
// var arr=[4,3,2,1];
// arr.sort();
// console.log(arr);

// //배열을 문자열로 바꾸어 반환한다.
// var arr= ["1","2"];
// console.log(arr.toString());

// var user ={
//     name: 'andy',
//     age: 25,
//     extra: {
//         job: 'frontend-developer'
//     }
// };

// var change = function(name,age,user){
//     return{
//         name: name,
//         age: age,
//         extra: user.extra,
//     }
// };

// var deepCopyObject = function(target){
//     return JSON.parse(JSON.stringify(target));
// }

// var han = deepCopyObject(user);

// han.extra.job="asd";
// console.log(user.extra.job);

// console.log(eval("1+3"));

// var test={
//     a: addm,
//     b: addEventListe,

// };
// console.log(test);

// var obj={
//     a:123,
//     b:{
//         c:1,
//         d:2,
//     }
// };

// //객체 프로퍼티만 변경
// var copyObj=function(obj, newNumber){
//     var newObj = obj;
//     newObj.a= newNumber;
//     return newObj;
// }

// //객체 자체를 변경
// var copyObj2=function(obj,newNumber){
//     return{
//         a: newNumber,
//         b: obj.b
//     }
// }

// var copyObj3=function(target){
//     return JSON.parse(JSON.stringify(target));
// }

// // var copyObj3 =function(obj,newNumber){
// //     return{
// //         a:newNumber,
// //         b:
// //     }
// // }


// //var test =copyObj(obj, 1);
// //var test= copyObj2(obj,3);

// var test = copyObj3(obj);

// test.b.c=3;
// console.log(test.b);

// var user={
//     name: 'andy',
//     age: 25,
// }
// user=null;
// console.log(user.age);
// console.log(user.name);

// var user = new Map();

// var andy={
//     name: 'andy'
// }

// var tom={
//     name:'tom'
// }

// user.set(andy,1);
// user.set(tom,2);

// andy=null;
// for(var obj of user.keys()){
//     console.log(obj);
// }

// function solution(num_list){
//     var arr=new Array();
//     for(var i=num_list.length-1; i>=0; i--){
//         arr.push(num_list[i]);
//     }
//     return arr;
// }

// var num_list=[1, 1, 1, 1, 1, 2];
// console.log(solution(num_list));

// var message="I love you~";

// function solution(message){
//     var count=0;
//     var test=Array.prototype.map.call(message, function(char){
//       return char;
//     })
//     return test.length*2;
    
// };

// //solution(message);
// console.log(solution(message));


// var my_string='jaron';

// function solution(my_string){
//     var result= [];
//     var array = Array.prototype.map.call(my_string, function(char){
//         return char;
//     })
//     for(var i=array.length-1; i>=0; i--){
//         result.push(array[i]);
//     }
//     return result.join("");
// }
// console.log(solution(my_string));

// var strlist=["We", "are", "the", "world!"];

// function solution(strlist){
//     for(var i=0; i<strlist.length; i++){
//         var arr= Array.prototype.map.call(strlist,function(value){
//             arr[i]=value;
//             return arr;
//         })
//     }
// }
// //solution(strlist);
// console.log(solution(strlist));

// // var test = strlist.map(function(v){
// //     return v+'!';
// // })
// // console.log(test);

// var a=10;
// var b=a;

// var obj={
//     a:10
// };

// var obj2=obj;

var user={
    name: 'andy',
    age: 25,
};
// var copyUser =function(user,newName){
//     return{
//         name: newName,
//         age: user.age,
//     }
// };

// //기존 정보를 복사해서 새로운 객체를 반환하는 함수(얕은 복사)
// var copyObject =function(target){
//     var result={};
//     for(var prop in target){
//         result[prop] = target[prop];
//     }
//     return result;
// };

// var tom= copyObject(user);
// tom.name='tom';
// tom.age=3;
// console.log(user); //false 

// //객체의 깊은 복사를 수행하는 범용 함수
// var deepCopyObject=function(target){
//     var result={};
//     if(typeof target ==='object'&&target!==null){
//         for(var prop in target){
//             result[prop] = deepCopyObject(target[prop]);
//         }
//     }else{
//         result=target;
//     }
//     return result;
// };

// s


// var x={
//     a: {
//         b: 2
//     }
// };

// var y =x;
// x=1; //객체와의 연결 끊음

// var z=y.a.b; //객체 b의 메모리 주소가 연결됨
// y='bumsu' //변수 y에는 문자열을 할당하여 객체 a와의 연결을 끊은 상태

// z=null// 객체 b와의 연결을 끊은 상태;

function foo(s){
    s="재할당합니다"
    return s.substring(0,2);
};
var str = "hello world!";
foo(str);

console.log(foo(str));
console.log(str);
