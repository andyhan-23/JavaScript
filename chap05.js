/*
1. 각 턴마다 주사위를 굴려 나온 숫자 만큼 이동한다.
2. 차량별로 연료량(fuel)과 연비(power)는 무작위로 생성된다.
3. 남은 연료가 이동할 걸리에 필요한 연료보다 부족하면 이동하지 못한다.
4. 모든 유저가 이동할 수 없는 턴에 게임이 종료된다.
5. 게임 시점에 가장 멀리 있는 사람이 승리
*/

// var car ={
//     fuel: Math.ceil(Math.random()*10+10), //연료(L)
//     power: Math.ceil(Math.random()*3+2), //연비 
//     moved: 0,
//     run: function(){
//         var km=Math.ceil(Math.random()*6);
//         var wastedFuel = km/this.power;
//         if(this.fuel<wastedFuel){
//             console.log('이동 불가');
//         return;
//         }
//         this.fuel -=wastedFuel;
//         this.moved+=km;

        
//         console.log(km+'km 이동 (총'+this.moved+'km)');

//     }
// };

// car.run();

// var nunu={
//     q:'consume',
//     w:'snowball',
// };

// var garen={
//     q:'strike',
//     w:'courage'
// }

//클래스 문법

// function 기계(str){
//     this.q=str;
//     this.w='snowball';
// }
// 기계.prototype.name ='kim';

// 기계.w;
// var andy= new 기계('run');


// class Hero{
//     constructor(str){
//         this.q= str;
//         this.w='snowball';
//     }
// };

// var andy=new Hero('run');
// console.log(andy);

//prototype:유전자

// var test={
//     name: 'asd',
//     asad: 'asd',
//     asd: 12
// };
// console.log(test);

// var array =new Array(1,2,3)

// Array.prototype.test= function test(){
//     return 1;
// };
// console.log(array.test());

// setTimeout(test,1000);
// var a=12;
// console.log(a);

// function test(){
//     console.log("test");
// }


// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);

// function test2(){
//     console.log("!213");
// };
// test2();

// function test3(){
//     console.log("132123");
// };
//test3();

// var a=1;

// function test(){
//     function test2(){
//         function test3(){
//             var a;
//             console.log(a);
//         }
//         test3();
//         console.log(a);
//     }
//     test2();
// }
// test();


// var obj={
//     a: 1,
//     b: 2,
//     c: 3,
// };

// // for(var i in obj)
// // {
// //     console.log(i,obj[i]);
// // }

// console.log(obj);

// var test = function(obj){
//     var result={};
//     for(var key in obj){
//         result[key]=obj[key];
//     }
//     return result;
// }

// var copy = test(obj);
// console.log(copy);

// console.log(global);

// var func= function(x){
//     console.log(this,x);
// };
// func(1);;

// var obj={
//     method: func
// };
// obj.method(2);

// var obj ={
//     method: function(x){
//         console.log(this,x);
//     },
//     time:  function(){
//         console.log(this);
//     }
// };

// obj.method(2);
// obj['method'](2);

// var obj={
//     methodA: function(){
//         console.log(this);
//     },
//     inner:{
//         methodB: function(){
//             console.log(this);
//         },
//     }
// };

// obj.methodA();
// //obj['methodA']();
// obj.inner.methodB();

// var obj={
//     method: function(){
//         console.log(this);
//     },
//     inner:
//     {
//         methodB: function(){
//             console.log(this);
//         }
//     }
// }

// obj.inner['methodB']();

// var obj={
//     outer: function(){
//         console.log('첫번째',this);
//         var innerFunc =  function(){
//             console.log('두번째',this);
//         }
//         innerFunc();

//         var obj2 ={
//             innerMethod: innerFunc
//         }
//         obj2.innerMethod();
//     }
// };

// obj.outer();

// var obj={
//     outer: function(){
//         console.log(this);
//         var innerFunc=function(){
//             console.log(this);
//         };
//         innerFunc();

//         var self = this;
//         var innerFunc2 = function(){
//             console.log(self);
//         }
//         innerFunc2();
//     }
// };
// obj.outer();

// var obj= {
//     outer: function(){
//         console.log(this);
//         var innerFunc=()=>{
//             console.log(this);   
//         }
//         innerFunc();
//         var self = this;
//         var innerFunc2= function(){
//             console.log(self);
//         }
//         innerFunc2();
//     }
// }
// obj.outer(); 

//배열의 원소를 알파벳순으로, 또는 지정된 함수에 따른 순서로 정렬한다. 모든 원소를 문자열로 취급해 사전적으로 정렬
// var arr=[4,3,2,1];
// arr.sort(function(a,b){
//     return b-a;
// });
// console.log(arr); // [4,3,2,1]

// var arr=[1,2];
// arr.sort(function(a,b){
//     return a-b;
// })
// console.log(arr);

// var user ={
//     name: 'andy',
//     extra: {
//         age: 25,
//         gender: 'male',
//     }
// };

// //user.name='kim'; // 내부의 프로퍼티


// var changeName= function(name, user){
//     return{
//         name: name,
//         extra: user.extra,
//     }
// };

// var result = changeName("kim", user);
// console.log(user.name);

// //toString

// //배열을 문자열로 바꾸어 반환한다.
// var arr=[1,2,3,4];
// console.log(arr.toString());

// //toString 과 비슷, 그러나 배열을 반환
// var arr=[1,2,3,4,5];
// console.log(arr.valueOf()); // [1,2,3,4];

// //ValueOf
// //toString과 비슷, 그러나 배열을 반환
// var arr= [1,2,3,4];
// console.log(arr.valueOf()); //[1,2,3,4]


// //join
// //배열 원소 전부를 하나의 문자열로 합친다.
// var arr=[1,2,3,4];
// console.log(arr.join("+"));

// var count =0;
// var timer = setInterval(function(){
//     console.log(count);
//     if(++count>4){
//         clearInterval(timer);
//     }
// },1000);

// //콜백 함수 예제-setInterval
// var count=0;
// var cbFunc = function(){
//     console.log(count);
//     if(++count>4) {
//         clearInterval(timer);
//     }
// };
// var timer= setInterval(cbFunc,1000);

// //콜백 함수 예제-Array.prototype.map
// var arr =[10,20,30].map(function(value, key, array){
//     console.log(value, key, array);
//     return value+5;
// },this);
// console.log(arr);

// //콜백 함수 예제-Array.prototype.map
// Array.prototype.map= function(callback, thisArg){
//     var mappedArr=[1,2,3,4,5];
//     for(var i=0; i<this.length; i++){
//         var mappedValue=callback.call(thisArg || window, this[i],i,this);
//         mappedArr[i] = mappedValue;
//     }
//     return mappedArr;
// };
 
// for(var i=0 ;i<5; i++){
//     console.log("1");
// }

// var obj={
//     vals:[1,2,3],
//     logValues: function(v,k){
//         var self=this;
//         return function(){
//             console.log(self,v,k);
//         };
//     }
// };
// //obj.logValues(1,2); //obj객체를 this로 명시함
// [4,5,6].forEach(obj.logValues()); //전역 객체를 this로 명시함

// var user={
//     name: 'andy',
//     func: function(){
//         return function(){
//             console.log("hello");
//         }
//     }
// }
// user.func(); //생략
// var test= user.func(); //변수로써 할당
// test(); //변수를 함수로써 호출

// var user={
//     name: 'andy',
//     func: function(){
//         console.log("hello");
//     }
// };
// user.func(); //hello 출력

// var obj={
//     func: function(){
//         var self=this;
//         return function(){
//         console.log(self); //obj객체를 this로 명시함
//     }
// }
// };
// var callback=obj.func();

// setTimeout(callback,1000);

// var obj={
//     name: 'obj1',
//     func2: function(){
//         console.log(obj.name);
//     },
//     func3: function(){
//         console.log(this);
//     }
// };

// //func 함수 재활용
// var obj={
//     name: 'obj',
//     func: function(){
//         var self=this;
//         return function(){
//             console.log(self.time);
//         };
//     },
//     time: '1000',
// };

// var callback=obj.func();
// setTimeout(callback, 1000);

// var obj2 ={
//     name: 'obj2',
//     func: obj.func,
//     time: '1500'
// };

// var callback2=obj2.func(); 
// setTimeout(callback2,1500);

// var obj3={
//     name: 'obj3',
//     time:'2000',
// }

//var callback3 = obj.func.bind(obj3);
//setTimeout(obj.func.bind(obj3),2000);

//bind 메서드 활용
// var obj={
//     name: 'obj',
//     func: function(){
//         console.log(this.time);
//     },
//     time: '1000',
// }

// setTimeout(obj.func.bind(obj),1000);

// var obj2={
//     name: 'obj2',
//     time: '2000',
// }
// setTimeout(obj.func.bind(obj2),2000);

// setTimeout(function(name){
//     console.log("andy")
// },3000);

// //콜백 지옥 예시
// setTimeout(function(name){
//     var coffeeList= name;
//     console.log(coffeeList);

//     setTimeout(function(name){
//         coffeeList+=name;
//         console.log(coffeeList);
        
//         setTimeout(function(name){
//             coffeeList+=name;
//             console.log(coffeeList);

// //             setTimeout(function(name){
// //                 coffeeList+=name;
// //                 console.log(coffeeList);
// //             },1000,'카페라떼')
// //         },1000,'카페 모카')
// //     },1000, '아메리카노')
// // },1000,'에스프레소')

// // // setTimeout(function(name){
// // //     var coffeeList =name;
// // //     console.log(coffeeList);
// // // },1000,'에스프레소');

// // //기명  함수로 변환
// var coffeeList = '';

// var espresso= function(name){
//     coffeeList = name;
//     console.log(coffeeList);
//     setTimeout(americano,1000,'아메리카노');
// }

// var americano =function(name){
//     coffeeList +=name;
//     console.log(coffeeList);
//     setTimeout(caffeLatte,1000, '카페라떼');
// }

// var caffeLatte = function(name){
//     coffeeList+= name;
//     console.log(coffeeList);
//     setTimeout(caffeMocha,1000,'카페모카')
// }

// var caffeMocha = function(name){
//     coffeeList+=name;
//     console.log(coffeeList);
// };

// setTimeout(espresso,1000,'에스프레소');

// //비동기 작업의 동기적 표현(1)-promise문
// new Promise(function(resolve){
//     setTimeout(function(){
//         var name='에스프레소';
//         console.log(name);
//         resolve(name);
//     },1000);
// }).then(function(prevName){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             var name= prevName+'아메리카노';
//             console.log(name);
//             resolve(name);
//         },1000);
//     });
// }).then(function(prevName){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             var name=prevName+'카페 라떼';
//             console.log(name);
//             resolve(name);
//         },1000);        
//     });
// }).then(function(prevName){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             var name= prevName+'카페 모카';
//             console.log(name);
//             resolve(name);
//         },1000);
// //     });
// // });

// // //비동기 작업의 동기적 표현(2)-promise
// // var addCoffee = function(name){
// //     return function(prevName){
// //         return new Promise(function(resolve){
// //             setTimeout(function(){
// //                 var newName=prevName ? (prevName+','+name): name;
// //                 console.log(newName);
// //                 resolve(newName);
// //             },1000);
// //         });
// //     };
// // };
// // addCoffee('에스프레소')()
// //     .then(addCoffee('아메리카노'))
// //     .then(addCoffee('카페모카'))
// //     .then(addCoffee('카페라떼'));

// // 비동기 작업의 동기적 표현(3)-Generator
// var addCoffee = function(prevName, name){
//     setTimeout(function(){
//         coffeeTester.next(prevName? prevName+','+name:name);
//     },1000);
// }; 
// var coffeeGeneraotr= function* (){
//     var espresso = yield addCoffee('', '에스프레소');
//     console.log(espresso);
//     var americano = yield addCoffee(espresso, '아메리카노');
//     console.log(americano);
//     var mocha = yield addCoffee(americano, '카페 모카');
//     console.log(mocha)
//     var latte = yield addCoffee(mocha, '카페 라떼');
//     console.log(latte);
// };
// var coffeeTester = coffeeGeneraotr();
// coffeeTester.next();

// //비동기 작업의 동기적 표현(4)-Promise+Async/await;
// var addCoffee = function(name){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve(name);
//         },1000);
//     });
// };
// var coffeeMaker = async function(){
//     var coffeeList ='';
//     var _addCoffee = async function(name){
//         coffeeList+=(coffeeList?',': '')+await addCoffee(name);
//     };
//     await _addCoffee('에스프레소');
//     console.log(coffeeList);
//     await _addCoffee('아메리카노');
//     console.log(coffeeList);
//     await _addCoffee('카페 라떼');
//     console.log(coffeeList);nn
//     await _addCoffee('카페 모카');
//     console.log(coffeeList);
// }
// coffeeMaker();

// var user={
//     name: 'andy'
// }
// var user2=user;
// user=null;

// console.log(user2);

// var obj={
//     a:123,
//     b: {
//         c: 'c',
//         d: 'd',
//     },
// };

// var copyobj =obj;

// //copyobj.a=1;

// var copyobj2 = obj;
// copyobj2 ={
//     a:1,
//     b: {
//         c: 'd',
//         d: 'c',
//     }
// };


// // console.log(copyobj2.b);

// var outer = function(){
//     var a=1;
//     var inner = function(){
//         return ++a;
//     };
//     return inner;
// }
// var outer2 = outer();
// console.log(outer2()); //2
// console.log(outer2()); //3

//return 없이도 클로저가 발생하는 경우
//(1) setInterval/setTimeout
// (function (){
//     var a=0;
//     //var intervalId= null;
//     var inner =function(){
//         if(++a>=10){
//             clearInterval(intervalId);
//         }
//         console.log(a);
//     };
//     intervalId =setInterval(inner,1000);
// })();

// var test=function(){
//     var a=0;
//     var intervalId =null;
//     var inner=function(){
//         if(++a>=5){
//             clearInterval(intervalId);   
//         }
//         console.log(a);
//     }
//     intervalId=setInterval(inner, 1000);
// }
// test();

//클로저의 메모리 관리
// var outer = (function(){
//     var a=1;
//     var inner =function(){
//         return ++a;
//     };
//     return inner;
// })();
// console.log(outer());//2
// console.log(outer());//3
// outer= undefined;
// console.log(outer());//error

// var func= function(){
//     var a=0;
//     var intervalId=null;
//     var innerFunc=function(){
//         if(++a>=10){
//             clearInterval(intervalId);
//             innerFunc=null; //innerFunc 식별자의 함수 참조를 끊음
//         }
//         console.log(a);
//     };
//     intervalId=setInterval(innerFunc,1000);
// };
// func();
// //(3)eventListener에 의한 클로저의 메모리 해제
// (function(){
//     var count=0;
//     var button= document.createElement('button');
//     button.inner
// })

// /*
// 자동차 게임
// 1.) 각턴마다 주사위를 굴려 나온 숫자(km)만큼 이동한다.
// 2.) 차량별로 연료량(fuel)과 연비(power)는 무작위로 생성된다.
// 3.) 남은 연료가 이동할 거리에 필요한 연료보다 부족하면 이동하지 못한다.
// 4.) 모든 유저가 이동할 수 없는 턴에 게임이 종료된다.
// 5.) 게임 종료 시점에 가장 멀리 이동해 있는 사람이 승리
// */

// // let car={
// //     fuel: Math.ceil(Math.random()*10+10),
// //     power: Math.ceil(Math.random()*3+2),
// //     moved:0,
// //     run: function(){
// //         var km= Math.ceil(Math.random()*6);
// //         var wastedFuel = km / this.power;
// //         if(this.fuel<wastedFuel){
// //             console.log("이동 불가");
// //             return;
// //         }
// //         this.fuel -=wastedFuel;
// //         this.moved +=km;
//         console.log(km+'km 이동( 총' + this.moved+'km) 남은 연료:'+this.fuel);
// //     }
// // };

// // car.fuel=10; 
// // car.power=10;
// // //car.moved=3;
// // car.run()

// var createCar = function(){
//     var fuel = Math.ceil(Math.random()*10+10)//연료(L)
//     var power =Math.ceil(Math.random()*3+2)//연비(km/L)
//     var moved = 0;
//     return{
//         get moved(){
//             return moved;
//         },
//         run: function(){
//             var km = Math.ceil(Math.random()*6);
//             var wastedFuel = km/power;
//             if(fuel <wastedFuel){
//                 console.log('이동 불가');
//                 return;
//             }
//             fuel -= wastedFuel;
//             moved +=km;
//             console.log(km+'km 이동( 총'+moved+'km) 남은 연료: '+fuel);
//         }
//     };
// };
// var car= createCar();
// car.run();
// console.log(car.moved);
// console.log(car.fuel);
// console.log(car.power);

// car.fuel =1000;
// console.log(car.fuel);
// car.run();

// car.power=100;
// console.log(car.power);
// car.run();

// car.moved=1000;
// console.log(car.moved);
// car.run();

// var createCar =function(){
//     var fuel = 0;//연료(L)
//     var power = Math.ceil(Math.random()*3+2)//연비(km/L);
//     var moved = 0;
//     var publicMembers={
//         get moved(){
//             return moved;
//         },
//         run: function(){
//             var km = Math.ceil(Math.random()*6);
//             var wastedFuel = km/power;
//             if(fuel<wastedFuel){
//                 console.log('이동 불가');
//                 return;
//             }
//             fuel -= wastedFuel;
//             moved +=km;
//             console.log(km+'km 이동( 총'+moved+'km) 남은 연료:'+fuel);
//         }
//     };
//     Object.freeze(publicMembers);
//     return publicMembers;
// }
// var car= createCar();

// var add= function(){
//     var result=0;
//     for(var i=0; i<arguments.length; i++){
//         result +=arguments[i];
//     };
//     return result;
// };
// var addPartial= add.bind(null,1,2,3,4,5);

// console.log(addPartial(6,7,8,9,10));

var partial = function(){
    var originalPartialArgs = arguments;
    var func = originalPartialArgs[0];
    if(typeof func !== 'function'){
        throw new Error('첫 번째 인자가 함수가 아닙니다.');
    }
    return function(){
        var partialArgs= Array.prototype.slice.call(originalPartialArgs,1);
        var restArgs = Array.prototype.slice.call(arguments);
        return func.apply(this, partialArgs.concat(restArgs));
    };
};

var add= function(){
    var result=0;
    for(var i=0; i<arguments.length; i++){
        result += arguments[i];
    }
    return result;
};

var addPartial = partial(add,1,2,3,4,5);
console.log(addPartial(6,7,8,9,10));

var dog= {
    name: '강아지',
    greet: partial(function(prefix,suffix){
        return prefix +this.name+suffix;
    }, '왈왈')
};
var test=dog.greet('입니다!');
console.log(test); 

Object.defineProperty(window,'_',{
    value: 'EMPTY_SPACE',
    writable: false,
    configurable: false,
    enumerable: false
});

var partial2 = function(){
    var originalPartialArgs = arguments;
    var func = originalPartialArgs[0];
    if(typeof func !== 'function'){
        throw new Error('첫 번째 인자가 함수가 아닙니다.');
    }
return function(){
    var partialArgs = Array.prototype.slice.call(originalPartialArgs,1);
    var restArgs = Array.prototype.slice.call(arguments);
    for(var i=0; i<partialArgs.length; i++){
        if(partialArgs[i] ===_){
            partialArgs[i]=restArgs.shift();
        }
    }
    return func.apply(this, partialArgs.concat(restArgs));
};
};

var add = function(){
    var result=0;
    for(var i=0; i<arguments.length; i++){
        result += arguments[i];
    }
    return result;
};
var addPartial = partial2(add,1,2,_,4,5,_,_,8,9);
console.log(addPartial(3,6,7,10));


