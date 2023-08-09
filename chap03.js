// var a=1;
// window.b=2;
// console.log(a, window.a, this.a);

/*생성자 함수*/
// var Cat= function(name, age){
//     this.bark="야옹";
//     this.name=name;
//     this.age=age;
// }

// var choco = new Cat("choco", 5);
// var kim = new Cat("kim", 13);

// console.log(choco, kim);

var func= function(a,b,c){
    console.log(this, a,b,c);
}

//func(1,2,3);
func.call({x:1},4,5,6);