// var a=1;
// function outer(){
//     function inner(){
//         console.log(a);
//         var a=3;
//     }
//     inner();
//     console.log(a);
// }
// outer();
// console.log(a);

// function a(x){
//     console.log(x);
//     var x;
//     console.log(x);
//     var x= 2;
//     console.log(x);
// };
// a(3)

// document.addEventListener("DOMContentLoaded",()=>{
//     console.log("원하는 문구 적기")
    
// })

// function sleep(func, delay) {
//     const delayUntil = Date.now() + delay;
    
//     while (Date.now() < delayUntil);
//     foo();
//    }
   
//    function foo (){
//        console.log('foo')
//    }
   
//    function bar () {
//        console.log('bar')
//    }
   
//    sleep(foo, 3*1000);
//    bar();

// function foo(){
//     console.log('foo');
// }

// function bar(){
//     console.log('bar')
// }

// setTimeout(foo, 3000);
// bar();

let a=0.1;
let b=0.2;
let sum=a+b;

console.log(sum==0.3);