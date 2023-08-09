var a=10;
var b=a;

b=13;
console.log(a===b);

var obj1 ={
    a:10,
    b:'avvv'
};

var obj2= obj1;

obj2.a=20;

console.log(obj1==obj2);