// // var a=1;
// // function outer(){
// //     function inner(){
// //         var a=2;
// //         console.log(a);
// //         var a=3;
// //     }
 
// //     inner();
// //     console.log(a);
// // }
// // outer();
// // console.log(a);

// // //매개변수와 변수에 대한 호이스팅
// // function a(x){
// //     console.log(x);
// //     var x;
// //     console.log(x);
// //     var x=2;
// //     console.log(x);
// // }
// // a(1);

// // //1
// // function a(){
// //     var x=1;
// //     console.log(x);
// //     var x;
// //     console.log(x);
// //     var x=2;
// //     console.log(x);
// // }

// // //2
// // function a(){
// //     var x;
// //     var x;
// //     var x;
// //     x=1; 
// //     console.log(x);
// //     console.log(x);
// //     x=2;
// //     console.log(x);
// // }

// // //함수 선언의 호이스팅
// // function a(){
// //     console.log(b);
// //     var b='bbb';
// //     console.log(b);
// //     function b(){}
// //     console.log(b);
// // }
// // a();

// // function a(){
// //     var b;
// //     var b=function b(){};
// //     console.log(b);
// //     b='bbb';
// //     console.log(b);
// //     console.log(b);
// // }

// // console.log(sum(1,2));
// // console.log(multiply(3,4));

// // function sum(a,b){
// //     return a+b;
// // }

// // var multiply = function(a,b){
// //     return a+b;
// // }

// // var sum=function sum(a,b){
// //     return a+b;
// // }

// // var multiply;

// // console.log(sum(1,2));
// // console.log(multiply(3,4));

// //  multiply = function(a,b){
// //     return  a+b;
// // }

// console.log(sum(1,2));

// console.log(sum(3,4));

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(6,7));
// console.log(sum(1,2));

// var sum = function(a,b){
//     return a+"+"+b+"="+(a+b);
// }

// console.log(sum(1,2));

// console.log(sum(3,4));


// function sum(a,b){
//     return a+b;
// }

// var sum;

// console.log(sum(1,2));
// console.log(sum(3,4));
// console.log(sum(6,7));
// console.log(sum(1,2));

// sum=function(a,b){
//     return a+"+"+b+"="+(a+b);
// }

// console.log(sum(1,2));

// console.log(sum(3,4));

// function a(){
//     function b(){
//         function c(){

//         }
//     }
// }

// //스코프 체인
// var a=1;
// var outer = function(){
//     var inner = function(){
//         console.log(a);
//         var a=3;
//     };
//     inner();
//     console.log(a);
// };
// outer();
// console.log(a);

// /*
// 1. 전역 컨텍스트가 활성화됩니다. 전역 컨텍스트의 environmentRecord 에 {a, outer} 식별자를 지정합니다. 전역 컨텍스트에는  선언 시점이 없으므로 전역 컨텍스트의 outerEnvironmentReference에는 아무것도 담기지 않습니다. (this 전역 객체)
// 2. 전역 스코프에 있는  변수 a에 1을, outer에 함수를 할당합니다.
// 3. outer함수를 호출합니다. 이에 따라 전역콘텍스트는 잠시 멈추고 outer실행 컨텍스트가 활성화 됩니다.
// 4, outer 실행 컨텍스트의 environmentRecord에 {inner} 식별자를 지정합니다. outerEnvironmentReference에는 outer함수가 선언될 당시의 lexicalEnvironment가 담깁니다. outer함수는 전역공간에서 선언되었으므로 전역콘텍스트의 lexicalEnvironment를 참조복사합니다.
// 이를 [GLOBAL,{a,outer}] 로 표기합니다. 첫 번째는 실행 컨텍스트의 이름, 두 번째는 environmentRecord 객체입니다.(this: 전여객체)
// 5. Outer스코프에 있는 변수 inner에 함수를 할당합니다.
// 6. inner함수를 호출합니다. 그럼 outer 실행컨텍스트는 잠시 멈주고 inner실행 컨텍스트가 활성화 됩니다.
// 7. inner 실행 컨텍스트의 environmentRecord에 {a} 식별자를 지정합니다. outerEnvironementReference에는 inner함수가 선언될 당시의 lexicalEnvironment가 담깁니다. ineer함수는 outer 함수의 내부에서 선언되었으므로 outer함수의 lexicalEnvironent를 참조 복사합니다.
// 이를 [outer,{inner}]로 표기합니다.
// 8. 식별자 a에 접근하고자 합니다. 현재 활성화 상태인 inner 컨텍스트의 environmentRecord에서 a를 검색합니다. a가 발견되었는데 여기에는 아직 할당된 값이 없습니다. (undefined 출력)
// 9. inner 스코프에 있는 변수 a에 3을 할당합니다.
// 10. inner 함수 실행이 종료됩니다. inner실행 컨텍스트가 콜 스택에서 제거되고, 바로 아래의 outer 실행 컨텍스트가 다시 활성화됩니다.
// 11. 식별작 a에 접근하려고 합니다. 이때 자바스크립트 엔진은 활성화된 실행 컨텍스트의 lexicalEnvironment에 접근합니다. 첫 요소의 environmentRecord에서 a가 있는지 찾아보고, 없으면 outerEnvironmentReference에 있는 environmentRecord로 넘어가는 식으로 계속해서 검색합니다. 위
// 코드에서는 전역 lexicalEnviroment에 a가 있으니 그 a에 저장된 값 1을 반환합니다.(1출력)
// 12.outer함수 실행이 종료될시 outer실행 컨텍스트가 콜 스택에서 제거되고, 바로 아래의 전역 컨텍스트가 실행됩니다.
// 13.식별자 a에 접근하고자 합니다. 현재 활성화 상태인 전역 컨텍스트의 environmentRecord에서 a를 검색합니다.  바로 a를 찾을수 있었기 때문에 바로 a출력
// */ 


// // var func= function(user, name){}
// // console.log(func.length);

// //name 프로퍼티
// //함수 선언식
// function func(){};
// console.log(func.name); //func
// //함수 표현식
// var func2 = function(){};
// console.log(func2.name); //func2

// var test=null;
// console.log(typeof test);

// var a=1;
// var outer =function(){
//     var b=2;
//     var inner =function(){
//         console.dir(inner);
//     };
//     inner();
// }
// outer();

// var a=1;
// var outer=function(){
//     var b=2;
//     var inner = function(){
//         console.log(b);
//         debugger;
//     };
//     inner();
// };
// outer();

// var obj1 ={
//     outer: function(){
//         console.log(this);
//         var innerFunc = function(){
//             console.log(this);
//         }
//         innerFunc();
//         var obj2 ={
//             innerMethod:innerFunc,
//         }
//         obj2.innerMethod();
//     }
// };
// obj1.outer();


// // var func = function(){
// //     console.log(this);
// // }
// // func(); //전역객체(window/global);

// var obj={
//     outer: function(){
//         console.log(this); //obj 객체를 가리킴
//         var innerFunc1 = function(){
//             console.log(this); //전역 객체(window)를 가리킴
//         };
//         innerFunc1();
//         var self =this;
//         var innerFunc2 = function(){
//             console.log(self); //
//         };
//         innerFunc2();
//     }
// };
// obj.outer();

// var obj={
//     outer: function(){
//        console.log(this);
//         var innerFunc1 = function(){
//             console.log(this); //전역 객체(window)를 가리킴
//         };
//         innerFunc1();
        
//         var innerFunc2=()=>{
//             console.log(this); //원래는 위와 동일하게 전역객체를 가리켜야 하지만 es6에서 추가된 화살표 함수를 통해 상위 스코프의 this를 활용할 수 있다.
//         }
//         innerFunc2();
//     }
// };
// obj.outer();

// setTimeout(function(){
//     console.log(this); //전역객체를 표시함
// },1000);

// [1,2,3,4,5].forEach(function(value){
//     console.log(this,value); //전역객체를 표시함
// });

// document.body.innerHTML += '<button id="a">클릭</button>';
// document.body.querySelector('#a').addEventListener('click', function(value){
//     console.log(this, console.log(value)); //addEventListener 메서드는 콜백 함수를 호출할 때 자신의 this를 상속하도록 정의돼있다.
// })

// var obj ={
//     func: function(){
//         return function (){
//             console.log(this); //this로 전역 객체를 가리킴
//         }
//     }
// }

// var callback= obj.func();
// setTimeout(callback, 1000);

// var obj={
//     func: function(){
//         console.log(this); //this로 obj객체를 가리킵니다.
//     }
// };
// obj.func();

// var obj ={
//     func: function(){
//         return function(){
//             console.log(this);
//         }
//     }
// };
// var test=obj.func();
// test();

// var test = function(){
//     var self= this;
//     console.log(self);
// }
// test();

// var obj={
//     test: function(){
//         var self = this;
//         var innerTest = function(){
//             //var self = this;
//             console.log(self);
//         }
//         innerTest();
//     }
// };
// obj.test();

// var Cat = function(name, age){
//     this.back="야옹";
//     this.name=name;
//     this.age=age;
// };

// var choco =new Cat("choco", 14);
// var nabi= new Cat("nabi", 34);

// console.log(choco);
// console.log(nabi);
// 
// Cat {bark: '야옹', name: 'choco', age: 14}
// Cat {bark: '야옹', name: 'nabi', age: 34}


// var func =function(a,b,c){
//     console.log(this,a,b,c);
// }
// func(1,2,3); //window, 1,2,3

// func.call({x:1},1,2,3); //{x:1}, 1,2,3

// var func = function(a,b,c){
//     console.log(this,a,b,c);
// }
// func.apply({x:1},[4,3,3]); // {x:1} 4 3 3

// var obj={
//     a: 1,
//     method: function(x,y){
//         console.log(this.a, x, y);
//     }
// };
// obj.method.apply({a:4},[4,5]); //4, 4, 5