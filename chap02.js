// // var a=1;
// // function outer(){
// //     function inner(){
// //         console.log(a);
// //         var a=3;
// //     }
// //     inner();
// //     console.log(a);
// // }
// // outer();
// // console.log(a);

// function a(x){
//     console.log(x);
//     var x;
//     console.log(x);
//     var x=2;
//     console.log(x);
// }
// a(1);

// function a(){
//     var x=1;
//     console.log(x);
//     var x;
//     console.log(x);
//     var x=2;
//     console.log(x);
// }
// a();

// function a(x){
//     var x;
//     var x;
//     var x;
//     x=1;
//     console.log(x);
//     console.log(x);
//     x=2;
//     console.log(x);
// }

// function a(){
//     console.log(b);
//     var b='bbb';
//     console.log(b);
//     function b(){}
//     console.log(b);
// }

// function a(){
//     var b;
//     function b(){}
//     console.log(b);
//     b='bbb';
//     console.log(b);
//     console.log(b);
// }

// function a(){
//     var b;
//     var b= function b(){}
//     console.log(b);
//     b='bbb';
//     console.log(b);
//     console.log(b);
// }

// function a(){ //함수 선언식

// }
// a(); 

// var b= function (){ // (익명)함수 표현식. 변수명 b가 곧 함수명

// }
// b();

// var b= function a(){ // (기명)함수 표현식. 변수명은 c, 함수명은 a

// }
// b(); // 실행 ok
// a(); // error
 
// console.log(sum(1,2));
// //console.log(multiply(3,4));

// function sum(a,b){ //함수 선언식
//     return a+b;
// }

// var multiply= function(a,b){ // 함수 표현식
//     return a*b;
// }

// var sum= function sum(a,b){
//     return a+b;
// }

// var multiply;

// console.log(sum(1,2));

// console.log(multiply(3,4));

// multiply = function(a,b){
//     return a*b;
// }

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(4,6));

// console.log(sum(7,8));

// var plus=function(a,b){
//     return a+"+"+b+"="+(a+b);
// }

// console.log(plus(3,2));

// var sum = function sum(a,b){
//     return a+b;
// }

// var plus;

// console.log(sum(4,6));

// console.log(sum(7,8));

// plus= function(a,b){
//     return a+"+"+b+"="+(a+b);
// }

// console.log(plus(3,2));

// var a=1;

// var outer = function(){
//     var inner = function(){
//         console.log(a);//undefined
//         var a=3;
//     }
//     inner();
//     console.log(a);
// };
// outer();
// console.log(a);

function sum(a,b){
    return a+b;
}

console.log(sum(4,5));

console.log(sum(7,2));

var plus = function(a,b){
    return a+"+"+b+"="+(a+b);
}