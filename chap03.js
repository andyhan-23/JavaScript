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


// var obj= {
//     outer: function(){
//         console.log(this);
//         var inner=()=>{
//             console.log(this); //화살표 함수를 통해 this를 우회하여 전역객체를 가리킬수 있음
//         }
//         inner();
//     }
// };
// obj.outer();

// var func= function(){
//     console.log(this);
// }
// func(); //전역 객체를 호출

// var obj={
//     this: function(){
//         console.log(this); //obj객체를 호출
//     }
// };
// obj.this();

// var obj={
//     func: function(){
//         var innerFunc= function(){
//             console.log(this); //전역 객체를 호출
//         }
//         innerFunc();
//     }
// }
// obj.func();


// var obj={
//     inner: function(){
//         var innerFunc=()=>{
//             console.log(this); //화살표 함수를 선언해서 this 바인딩 과정 자체를 빠지게 함
//         }
//         innerFunc();
//     }
// }
// obj.inner();

// setTimeout(function(){
//     console.log(this); //1초후에 전역 객체를 호출함
// },1000)

// console.log("hello");

// [1,2,3,4,5].forEach(function(x){
//     console.log(this,x); //1부터 5까지 전역 객체를 호출함
// })

// var func= function(a,b,c){
//     console.log(this,a,b,c);
// }
// func(1,2,3); //전역 객체, 1,2,3호출
// func.call({x:1},1,2,3); // {x:1},1,2,3 호출

// var func =function(a,b,c){
//     console.log(this,a,b);
// }
// func.apply({x:1},[2,3]); //{x:1},2,3 호출

// var func= function(a,b){
//     console.log(a,b);
// }
// func.call(1,2);

// var arr={
//     0: 'andy',
//     1: 25,
//     length: 2,
// }

// var arr= Array.prototype.slice.call(arr);
// console.log(arr); //['andy', 25] 배열 출력

// function arguments(a,b,){
//     console.log(a,b);
// }
// arguments(); //undefined, undefined 출력
// arguments('1')// 문자열 1, undefined 출력
// arguments(1,2)// 숫자 1, 2 출력
// arguments(1,"2",3) //숫자1, 문자열 2 출력

// function arguments(a,b){
//     // console.log(arguments[0]); //1출력
//     // console.log(arguments[1]); //2출력
//     // console.log(arguments); //undefined 출력
// }
// arguments(1,2);

// function re_arguments(a,b){
//     arguments[1]="reset";
//     console.log(arguments[0], arguments[1]); //숫자 1, 문자열 reset출력
// // }
// re_arguments(1,2);

//  var args=(a,b)=>{
//     console.log(arguments);
// }
// args(1,1);

// var args=(...arguments)=>{
//     console.log(arguments); //[1,2,3] 출력
//     console.log(toString.call(arguments)); //[object Array]출력
// }
// args(1,2,3)

// function array(a,b,c){
//     console.log(toString.call(arguments)) //[object Arguments]

//     var arr= Array.prototype.slice.call(arguments); //배열로 변환
//     console.log(arr); //[1,2,3]
//     console.log(toString.call(arr)); //[object Array]
// }
// array(1,2,3);

// function print(a,b,c){
//     var arr = [].slice.call(arguments);
//     console.log(arr); //[1,2] 출력
// }
// print(1,2);

// function spread(...args){
//     console.log(args); //[1,2,3,4,5] 출력
// }
// spread(1,2,3,4,5);

// function checkNum(){
//     var arr =Array.prototype.slice.call(arguments);
//     var check = arr.every(function(value){
//         return typeof value === "number"
//     });
//     console.log(check); //false 출력
// }

// var number = checkNum(1,2,3,"1");


// function args(){
// //     var arr= Array.prototype.slice.call(arguments);
// //     console.log(arr); //[1,2,3] 출력
// //     arr.forEach(function(number){
// //         console.log(number);// 순차적으로 1,2,3 출력
// //     })
// // }
// // args(1,2,3);


// // var str ="andy";
// // var check=Array.prototype.every.call(str,function(char){
// //     return char==="a";
// // });
// // console.log(check); //false 출력

// // var str ="andy";
// // var check=Array.prototype.some.call(str,function(char){
// //     return char==="a"; // true 출력
// // });
// // console.log(check);

// // var map =Array.prototype.map.call(str, function(char){
// //     return char+'1'; //['a1', 'n1', 'd1', 'y1'] 출력
// // })

// var str="andy";
// var newStr= Array.prototype.reduce.apply(str, [
//     function(a,b,c,d){
//         return d
//     }, ''
// ]);
// console.log(newStr);


// function Person(name, gender){
//     this.name=name;
//     this.gender=gender;
// };
// function Student(name, gender,major){
//     Person.call(this,name, gender)
//     this.major=major;
// }
// var andy = new Student("andy", 'male', 'computerScience'); 



// //최대,최소값을 구하는 코드를 직접 구현
// var numbers=[10,20,3,16,45];
// var max= min=numbers[0];
// numbers.forEach(function(number){
//     if(number>max){
//         max=number;
//     }
//     if(number<min){
//         min=number;
//     }
// })
// console.log(min, max);

// var array=[2,123,121,12];
// var min= Math.min.apply(null,array);
// var max= Math.max.apply(null,array);
// console.log(min, max);

// //ES6의 펼치기 연산자 활용
// var numbers=[123,122,1,12,-1];
// var min = Math.min(...numbers);
// var max= Math.max(...numbers);
// console.log(min,max);

// var func= function(a,b,c,d){
//     console.log(this,a,b,c);
// }
// func.call(0,2,3,4); //[number:0],2,3,4 출력
// //bind를 활용한 this지정 
// var bindFunc = func.bind({x:1});
// bindFunc(9,8,7); // {x:1},9,8,7 출력
// //bind를 활용한 부분적용 함수 
// var bind2Func = func.bind(0,3,4);
// bind2Func(9,8,7); //[numbrt:0],3,4,9 출력 8,7,이 나오지 않는 이유는 위의 함수에서 매개변수로 a,b,c 이렇게 3개만 받게 하였기 때문  

// var func=function(a,b,c){
//     console.log(this,a,b,c);
// }
// func.call(1,2,3,4); //[number:1],2,3,4 출력
// console.log(func.name); //func 출력
// var bind= func.bind(1);
// bind(2,3,4);
// console.log(bind.name); //bound func출력

// //내부함수에 this전달-call 활용
// var obj={
//     inner: function(){
//         console.log(this);
//         var innerFunc= function(){
//             console.log(this); //obj객체를 명시함
//         }
//         innerFunc.call(this); 
//     }
// };
// obj.inner();
// //내부함수에 this전달-apply 활용
// var obj={
//     inner: function(){
//         console.log(this);
//         var innerFunc=function(){
//             console.log(this); //obj객체를 명시함
//         }.bind(this); 
//         innerFunc();
//     }
// }
// obj.inner();

// var obj ={
//     func: function(){
//         console.log(this);
//     },
//     func2: function(){
//         setTimeout(this.func,1000); //1초후에 전역 객체를 명시함
//     },
//     func3: function(){
//         setTimeout(this.func.bind(this),2000); //2초후에 obj 객체를 가리킴
//     },
//     func4: function(){
//         console.log(this);
//     }
// };
// obj.func2();
// obj.func3();

var report ={
    sum :0,
    count: 0,
    add: function(){
        var args=Array.prototype.slice.call(arguments);
        args.forEach(function(number){
            this.sum+=number;
            ++this.count;
        },this);//콜백함수에서의 this는 forEach함수의 두 번째 인자로 전달해준 this가 바인딩 됩니다.
    },
    average: function(){
        console.log("이거:",this)
        return this.sum/this.count;
    
    }
}
report.add(1,3,9,3);
console.log(report.sum, report.count, report.average());


var obj ={
    count: 0,
    func: function(){
        var array = Array.prototype.slice.call(arguments);
        array.map(function(x){
            this.count++;
        },this)
    },
    result: function(){
        console.log(this.count);
    }
};
obj.func(1,2,3);
obj.result();


Array.prototype.forEach();
Array.prototype.map();
Array.prototype.filter();
Array.prototype.some();
Array.prototype.every();
Array.prototype.find();
Array.prototype.find();
Array.prototype.flatMap();
Array.prototype.from();
Set.prototype.forEach();
Map.prototype.forEach();

