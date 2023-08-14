// var fruits=['apple', 'banana', 'peach'];
// var $ul =document.createElement('ul');

// var alertFruitBuilder = function(fruit){
//     return function(){
//         alert('your choice is '+fruit);
//     };
// };

// fruits.forEach(function(fruit){
//     var $li=document.createElement('li');
//     $li.innerText=fruit;
//     $li.addEventListener('click',alertFruitBuilder(fruit));
//     $ul.appendChild($li);

// });
// document.body.appendChild($ul);
// alertFruit(fruits[0]);

// setTimeout(function(){
//     console.log(this);
// },300);

// [1,2,3,4,5].forEach(function(x){
//     console.log(this, x);
// });

// document.body.innerHTML +='<button id="a">클릭</button>';
// document.body.querySelector('#a').addEventListener('click',function(e){
//     console.log(this,e);
// });xw

// document.body.innerHTML ='<div>a</div><div>b</div><div>c</div>';
// var nodeList = document.querySelectorAll('div');
// var nodeArr = Array.prototype.slice.call(nodeList);
// nodeArr.forEach(function(node){
//     console.log(node);
// })

// var str='abc def';
// Array.prototype.concat.call(str, 'string');

// console.log(str);

// var obj={
//     0:'a',
//     1:'b',
//     length:2,
// }

// var result=Array.from(obj);
// console.log(result);

// var obj ={
//     outer: function(){
//         console.log(this);
//         var innerFunc = function(){
//             console.log(this);
//         };
//         innerFunc.call(this);
//     }
// };
// obj.outer();

// var obj={
//     outer: function(){
//         console.log(this);
//         var innerFunc=function(){
//             console.log(this);
//         }.bind(this);
//         innerFunc();
//     }
// };
// obj.outer();

// var obj ={
//     logThis: function(){
//         console.log(this);
//     },
//     logThisLater1: function(){
//         setTimeout(this.logThis, 500);
//     },
//     logThisLater2: function(){
//         setTimeout(this.logThis.bind(this),1000);
//     }
// };
// obj.logThisLater1();
// obj.logThisLater2();

// var report ={
//     sum: 0,
//     count: 0,
//     add: function(){
//         var args= Array.prototype.slice.call(arguments);
//         args.forEach(function(entry){
//             this.sum+=entry;
//             ++this.count;
            
//         },this);
        
//     },
//     average:function(){
//         return this.sum/this.count;
//     }
// };
// report.add(60,85,95);

// var newArr = [10,20,30].map(function(currentValue,index,array,thisArg){
//     console.log(currentValue, index, array, thisArg);
//     return currentValue +5;
// });
// console.log(newArr);

// Array.prototype.map= function(callback, thisArg){
//     var mappedArr =[];
//     for(var i=0; i<this.length; i++){
//         var mappedValue = callback.call(thisArg||window, this[i],i,this);
//         mappedArr[i] = mappedValue;
//     }
//     return mappedValue;
// };

// function one(str){
//     console.log(str);
// };

// function two(test){
//     var value  = 'call back test';
//     test(value);
// }
// console.log("Asda");
// two(one);

// function name(name){
//     console.log('hello',name);
// }


// document.addEventListener('click', function(){
//     confirm('andy');
// })

// var obj1 ={
//     name: 'obj1',
//     func: function(){
//         var self=this;
//         return function(){
//             console.log(self);
//         };
//     }
// };
// var callback = obj1.func();
// setTimeout(callback, 1000);

// var obj2= {
//     name: 'obj2',
//     func: obj1.func,
// };

// var callback2=obj2.func();
// setTimeout(callback2,1500);

// var obj3 ={
//     name:'obj3',
//     func: obj2.func,
// };
// var callback3= obj1.func.call(obj3);
// setTimeout(callback3,2000);

// var obj1={
//     name: 'obj1',
//     func: function(){
//         console.log(obj1.name);
//     }
// };
// setTimeout(obj1.func,1000);

// var obj1 ={
//     name: 'obj1',
//     func: function(){
//         console.log(this.name);
//     }
// };
// setTimeout(obj1.func.bind(obj1),1000);

// var obj2={
//     name: 'obj2',
// }

// var test = obj1.func.bind(obj2);
// setTimeout(test,1000);

// // //콜백지옥 예시
// setTimeout(function(name){
//     var coffeeList1=name;
//     console.log(coffeeList1);

//     setTimeout(function(name){
//         coffeeList1+=', '+name;
//         console.log(coffeeList1);

//         setTimeout(function(name){
//             coffeeList1+=','+name;
//             console.log(coffeeList1);

//             setTimeout(function(name){
//                 coffeeList1+=','+name;
//                 console.log(coffeeList1);
//             },500,'카페라떼1');
//         },500,'카페모카1');
//     },500,'아메리카노1');
// },500,'에스프레소1');


// var coffeeList=' ';

// var addEspresso = function(name){
//     coffeeList= name;
//     console.log(coffeeList);
//     setTimeout(addAmericano,500,'아메리카노');
// }

// var addAmericano=function(name){
//     coffeeList+=' '+name;
//     console.log(coffeeList);
//     setTimeout(addLatte,500,'카페라떼');
// }

// var addLatte=function(name){
//     coffeeList+=' '+name;
//     console.log(coffeeList);
//     setTimeout(addMocha,500,'카페모카');
// }

// var addMocha=function(name){
//     coffeeList+=' '+name;
//     console.log(coffeeList);
    
// }
// setTimeout(addEspresso,500,'에스프레소');


// setTimeout(function(number){
//     var index=number;
//     console.log(index);

//     setTimeout(function(number){
//         index+=number;
//         console.log(index);
//     },1000,'2');
// },1000,'1')

// var str=' '

// var a=function(char){
//     str=char;
//     console.log(str);
//     setTimeout(b,1000,'b');
// }

// var b= function(char){
//     str+=char;
//     console.log(str);
// }

// setTimeout(a,1000,'a'); 

// setTimeout(function(number){
//     var index= number;
//     console.log(index);

//     setTimeout(function(number){
//         index+=number;
//         console.log(index);
//     },1000,'3');
// },5000,'4');

// var timerId= setTimeout(function tick(){
//     console.log('째깍');
//     timerId =setTimeout(tick,2000);
// },2000);

// //비동기 작업의 동기적 표현: promise
new Promise(function(resolve){
    setTimeout(function(){
        var name='에스프레소';
        console.log(name);
        resolve(name);
    },500);
}).then(function(prevName){
    return new Promise(function(resolve){
        setTimeout(function(){
            var name= prevName + ',아메리카노';
            console.log(name);
            resolve(name);
        },500);
    });
}).then(function(prevName){
        return new Promise(function(resolve){
            setTimeout(function(){
                var name= prevName+',카페 라떼';
                console.log(name);
                resolve(name);
            },500);
        });
    }).then(function(prevName){
            return new Promise(function(resolve){
                setTimeout(function(){
                    var name = prevName +',카페 모카';
                    console.log(name);
                    resolve(name);
                },500);
            });
        })
        
    
// var addCoffee= function(name){
//     return function(prevName){
//         return new promise
//     }
// }


// setTimeout(function(name){
//     console.log(name);
//     setTimeout(function(name){
//         console.log(name);
//     },1000,'b');
// },1000,'a');

// setTimeout(function(name){
//     console.log(name);
//     setTimeout(function(name){
//         console.log(name);
//     },1000,'2');
// },1000,'1');

/*
woody 멘토님, 질문이 하나 더 있어서 이렇게 밑에 남김니다. 콜백함수를 공부하는 가운데 중첩 setTimeout함수를 
공부하다 의문이 생겼습니다. 위에 코드를 작성하고 머릿속으로 실행앴을때는 1초 후에 a가 나오가 1초후에 b가 나오고
다시 1초 후에 1이 나오고 마지막으로 1초 후에 2가 나올거라 생각했습니다. 허나 출력 결과는 1초 후에 a와1이 동시에 
나오고 1초 후에 b와2가 동시에 나왔습니다. 우선 제가 생각한 것은 task queue에 1초 후에 a가 출력되는 익명함수랑 1이 출력되는 익명함수 2개가 들어가고
그 즉시 콜스택에 쌓여서 출력하는 가운데 두 개가 1초 후에 출력되는 거라 화면에 보여지는 것에는 2개가 동시에 나온다 라고 생각하였는데.. 혹시 제 생각이 맞을까요?
 */ 


