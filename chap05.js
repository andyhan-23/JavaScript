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

var user ={
    name: 'andy',
    extra: {
        age: 25,
        gender: 'male',
    }
};

//user.name='kim'; // 내부의 프로퍼티


var changeName= function(name, user){
    return{
        name: name,
        extra: user.extra,
    }
};

var result = changeName("kim", user);
console.log(user.name);

//toString

//배열을 문자열로 바꾸어 반환한다.
var arr=[1,2,3,4];
console.log(arr.toString());

//toString 과 비슷, 그러나 배열을 반환
var arr=[1,2,3,4,5];
console.log(arr.valueOf()); // [1,2,3,4];

//ValueOf
//toString과 비슷, 그러나 배열을 반환
var arr= [1,2,3,4];
console.log(arr.valueOf()); //[1,2,3,4]


//join
//배열 원소 전부를 하나의 문자열로 합친다.
var arr=[1,2,3,4];
console.log(arr.join("+"));

