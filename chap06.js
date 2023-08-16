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

Object.defineProperty(window,'_',{
    value: 'EMPTY_SPACE',
    writable: false,
    configurable: false,
    enumerable: false
}); 

var partial2= function(){
    var originalPartialArgs= arguments;
    var func =originalPartialArgs[0];
    if(typeof func !=='function' ){
        throw new Error('첫 번째 인자가 함수가 아닙니다.');
    }
    return function(){
        var partialArgs = Array.prototype.slice.call(originalPartialArgs,1);
        var restArgs = Array.prototype.slice.call(arguments);
        for(var i=0; i<partialArgs.length; i++){
            if(partialArgs[i]=== _){
                partialArgs[i]=restArgs.shift();
            }
        }
        return func.apply(this, partialArgs.concat(restArgs));
    };
};

var add = function(){
    var result = 0;
    for(var i=0; i< arguments.length; i++){
        result += arguments[i];
    }
    return result;
};

var addPartial = partial2(add, 1,2,_,4,5,_,_,8,9);
console.log(addPartial(3,6,7,10));

var dog= {
    name: '강아지',
    greet:partial2(function(prefix,suffix){
        return prefix +this.name +suffix;
    },'왈 왈')
}
dog.greet('배고파요!');


