// //스태틱 메서드, 프로토타입 메서드
// var Rectangle =function(width, height){
//     this.width=width;
//     this.height=height;
// };

// var Triangle = function(width, height){
//     this.width =width;
//     this.height= height;
// }

// Rectangle.prototype.getArea=function(){
//     return this.width*this.height;
// };

// Triangle.prototype.getArea=function(){
//     return (this.width*this.height)/2;
// }

// Rectangle.isRectangle =function(instance){
//     return instance instanceof Rectangle && 
//         instance.width > 0 && instance.height >0 
//         || instance instanceof Triangle;
// };

// var rect1 = new Rectangle(3,4);
// var triangle1 = new Triangle(1,3)

// console.log(rect1.getArea());
// //console.log(rect1.isRectangle(rect1));
// console.log(Rectangle.isRectangle(rect1))
// console.log(Rectangle.isRectangle(triangle1))

//다중 프로토 타입 체인
// var Grade =function(){
//     var args= Array.prototype.slice.call(arguments);
//     for(var i=0; i<args.length; i++){
//         this[i] = args[i];
//     }
//     this.length = args.length;
// };
// var g = new Grade(100,80);
// console.log(g);

// var arr=[10,20,30,40,50];
// console.log('기본 for 문');
// for(var index=0; index<arr.length; index++){
//     console.log(arr[index]);
// }
// console.log('\n향상된 for 문');
// for(var item of arr){
//     console.log(item);
// }
// console.log('\n map 함수');
// arr.map(function(item, index){
//     console.log(index+'번 값:', item);
// });

// let obj={};
// var map = new WeakMap();
// map.set(obj,{key: "some_value"});
// console.log(map.get(obj));
// obj=undefined;


// // console.log(map.get(obj));


//map

// var m= new Map();
// m.set({a:'a'},{b:'b'});
// console.log(m);
// console.log(m.get({a:'a'}));

// var wm = new WeakMap();

// var obj={};
// wm.set(obj,'123');
// console.log(wm);
// obj=null;
// console.log(wm);

// var Person = function(name){
//     this._name= name;
// };
// Person.prototype.getName=function(){
//     return this._name;
// }
// //이제 person의 인스턴스는 __proto__ 프로퍼티를 통해 getName을 호출할수 있음

// var andy = new Person("andy");
// console.log(andy.__proto__.getName()); //undefined
// console.log(Person.prototype===andy.__proto__); //true

// andy.__proto__._name="andy";
// console.log(andy.__proto__.getName()); //andy

// var tom = new Person("tom");
// console.log(tom.getName()); //tom



// var Constructor = function(name){
//     this.name= name;
// }
// Constructor.prototype.method1=function(){
// };
// Constructor.prototype.property1='Constructor Prototype Property';

// var instance = new Constructor('instance');

// console.dir(Constructor);
// console.dir(instance);



//console.log(instance.name==Constructor.name);

// var arr=[1,2];
// arr.forEach(function(){}) // 출력 가능
// console.log(Array.isArray(arr))//true
// arr.isArray(); //typeError

// var arr=[1,2];
// console.log(Array.prototype.constructor===Array); //true
// console.log(arr.constructor===Array); //true
// console.log(arr.__proto__.constructor===Array);//true

// var arr2= new arr.constructor(3,4);
// var arr3= new arr.__proto__.constructor(4,5);
// console.log(arr2); //[3,4]
// console.log(arr3); //[4,5]

// var NewConstrucotr = function(){
//     console.log('this is new constructor!');
// };
// var dataTypes=[
//     1,       //Number & false
//     'test',
//     {},
// ];

// dataTypes.forEach(function(d){
//     d.constructor = NewConstrucotr;
//     console.log(d.constructor, '&', d instanceof NewConstrucotr);
// })

// var Person = function(name){
//     this.name = name;
// };
// var p1 = new Person('사람1');
// var p1proto = Object.getPrototypeOf(p1);
// var p2= new Person.prototype.constructor('사람2');
// var p3= new p1proto.constructor('사람3');
// var p4 = new p1.__proto__.constructor('사람4');
// var p5 = new p1.constructor('사람5');

// [p1,p2,p3,p4,p5].forEach(function(p){
//     console.log(p,p instanceof Person);
// })
/*
Person { name: '사람1' } true
Person { name: '사람2' } true
Person { name: '사람3' } true
Person { name: '사람4' } true
Person { name: '사람5' } true
*/

// //메서드 오버라이드
// var Person = function(name){
//     this. name = name;
// }
// Person.prototype.getName= function(){
//     return this.name;
// };

// var iu = new Person('지금');
// iu.getName =function(){
//     return '바로' + this.name;
// };
// console.log(iu.getName()); //바로 지금

// Person.prototype.name='이 지금';
// console.log(iu.__proto__.getName()); //이 지금
// console.log(iu.__proto__.getName.call(iu)); //지금

// var arr=[1,2];

// arr.push(3);
// console.log(arr);
// console.log(arr.hasOwnProperty(7));

// var arr=[1,2];
// console.log(Array.prototype.toString.call(arr)); //1,2 출력
// console.log(Object.prototype.toString.call(arr)); //[object Array] 출력

// console.log(arr.toString()); //1,2 출력

// arr.toString= function(){
//     return this.join('_');
// };
// console.log(arr.toString());

// var obj={a:1};
// console.log(Object.prototype.toString.call(obj));
// console.log(obj.toString());

// obj.toString=function(){
//     return v=9;
// }
// console.log(obj.toString());


// test();
// function test(){
//     console.log(1);
// }; 

// var func=function(){
//     console.log(2);
// };
// func();


// function foo(){
//     return
//     {}
// }; 

// console.log(foo());
// console.log(5/3);

// var nan=12;
// var x= nan;
// console.log(x);

// console.log('""');

// let first= 'han';
// let last = 'andy';

// let template =`sada`;
// console.log(template);
// //console.log("my name is "+last +' '+first);
// console.log(`my name is ${last} ${first}`)
// console.log(`1+2=${1+2}`);
// console.log('1+2=${1+2}');

// var mySymbol = Symbol("a");
// var mySymbol = Symbol("b");
// console.log(typeof mySymbol);
// console.log(mySymbol.description);
// console.log(mySymbol.toString());
// console.log(!!mySymbol);

// if(!!mySymbol){
//     console.log("hello ");
// }

// const direction={
//     up:1,
//     down: 2,
//     left: 3,
//     right: 4,
// };

// const mydirection= direction.up;

// if(mydirection===direction.up){
//     console.log("you're goung up");
// };

// const direction2={
//     up: Symbol('up'),
//     down: Symbol('down'),
//     left: Symbol('left'),
//     right: Symbol('right'),
// };

// const mydirection2= direction2.up;

// direction2.up=
// if(mydirection2===direction2.up){
//     console.log('you are going up');
// }

// var arr= new Array();
// arr=[1,2,3,13];
// var result=arr.find(function(value){
//     var answer= value>10;
//     return answer;
// })
// console.log(result);

// Array.prototype.sum= function(){
//     return this.reduce(function(accumulator, currentValue){
//         return accumulator+currentValue;
//     })
// };

// // var array=[1,2,3];
// // console.log(array.sum());

// Array.prototype[Symbol.for('sum')]= function(){
//     return this.reduce(function(accumulator,currentValue){
//         return accumulator+currentValue;
//     })
// };

// console.log([5,6,7].sum());
// console.log([1,2,3][Symbol.for('sum')]());


// var test=3;
// console.log(typeof test);

// for(var i=0; i<2; i++){
//     console.log(i);
// }

// for(var i=0; i<3; i++){
//     console.log(i);
// }

// for(var i=0; i<4; i++){
//     console.log(i);
// }

// var number=10;
// var string= number.toString();
// console.log(typeof string, string);
// console.log(typeof number, number);

// var user={
//     name:'andy',
//     gedner: 'male',
// };
// user=null;
// console.log(user&&user.name);

// var obj={
//     a:3,
// };

// var test={
//     a:4,
// }

// console.log(test.b);

// var user={
//     1:'andu',
//     '2':'ads',
//     length: 2,
// };
// console.log(Object.keys(user));


// var obj={};
// var key= 1;
// obj[key]='name;';

// console.log(obj);

// var person={
//     name: 'andy', //프로퍼티
//     age: 20, //프로퍼티 (age:키, 20:value)
// }

// var counter={
//     num: 0, //프로퍼티
//     func: function(){
//         return this.num++; //메서드
//     }
// }

// var person = {
//     name: 'lee',
//     sayHello: function(){
//         console.log(`hello! my name is${this.name}`)
//     }
// };

// // var func=function(){
// //     console.log("a"); 
// // };

// //객체 리터럴에 의한 객체 생성
// var person ={
//     name:'andy',
//     func: function(){
//         console.log(`hello my name is ${this.name}`);
//     }
// }
// console.log(typeof person); //object
// person.func()//hello my name is andy

// var empty={};
// console.log(empty); //{}출력

// var person={
//     name: 'andy',//프로퍼티 키는 name, 값은 문자열 andy
//     age: 25, //프로퍼티 키는 age, 값은 숫자 25
// }

// var person={
//     a: 'andy',
//     'nam' : '1',
// }
// var key='asd';
// person[key]=2;
// // //var test= person[a];
// // console.log(person.asd);

// var obj={};
// var key='key';
// obj[key]= 1;
// console.log(obj); // {key:1} 출력

// var obj={
//     '':'' //빈 문자열도 프로퍼티 키로 사용할 수 있다
// }
// console.log(obj);

// var name={
//     name: 'andy',
//     name: 'han'
// }
// console.log(name); //{name: han}출력

// var circle ={
//     radius: 5, //프로퍼티
//     diameter: function(){
//         return this.radius*2; //메서드
//     }
// }
// let result=circle.diameter(); //10

// var person={
//     'first-name':'han',
//     1:32
// }

// //console.log(person.'first-name'); //error 출력
// //console.log(person.first-name); //error 출력

// //console.log(person[first-name]); //error 출력
// //console.log(person['first-name']); //han 출력

// //console.log(person.1) //error출력
// //console.log(person.'1') //error출력
// console.log(person['1']); //32 출력
// console.log(person[1]); //32 출력


// var person={
//     name: 'andy',
// }
// person.name='han';
// console.log(person);
// person.age=25;
// console.log(person); //{name: 'han', age:25}출력
// delete person.age;
// console.log(person);


// //ES5
// var x=1,y=2;

// var obj={
//     x:x,
//     y:y,
// }
// console.log(obj); // {x:1 ,y:2} 출력

// //ES6
// var obj={
//     x,y
// }
// console.log(obj);//{x:1, y:2} 출력

// function add(x,y){ //x, y를 매개변수
//     return x+y; //반환값
// }
// add(2,5); //2,5를 인수

// //함수 선언문
// function add(x,y){
//     return x+y;
// }
// //console.log(add(3,4)); //함수 호출

// add(2,3);
// //함수 표현식
// var plus=function(x,y){
//     return x+y;
// }
// plus(3,4);

// console.log(add(3,4)); //7;
// console.log(minus(3,4)); //error

// function add(x, y){
//     return x+y;
// };

// var minus=function(x,y){
//     return x-y;
// };

// var add=new Function('x','y','return x+y');
// console.log(add(4,5));

// var add1=(function(){
//     var a=10;
//     return function(x,y){
//         return x+y+a;
//     };
// }());
// console.log(add1(2,4))

// var add2=(function(){
//     var a=10;
//     return new Function('x','y','return x+y+a'); //error: a is not defiend
// }());
// console.log(add2(3,4));

// var func=function(x,y){
//     return x+y;
// }

// var add=function(a,b){
//     return a+b;
// }
// console.log(add(3)); // error: NaN 출력 


// function add(x,y){
//     return x+y;
    
// }
// function add(x,y){
//     if(typeof x!=='number' && typeof y!=='number'){
//         throw new TypeError("비정상")
//     }else{
//         console.log("정상입니다.")
//     };
//     return x+y;
    
// }
// console.log(add('ㅁ','ㅁ')); //error 출력

// function func(x,y){
//     var innerFunc=function(x,y){
//         return x-y;
//     }
//     innerFunc();
//     return x+y;
// }
// console.log(func(3,4)); //7

// function func(x,y){
//     return;
// }
// console.log(func()); //undefined 출력

// function func(x,y){
//     return
//     x+y; //무시된다.
// }
// console.log(func(3,4))//undefined 출력

//매개변수는 primitive 원시 값을 전달받고, 매개변수 obj는 객체를 전달받는다.
// function changeVal(primitive, obj){
//     primitive=primitive+100;
//     obj.name='kim';
// };

// //외부 상태
// var num=10;
// var person ={name: 'lee'};

// console.log(num); //100
// console.log(person); //{name:lee}
// //원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
// changeVal(num, person); 

// //원시 값은 원본이 훼손되지 않는다
// console.log(num); //100
// console.log(person); //{name:kim} 

//즉시 실행함수
// var plus=(function(){
//     var a=3;
//     var b=5;
//     return a+b;
// }());
// console.log(plus);

// function countdown(n){
//     for(var i=n; i>=0; i--){
//         console.log(i)
//     }
// };
// countdown(10);

// //재귀함수 예시
// function recursive_func(n){
//     if(n<0){
//         return;
//     }
//     console.log(n);
//     recursive_func(n-1);
// }
// recursive_func(10);
//팩토리얼
// function factorial(n){
//     if(n<=1) return 1;
//     return n*factorial(n-1);
// }
// console.log(factorial(-3));

// function outer(){
//     console.log(1);
//     function inner(){
//         console.log(2);
//     }
//     inner();
// }
// outer();

// function outer(){
//     var x=1;
    
//     //중첩 함수
//     function inner(){
//         var y=2;
//         //외부 함수의 변수를 참조할 수 있다.
//         console.log(x+y); //3;
//     }
//     inner();
// }
// outer();

// //n만큼 반복하여 i를 출력한다
// function repeat(n){
//     for(var i=0;i<=n; i++){
//         console.log(i);
//     }
// };
// repeat(5);//0,1,2,3,4,5

// //n만큼 반복하여 i가 짝수일때만 출력
// function oddRepeat(n){
//     for(var i=0 ;i<n; i++){
//         if(i%2==0){
//             console.log(i)
//         }
//     }
// };
// oddRepeat(5);//0,2,4

// //외부로 전달받은 f를 n만큼 반복 호출한다.
function repeat(n,f){
    for(var i=0;i<=n; i++){
        f(i);
    }
};

// function logAll(n){
//     return n;
// };

// function logOdd(n){
//     if(n%2==1){
//         console.log(n);
//     }
// };

// //반복 호출할 함수를 인수로 전달
// repeat(5,logAll); //0,1,2,3,4,5
// repeat(5,logOdd); //1,3,5

//익명 함수 리터럴을 콜백 함수로 고차 함수에 전달한다.
//익명 함수 리터럴은 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성한다.
// repeat(5, function(i){
//     if(i%2==1){
//         console.log(i)
//     }
// });

// //oddRepeat 함수는 단 한번만 생성된다.
// var oddRepeat=function(n){
//     if(n%2==1){
//         console.log(n)
//     }
// };
// //고차 함수에 함수 참조를 전달한다.
// repeat(7,oddRepeat);

// var count=0; // 현재 카운트를 나타내는 상태;
// //순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
// function increase(n){
//     return ++n;
// };

// //순수 함수가 반환환 결과값을 변수에 재할당해서 상태를 변경
// count=increase(count);
// console.log(count); //1

// count=increase(count);
// console.log(count); //2

// var count=0; //현재 카운트를 나타내는 상태: increase함수에 의해 변화한다.

// //비순수 함수
// function increase(){
//     return ++count; //외부 상태에 의존하며 외부 상태를 변경한다.
// }

// //비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하기 어려워진다.
// increase();
// console.log(count); //1

// increase();
// console.log(count); //2

// function add(x,y){
//     //매개변수의 함수 몸체 내부에서만 참조할수 있다. 즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.
//     console.log(x,y);
//     return x+y;
// }
// console.log(add(4,5));
// console.log(x,y); //error

// var var1= 1; //코드의 가장 바깥 영역에서 선언한 변수

// if(true){
//     var var2=2; //코드 블록 내에서 선언한 변수
//     if(true){
//         var var3=3; //중첩한 코드 블록 내에서 선언한 변수
//     }
// }

// function foo(){
//     var var4=4; //함수 내에서 선언한 변수
//     function innerFoo(){
//         var var5=5; // 중첩된 함수 내에서 선언한 변수
//     }
// }

// console.log(var1);  //1 출력
// console.log(var2);  //2 출력
// console.log(var3);  //3 출력
// console.log(var4); //error
// console.log(var5); //error;



// function foo(){
//     let x='global'
//     console.log(x);
//     function innerFoo(){
//         let x='x'
//         console.log(x);
        
//     };
//     innerFoo();
// };
// foo();

// function outer(){
//     const a=10;
//     console.log(a);
//     //console.log(b);
//     function inner(){
//         var b=30;
//         console.log(a)
//     }
//     inner();
// }
// outer();

// var x="global x";
// var y="global y";

// function outer(){
//     var z="outer's local z";

//     console.log(x); //1 global x
//     console.log(y); //2 global y
//     console.log(z); //3 outer's local z

//     function inner(){
//         var x="inner's local x";
        
//         console.log(x) //4 inner's local x;
//         console.log(y) //5 global y
//         console.log(z) //6 outer's local z
//     }
//     inner();
// }
// outer();

// console.log(x); // 7global x
// console.log(z); // 8error

// function foo(){
//     console.log("전역 함수");
// }

// function bar(){
//     function innerBar(){
//         console.log("지역 함수");
//     }
//     innerBar();
// };

// bar(); //지역 함수 출력

// var i=10;

// //for 문에서 선언한 i는 전역변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
// for(var i=0; i<5; i++){
//     console.log(i); //0,1,2,3,4 출력
// }

// //의도치 않게 변수의 값이 변경되었다.
// // console.log(i);//5

// function foo(){
//     var x= 'local';
//     console.log(x); //local
//     return x;
// }
// //foo();
// console.log(x); //error

// function foo(){
//     var x='local'; //변수 x
//     console.log(x);
//     return x;
// }

// var x='global';

// function foo(){
//     console.log(x);
//     var x='local';
// }; 
// foo();

// function foo(){
//     var x="hello"
//     console.log(x);
// };

// (function (){
//     var foo=10;
// }());
// console.log(foo); //error

// var MYMAP ={};//전역 네임스페이스 객체

// MYMAP.person ="andy";
// console.log(MYMAP.person); //andy 출력

// var obj={};
// obj.user={
//     name: 'andy',
//     gender: 'male',
//     age: 23,
// }
// console.log(obj.user);

// var counter=(function(){
//     //private 변수
//     var num=0;

//     //외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
//     return{
//         increase(){
//             return ++num;
//         },
//         decrease(){
//             return --num;
//         },
//     }
// }());

// //private 변수는 외부로 노출하지 않는다.
// console.log(counter.num);

// console.log(counter.increase());//1
// console.log(counter.increase());//2
// console.log(counter.decrease());//1
// console.log(counter.decrease());//0
// console.log(counter.decrease());//-1

// var x=1;
// var y=1;

// //var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// //초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var키워드가 없는 것처럼 동작한다.
// var x=100;
// //초기화문이 없는 변수 선언문을 무시됀다.
// var y;

// console.log(x); //100
// console.log(y); //1


// var x=1;
// if(1){
//     //x는 전역 변수다. 이미 선언된 전역 변수 x가 있으므로 x변수는 중복 선언된다.
//     //이는 의도치 않게 변수값이 변경되는 부작용을 발생시킨다.
//     var x=10;
// }
// console.log(x); //10

// var i=3;

// //for문에서 선언한 i는 전역 변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
// for(var i=0; i<5; i++){
//     console.log(i); //0,1,2,3,4
// };

// //의도치 않게 i 변수의 값이 변경되었다.
// console.log(i); //5

// function foo(){
//     let i=10;
//     if(true){
//         let i=30;
//         if(true){
//             console.log(i);
//         }
//     }
// }
// foo();

// let i=1;

// {
//     let i=3;
// }
// console.log(i);

// let x=10;
// function test(){
//     console.log(x);
// }
// test();

// //이 시점에서는 변수 호이스팅에 의해 이미 foo변수가 선언되었다.(1. 선언단계)
// // 변수 foo는 undefined로 초기화 된다.(2. 초기화 단계)
// console.log(foo);//undefined

// //변수에 값을 할다(3. 할당 단계)
// foo=123;

// console.log(foo); //123

// var foo;

// var foo=123;
// //var키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// //아래 변수 선언문은 자바스크립트 엔진에 의해 var키워드가 없는 것처럼 동작한다.
// var foo=565;

// let fo=12;
// //let이나 const키워드로 선언한 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
// let fo=45;

// let foo=10;
// {
//     let foo=45; //지역 변수
//     let bar=4; 
//     console.log(foo); //45출력
// }
// console.log(foo); //10 출력
// console.log(bar);//error

let i=10;
function foo(){
    let i=100;
    for(let i=1; i<3; i++){
        console.log(i); //1,2 출력
    }
    console.log(i); //100출력
}
foo(); 
console.log(i); //10출력
