// var func = function(x){
//     console.log(this,x+1);
//     console.log("===");
// };
// func(1);

// var obj={
//     method: func
// };
// obj.method(2);

// var obj ={
//     outer: function(){
//         console.log("첫번째"+this);
//         var innerFunc=function(){
//             console.log("두번째"+this);
//         }
//         innerFunc();

//         var self =this;
      
//         var innerFunc2=function(){
//             console.log("세번째",self);
//         };
//         innerFunc2();
//     }
// };

// obj.outer();

// var obj={
//     outer: function(){
//         console.log(this);
//     }
// };
// obj.outer();

// var obj={
//     outer: function(){
//         console.log(this);
//         var innerFunc=()=>{
//             console.log(this);
//         };
//         innerFunc();
//     }
// };
// obj.outer();

// var cat = function(name,age){
//     this.bark="야옹";
//     this.name=name;
//     this.age= age;
// };

// var choco= new cat('초코',2);
// console.log(choco);

// var func= function(a,b,c){
//     console.log(this, a,b,c);
// };

// func(1,2,3);
// func.call({x:1},4,5,6);

// var func= function(a,b,c){
//     console.log(this, a,b,c);
// };
// func.apply({x:1},[4,5,6]);

// var obj={
//     a:1,
//     method: function(e,f){
//         console.log(this.a,e,f);
//     }
// };
// obj.method.apply({a:4},[5,6]);

// var obj={
//     0:'a',
//     1:'b',
//     2:'c',
//     length: 3
// };

// Array.prototype.push.call(obj,'d',);
// console.log(obj);

// var arr= Array.prototype.slice.call(obj);
// console.log(arr);

//  var str='andy';
// Array.prototype.concat.call(str,',han');
// // Array.prototype.every.call(str,function(char){return char!==' ';});

//  console.log(str);

//  var a ="ab";
//  var b="ab";

//  console.log(a==b);

// var arr=[1,2,3,4,5];

// arr.forEach(function(number){
//     console.log(number);
// }); 

// function Person(fisrt, second){
//     this.first=fisrt;
//     this.second=second
// }

// Person.prototype.name=function(name){
//     this.name=name;
//     console.log(name);
// };

// var andy = new Person('andy',10,20);

// console.log(andy.name);

// var obj={
//     a:1,
//     method: function(x,y){
//         console.log(this.a, x,y);
//     }
// };

// obj.method(2,3);

// obj.method.call({a:2},5,6)

// var func= function(a,b,c){
//     console.log(this,a,b,c);
// };
// func.apply({x:1},[4,5,6]);

// var arr=[1,2,3,4,5];
// var newArr= arr.slice(1,3);
// console.log(newArr);

// function a(){
//     var argv= Array.prototype.slice.call(arguments);
//     argv.forEach(function(test){
//         console.log(test)
//     })
// }
// a(1,2,3);

// var obj={
//     0: 'a',
//     1: 'b',
//     length:2,
// }

// // Array.prototype.push.call(obj,'c');
// // console.log(obj);

// var array = Array.prototype.slice.call(obj);
// console.log(array); 


// function test(){
//     console.log(this); //전역 객체를 가리킨다 
// }
// test();

// var obj={
//     test: function(){
//         console.log(this);//obj 객체를 가리킨다.
//     }
// };
// obj.test();

// var obj={
//     outer: function(){
//         console.log(this); //obj 객체를 가리킨다
//         var innerFunc=function(){
//             console.log(this);// 전역 객체를 가리킨다, 그 후 obj2객체를 가리킨다.
//         }
// //         innerFunc();
// //         var obj2={
// //             outer: innerFunc
// //         };
// //         obj2.outer();
// //     }
// // }
// // obj.outer();

// //내부 함수에서의 this를 우회하는법
// var obj={
//     outer: function(){
//         console.log(this); //obj객체를 가리킨다.
//         var innerFunc = function(){
//             console.log(this); //전역 객체를 가리킨다.
//         }
//         innerFunc();
//         var self= this;
//         var innerFunc2= function(){
//             console.log(self); //전역 객체를 가리켜야 하지만 우회해서 obj객체를 가리킨다.
//         }
        
//         innerFunc2();
//     }
// }
// obj.outer();

// var obj={
//     outer: function(){
//         console.log(this);
//         var inner = function(){
//             console.log(this);
//         }
//         inner();
//     }
// }
// obj.outer();


var obj= {
    outer: function(){
        console.log(this);
        var inner=()=>{
            console.log(this); //화살표 함수를 통해 this를 우회하여 전역객체를 가리킬수 있음
        }
        inner();
    }
};
obj.outer();

console.log