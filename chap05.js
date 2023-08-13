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


var obj={
    a: 1,
    b: 2,
    c: 3,
};

// for(var i in obj)
// {
//     console.log(i,obj[i]);
// }

console.log(obj);

var test = function(obj){
    var result={};
    for(var key in obj){
        result[key]=obj[key];
    }
    return result;
}

var copy = test(obj);
console.log(copy);