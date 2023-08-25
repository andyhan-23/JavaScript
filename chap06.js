// var outer =function(){
//     var a=1;
//     var inner = function(){
//         console.log(a);
//         return ++a;
//     };
//     return inner();
// };
// var outer2= outer();
// console.log(outer2);


// var obj={
//     init: function(){
//         var name='andy';
//         var inner=function(){
//             console.log(this,name);
//         }.bind(this);
//         inner();
//     }
// }
// obj.init();

// var init =function(){
//     var name='andy';
//     function inner(){       
//         console.log(this,name);
//     }
//     inner();
// }
// var bindInit= init.bind(this);
// init();

// (function(){
//     var a=10;
//     var intervalId= null;
//     var inner= function(){
//         if(++a>=10){
//             clearInterval(intervalId);
//         }
//         console.log(a);
//     };
//     intervalId= setInterval(inner, 1000);
// })();

// var outer=function(){
//     var a=1;
//     var inner = function(){
//         return ++a;
//     };
//     return inner;
// };

// var outer2=outer();
// console.log(outer2());
// console.log(outer2());
// outer() = null;
// console.log(outer2());

// var outer =function(){
//     var a=1;
//     var inner = function(){
//         return ++a;
//     };
//     return inner;
// };
// var outer2 = outer();
// console.log(outer2);
// console.log(outer2);

// var car ={
//     fuel: Math.ceil(Math.random()*10+10), //연료
//     power: Math.ceil(Math.random()*3+2), //연비
//     moved: 0,                            //총 이동거리
//     run: function(){
//         var km  = 5;
//         var wastedFuel = km /this.power;
//         if(this.fuel <wastedFuel){
//             console.log('이동 불가');
//             return;
//         }
//         this.fuel-=wastedFuel;
//         this.moved +=km;
//         console.log(km+'km 이동 (총'+this.moved +'km) 남은연료:'+wastedFuel);
//     }
// };

// car.fuel=10;
// car.power=100;
// car.moved=1000;
// car.run();

// var createCar = function(){
//     var fuel = Math.ceil(Math.random()*10+10);
//     var power = Math.ceil(Math.random()*3+2);
//     var moved = 0;
//     return{
//         get moved(){
//             return moved;
//         },
//         run: function(){
//             var km = 5;
//             var wastedFuel = km /power;
//             if(fuel<wastedFuel){
//                 console.log('이동 불가');
//                 return;
//             }
//             fuel-=wastedFuel;
//             moved+=km;
//             console.log(km+'km 이동 (총' +this.moved+'km) 남은연료:'+fuel);
//         }
//     };
// };
// var car =createCar();

// car.fuel= 10;
// car.power=100;
// car.moved=1000;
// console.log(car.fuel);
// console.log(car.power);
// console.log(car.moved);

// car.run();

// var add =function(){
//     var result =0;
//     for(var i=0; i<arguments.length; i++){
//         result+=arguments[i];
//     }
//     return result;
// };
// var addPartial =add.bind(null,1,2,3,4,5);
// console.log(addPartial(6,7,8,9));

// var test=function(){
//     var value=arguments.length;
//     return value;
// };
// var addPartial = test.bind(1,2,3);
// console.log(addPartial(4,5));

// var partial =function(){
//     var originalPartialArgs = arguments;
//     var func = originalPartialArgs[0];
//     if(typeof func !=='function'){
//         throw new Error('첫 번째 인자가 함수가 아닙니다.');
//     }
//     return function(){
//         var partialArgs = Array.prototype.slice.call(originalPartialArgs,1);
//         var restArgs = Array.prototype.slice.call(arguments);
//         return func.apply(this, partialArgs.concat(restArgs));
//     };
// };

// var add = function(){
//     var result = 0;
//     for(var i=0; i<arguments.length; i++){
//         result +=arguments[i];
//     }
//     return result;
// };

// var addPartial = partial(add, 1,2,3,4,5);
// console.log(addPartial(6,7,8,9,10));


// var dog={
//     name: '강아지',
//     greet: partial(function(prefix, suffix){
//         return prefix +this.name +suffix;
//     }, '왈 왈,')
// };
// console.log(dog.greet('입니다'));

// var func= function(){
//     var name=arguments;
//     return name;
// }
// var test = partial(func,1);
// console.log(test(132));

//부분 함수 구현(2)

// Object.defineProperty(window,'_',{
//     value: 'EMPTY_SPACE',
//     writable: false,
//     configurable: false,
//     enumerable: false
// }); 

// var partial2= function(){
//     var originalPartialArgs= arguments;
//     var func =originalPartialArgs[0];
//     if(typeof func !=='function' ){
//         throw new Error('첫 번째 인자가 함수가 아닙니다.');
//     }
//     return function(){
//         var partialArgs = Array.prototype.slice.call(originalPartialArgs,1);
//         var restArgs = Array.prototype.slice.call(arguments);
//         for(var i=0; i<partialArgs.length; i++){
//             if(partialArgs[i]=== _){
//                 partialArgs[i]=restArgs.shift();
//             }
//         }
//         return func.apply(this, partialArgs.concat(restArgs));
//     };
// };

// var add = function(){
//     var result = 0;
//     for(var i=0; i< arguments.length; i++){
//         result += arguments[i];
//     }
//     return result;
// };

// var addPartial = partial2(add, 1,2,_,4,5,_,_,8,9);
// console.log(addPartial(3,6,7,10));

// var dog= {
//     name: '강아지',
//     greet:partial2(function(prefix,suffix){
//         return prefix +this.name +suffix;
//     },'왈 왈')
// }
// dog.greet('배고파요!');


/*
new 연산자로 constructor을 호출하면 instance가 만들어지는데 이 instance의 생략
가능하 프로퍼티인 __proto__ 는 constructor의 prototype을 참조한다
*/
// var instance = new constructor();

// var Person= function(name){
//     this._name = name;
// };

// //person 이라는 생성자 함수의 prototype에 getname 이라는 메서드를 지정
// Person.prototype.getName =function(){
//     return this._name;
// };

// var andy= new Person('andy');
// //console.log(andy.getName());

// var andy = new Person('andy');
// andy.__proto__._name ='andy';
// console.log(andy.__proto__.getName());

// var Constructor = function(name){
//     this.name= name;
// };

// Constructor.prototype.method1 = function(){};
// Constructor.prototype.property1= 'constructor prototype property'

// /*new 연산자함 함께 함수를 호출할 경우, 그로부터 생성된 인스턴스에는 숨겨진 프로퍼티인
// __proto__가 자동으로 생성되며, 이 프로퍼티는 생성자 함수의 prototype 프로퍼티를 참조합니다.*/
// var instance = new Constructor('instance');
// console.dir(Constructor);
// console.dir(instance);
/*
생성자 함수의 프로퍼티로는 argument, caller, length, name 그리고 prototype이 있습니다.

*/

// var arr=[1,2]; 
// console.log(Array.name);
// // console.dir(arr);
// // console.dir(Array);

// var NewConstrucotr= function(){
//     console.log('this is new constructor');
// };

// var dataTypes = [
//     1,
//     'test',
//     true,
//     {},
//     [],
//     function(){},
//     /test/,
//     new Number(),
//     new String(),
//     new Boolean(),
//     new Object(),
//     new Array(),
//     new Function(),
//     new RegExp(),
//     new Date(),
//     new Error(),
// ];
// dataTypes.forEach(function(d){
//     d.constructor= NewConstrucotr;
//     console.log(d.constructor.name ,o)
// })

// function Car(make, model, year){
//     this.make = make;
//     this.model= model;
// }

// function Bus(make, model, year){
//     this.make=make;
//     this.model=model;
//     this.year = year;
// }

// var bus = new Bus('132','sdasd', 300);
// var benz = new Car('mercedes' ,'c-class',1999);

// console.log(benz instanceof Car);
// console.log(benz instanceof Bus);

// var Person = function(name){
//     this.name= name;
// };
// var p1 = new Person('사람1');

// [p1].forEach(function(p){
//     console.log(p, p instanceof Person);
// });

// var Person = function(name){
//     this.name= name;
// };

// Person.prototype.getName = function(){
//     return this.name;
// }

// var iu = new Person('지금');

// iu.person='지금';
// iu.getName = function(){
//     return '바로' + this.name;
// };

// console.log(iu.getName());

// var Person = function(name){
//     this.name = name;
// }

// var Constructor = function(name){
//     this.name= name;
// }

// Constructor.prototype.method1 = function(){};
// Constructor.prototype.property1 = 'constructor prototype property';

// var instance = new Constructor('instance');
// console.dir(Constructor);
// console.dir(instance);

// var Person = function(name){
//     this.name= name;
// }

// Person.prototype.getName= function(){
//     return this.name;
// }

// Person.prototype.name='이지금';
// var iu= new Person('지금');
// iu.getName=function(){
//     return '바로'+this.name;
// }

// console.log(iu.__proto__.getName.call(iu));
// console.log(iu.getName());

//   var arr=[1,2];
// //  Array.prototype.toString.call(arr);
// //  Object.prototype.toString.call(arr);

// arr.toString();

// arr.toString=function(){
//     return this.join('_');
// };
// console.log(arr.toString());


//가독성이 떨어지는 커링 함수
var curry5 = function(func){
    return function(a){
        return function(b){
            return function(c){
                return function(d){
                    return function(e){
                        return func(a,b,c,d,e);
                    };
                };
            };
        };
    };
};

var curry5 =func=>a=>b=>c=>d=>e=>f=>func(a,b,c,d,e,f);
var getMaxWith10 = curry5(Math.max);
console.log(getMaxWith10(1)(2)(3)(4)(5)(2)); //5출력

