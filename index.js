// //스코프 체인
// var outer = function(){
//     var a=2;
//     var inner = function(){
//         console.log(a);
//         var a=3;
//     };
//     inner();
//     console.log(a);
// };
// outer();


// /*
// 1.전역 컨텍스트를 활성화 합니다.전역 컨텍스트의 EnvironmentRecord는 식별자 a 그리고 outer가 있습니다. {a, outer}
// 2.전역 컨텍스트는 선언 시점이 없음으로, 전역 컨텍스트의 outerEnvironmentReference에 아무것도 담기지 않습니다. (this: 전역객체)
// 3. 전역 스코프 변수에 있는 a에 1을 할당, outer에 함수 할당
// 4. outer()함수를 실행할 경우 전역컨텍스트는 잠시 멈추고 outerContext가 활성화됩니다. 이 과정에서 environmentRecord에는 {inner}가 담기고
// outer컨텍스트는 전역 컨텍스트의 선언 시점으로 활성화 된것이니 outerEnvironmentReference에는 전역컨텍스트의 lexicalEnvironment인[global,{a,outer}]가 담깁니다.
// 5. outer스코프에 있는 inner에 함수 할당
// 6. inner()함수를 실행할 경우 outer컨텍스트는 잠시 멈추고 inner컨텍스트가 활성화됩니다. 이 과정에서 environmentRecord에는 {a} 담기고
// inner컨텍스트는 outer컨텍스트의 선언 시점으로 활성화된것이므로 outerEnvoronmentRefernece에는 outer컨텍스트의 lexicalEnvironment인[outer,{inner}]가 담깁니다.
// 7. 식별자 a에 접근하려고 하는데 현재 활성화 상태인 inner컨텍스트의 enviromnetRecord에 a가 있으니 발견되었지만 값이 할당되지 않아 undefined로 출력합니다.
// 8. 그리고 그 a에 3을 할당하고 inner함수 종료시 콜 스택에서 inner콘텍스트는 빠져나가고 바로 아래의 outer컨텍스트가 다시 활성화됩니다.
// 9. outer콘텍스트가 다시 활성시 식별자 a에 접근하려 하는데 outer컨텍스트의 environemntRecord에는 a가 없으니 outerenvironmentreference를 참조 하여 전역 컨텍스트의 environmentRecord로부터 a를 받아옵니다.
// */

// var test=function (){
//     console.log(this);
// }
// //test();

// var obj ={
//     method: test
// };
// obj.method();

// var someone={
//     name:'andy',
//     whoAmI: function(){
//         console.log(this);
//     }
// };

// var myWhoAmI =someone.whoAmI;

// myWhoAmI();
// someone.whoAmI();

// var obj={
//     outer: function(){
//         console.log(this);
//         var innerFunc1= function(){
//             console.log(this);
//         };
//         innerFunc1();

//         var _this=this
//         var innerFunc2=function(){
//         console.log(_this);
//         };
//         innerFunc2();
//     }

// };
// obj.outer();

// var obj ={
//     outer:function(){
//         console.log(this);
//     }
// };
// obj.outer();

// var obj={
//     outer:function(){
//         console.log("첫번쨰",this);

//         var innerFunc=()=>{
//             console.log("두번째",this)
//         };
//         innerFunc();
//     }

// };

// obj.outer();

// //배열 뒷부분의 값을 삭제
// var arr=[1,2,3,4,5];
// arr.pop();
// console.log(arr);

// //배열 뒷부분의 값을 삽입
// var arr=[1,2,3,4];
// arr.push(1);
// console.log(arr);


// var arr=[1,2,3,4];
// var newArr=arr.slice(1,3);
// console.log(newArr);

// var obj={
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     length: 3
// };



// Array.prototype.push.call(obj,'d','e');
// Array.prototype.pop.call(obj);
// var arr=Array.prototype.slice.call(obj);
// console.log(arr);

// var arr=[1,2,3];

// arr.forEach(function(test){
//     console.log(test);
// })

// function a(){
//     var argv=Array.prototype.slice.call(arguments);
//     argv.forEach(function(arg){
//         for(i=0; i<argv.length; i++){
//             console.log(i);    
//         }
//     });
// }
// a(1,2)

// var str="123";
// var str2="465";

// var str3=str2.concat(str);
// console.log(str3);

// var arr='asd';

// var isChar=Array.prototype.every.call(arr,function(char){
//     return char!==' ';
// })
// console.log(arr.every(isChar));
// // var isChar = function(char){
// //     return char!==' ';
// // };
// // console.log(arr.every(isChar));

// var obj={
//     0: 'a',
//     1: 'b',
//     length: 2,
// };

// var arr= Array.from(obj);
// console.log(arr);

// function Person(name, gender){
//     this.name=name;
//     this.gender=gender;
// };

// function Pet(name, gender){
//     this.name=name;
//     this.gender=gender;
// }

// function Student(name, gender, school){
//     Person.call(this,name,gender);
//     this.school=school;
// }

// function Employee(name, gender, employee){
//     Person.call(this,name,gender);
//     this.employee=employee;
// }

// function Puppy(name, gender, type){
//     Pet.call(this,name,gender);
//     this.type=type;
// }

// var andy= new Student('andy', 23,'ㅁㄴㅇ');
// var snow= new Puppy('snow', 2,'포레라니안')
// console.log(andy,snow);

// var arr=[1,2,3,4,5];
// var min= max= arr[0];

// arr.forEach(function(number){
//    console.log(number);
// });

// var number=[1,4, 6, 8, 2];

// var max= Math.max.apply(null,number);
// var min= Math.min.apply(null,number);

// console.log(max, min);


// var func = function(a,b,c,d){
//     console.log(this,a,b,c,d);
// }
// func(1,2,3,4);

// var bind1func = func.bind({x:1});
// bind1func(5,6,7,8);

// var bind2func= func.bind({x:1},2,3);
// bind2func(4,5);

// var func = function(a,b,c,d){
//     console.log(this,a,b,c,d);
// };

// var bindFunc= func.bind({x:1},4,5);

// var func2 =function(a,b){
//     console.log(this,a,b);
// }
// console.log(func.name);
// console.log(func2.name);
// console.log(bindFunc.name);


// var obj ={
//     outer: function(){
//         console.log(this);
//         var innerFunc = function(){
//             console.log(this);
//         }
//         innerFunc.call(this)
//     }
//     };
// obj.outer();

// var obj= {
//     outer: function(){
//         console.log(this);

//         var innerFunc=()=>{
//             console.log(this);
//         };
//         innerFunc();
//     }
//     };
// obj.outer();
// var obj={
//     outer:function(){

//         var innerFunc = function(){
//             console.log(this);
//         }.bind(this);
//         innerFunc();
//     }
// };

// obj.outer();

var count=0;
var timer= setInterval(function(){
    count++;
    if(count===2){
        clearInterval(timer);
    };
},1000);

