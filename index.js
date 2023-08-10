// var a=1;
// var outer= function(){
//     var a=3;
//     var inner=function(){
//         console.log(a);
        
//     }
//     inner();
// }
// outer();

// /*
// 1. 전역 컨텍스트 실행
// 2.*/ 

// // var a=1;
// // var outer = function(){
// //     var inner = function(){
// //         console.log(a);
// //         var a=3;
// //     };
// //     inner();
// //     console.log(a);
// // };
// // outer();
// // console.log(a);

// var a=3;

// var result=function(){
//     console.log(a);
//     a=2;
// }
// result();

// var a=1;
// var outer = function(){
//     var b=2;
//     var inner =function(){
//         console.log(b);
//         debugger;
//     };
//     inner();
// };
// outer();

console.log(sum(1,2));
console.log(sum(3,4));

function sum(a,b){
    return a+b;
}

var sum=function(a,b){
    var sum=function(a,b){
        return a+"+"+b+"="+(a+b);
    }
    return sum(a,b);
}

console.log(sum(1,3));

console.log(sum(1,3));


