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

var a=3;
function test(){
    function test2(){
        var a=2; 
        function test3(){
            console.log(a);
        }
        test3();
    }
    test2();
}
test();
s