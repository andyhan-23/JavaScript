// var count=0;

// var cbCount = function(){
//     console.log(count);
//     count++;
//     if(count>4)clearInterval(timer);
// };

// var timer = setInterval(cbCount,1000);

// var newArr=[10,20,30].map(function(currentValue, index){
//     console.log(currentValue,index);
//     return currentValue;
// })
// console.log(newArr);

// Array.prototype.map=function(callback, thisArg){
//     var mappedArr=[];
//     for(var i=0; i<this.length; i++){
//         var mappedValue = callback.call(thisArg||window,this[i], i, this);
//         mappedArr[i]= mappedValue;
//     }
//     return mappedArr;
// }

// function start(car){
//     car.power= true;
//     console.log('자동차 시동');
// }

// function moveTo(car, position){
//     console.log(`자동차 이동=현재 위치:${car.position}`);

  
//     if (!car.power){
//         console.log('자동차의 시동이 꺼져있습니다.');
//         return;
//     }

//     car.position+=position;
//     console.log(`자동차 이동=이동 위치:{${car.position}}`);
// }

// const car= {
//     power: true,
//     position: 0
// };

// start(car);
// moveTo(car, 10);

// function mul(num){
//     return num *num
// };

// function mulNum(func, num){
//     return func(num);
// }

// var person={};
// console.log(person);

const a=10;
const test= function(a){
    return a+5;
}
const result=test(a);

console.log(test(15));