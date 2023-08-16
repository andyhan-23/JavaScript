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

var outer=function(){
    var a=1;
    var inner = function(){
        return ++a;
    };
    return inner;
};

var outer2=outer();
console.log(outer2());
console.log(outer2());
outer() = null;
console.log(outer2());
