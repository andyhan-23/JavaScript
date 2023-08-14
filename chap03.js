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

function a(){
    var argv= Array.prototype.slice.call(arguments);
    argv.forEach(function(test){
        console.log(test)
    })
}
a(1,2,3);

