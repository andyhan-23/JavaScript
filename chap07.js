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

var counter={
    num: 0,
    func: function(){
        this.num++;
    }
}
counter.func();
