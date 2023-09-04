// // //스태틱 메서드, 프로토타입 메서드
// // var Rectangle =function(width, height){
// //     this.width=width;
// //     this.height=height;
// // };

// // var Triangle = function(width, height){
// //     this.width =width;
// //     this.height= height;
// // }

// // Rectangle.prototype.getArea=function(){
// //     return this.width*this.height;
// // };

// // Triangle.prototype.getArea=function(){
// //     return (this.width*this.height)/2;
// // }

// // Rectangle.isRectangle =function(instance){
// //     return instance instanceof Rectangle &&
// //         instance.width > 0 && instance.height >0
// //         || instance instanceof Triangle;
// // };

// // var rect1 = new Rectangle(3,4);
// // var triangle1 = new Triangle(1,3)

// // console.log(rect1.getArea());
// // //console.log(rect1.isRectangle(rect1));
// // console.log(Rectangle.isRectangle(rect1))
// // console.log(Rectangle.isRectangle(triangle1))

// //다중 프로토 타입 체인
// // var Grade =function(){
// //     var args= Array.prototype.slice.call(arguments);
// //     for(var i=0; i<args.length; i++){
// //         this[i] = args[i];
// //     }
// //     this.length = args.length;
// // };
// // var g = new Grade(100,80);
// // console.log(g);

// // var arr=[10,20,30,40,50];
// // console.log('기본 for 문');
// // for(var index=0; index<arr.length; index++){
// //     console.log(arr[index]);
// // }
// // console.log('\n향상된 for 문');
// // for(var item of arr){
// //     console.log(item);
// // }
// // console.log('\n map 함수');
// // arr.map(function(item, index){
// //     console.log(index+'번 값:', item);
// // });

// // let obj={};
// // var map = new WeakMap();
// // map.set(obj,{key: "some_value"});
// // console.log(map.get(obj));
// // obj=undefined;


// // // console.log(map.get(obj));


// //map

// // var m= new Map();
// // m.set({a:'a'},{b:'b'});
// // console.log(m);
// // console.log(m.get({a:'a'}));

// // var wm = new WeakMap();

// // var obj={};
// // wm.set(obj,'123');
// // console.log(wm);
// // obj=null;
// // console.log(wm);

// // var Person = function(name){
// //     this._name= name;
// // };
// // Person.prototype.getName=function(){
// //     return this._name;
// // }
// // //이제 person의 인스턴스는 __proto__ 프로퍼티를 통해 getName을 호출할수 있음

// // var andy = new Person("andy");
// // console.log(andy.__proto__.getName()); //undefined
// // console.log(Person.prototype===andy.__proto__); //true

// // andy.__proto__._name="andy";
// // console.log(andy.__proto__.getName()); //andy

// // var tom = new Person("tom");
// // console.log(tom.getName()); //tom



// // var Constructor = function(name){
// //     this.name= name;
// // }
// // Constructor.prototype.method1=function(){
// // };
// // Constructor.prototype.property1='Constructor Prototype Property';

// // var instance = new Constructor('instance');

// // console.dir(Constructor);
// // console.dir(instance);



// //console.log(instance.name==Constructor.name);

// // var arr=[1,2];
// // arr.forEach(function(){}) // 출력 가능
// // console.log(Array.isArray(arr))//true
// // arr.isArray(); //typeError

// // var arr=[1,2];
// // console.log(Array.prototype.constructor===Array); //true
// // console.log(arr.constructor===Array); //true
// // console.log(arr.__proto__.constructor===Array);//true

// // var arr2= new arr.constructor(3,4);
// // var arr3= new arr.__proto__.constructor(4,5);
// // console.log(arr2); //[3,4]
// // console.log(arr3); //[4,5]

// // var NewConstrucotr = function(){
// //     console.log('this is new constructor!');
// // };
// // var dataTypes=[
// //     1,       //Number & false
// //     'test',
// //     {},
// // ];

// // dataTypes.forEach(function(d){
// //     d.constructor = NewConstrucotr;
// //     console.log(d.constructor, '&', d instanceof NewConstrucotr);
// // })

// // var Person = function(name){
// //     this.name = name;
// // };
// // var p1 = new Person('사람1');
// // var p1proto = Object.getPrototypeOf(p1);
// // var p2= new Person.prototype.constructor('사람2');
// // var p3= new p1proto.constructor('사람3');
// // var p4 = new p1.__proto__.constructor('사람4');
// // var p5 = new p1.constructor('사람5');

// // [p1,p2,p3,p4,p5].forEach(function(p){
// //     console.log(p,p instanceof Person);
// // })
// /*
// Person { name: '사람1' } true
// Person { name: '사람2' } true
// Person { name: '사람3' } true
// Person { name: '사람4' } true
// Person { name: '사람5' } true
// */

// // //메서드 오버라이드
// // var Person = function(name){
// //     this. name = name;
// // }
// // Person.prototype.getName= function(){
// //     return this.name;
// // };

// // var iu = new Person('지금');
// // iu.getName =function(){
// //     return '바로' + this.name;
// // };
// // console.log(iu.getName()); //바로 지금

// // Person.prototype.name='이 지금';
// // console.log(iu.__proto__.getName()); //이 지금
// // console.log(iu.__proto__.getName.call(iu)); //지금

// // var arr=[1,2];

// // arr.push(3);
// // console.log(arr);
// // console.log(arr.hasOwnProperty(7));

// // var arr=[1,2];
// // console.log(Array.prototype.toString.call(arr)); //1,2 출력
// // console.log(Object.prototype.toString.call(arr)); //[object Array] 출력

// // console.log(arr.toString()); //1,2 출력

// // arr.toString= function(){
// //     return this.join('_');
// // };
// // console.log(arr.toString());

// // var obj={a:1};
// // console.log(Object.prototype.toString.call(obj));
// // console.log(obj.toString());

// // obj.toString=function(){
// //     return v=9;
// // }
// // console.log(obj.toString());


// // test();
// // function test(){
// //     console.log(1);
// // };

// // var func=function(){
// //     console.log(2);
// // };
// // func();


// // function foo(){
// //     return
// //     {}
// // };

// // console.log(foo());
// // console.log(5/3);

// // var nan=12;
// // var x= nan;
// // console.log(x);

// // console.log('""');

// // let first= 'han';
// // let last = 'andy';

// // let template =`sada`;
// // console.log(template);
// // //console.log("my name is "+last +' '+first);
// // console.log(`my name is ${last} ${first}`)
// // console.log(`1+2=${1+2}`);
// // console.log('1+2=${1+2}');

// // var mySymbol = Symbol("a");
// // var mySymbol = Symbol("b");
// // console.log(typeof mySymbol);
// // console.log(mySymbol.description);
// // console.log(mySymbol.toString());
// // console.log(!!mySymbol);

// // if(!!mySymbol){
// //     console.log("hello ");
// // }

// // const direction={
// //     up:1,
// //     down: 2,
// //     left: 3,
// //     right: 4,
// // };

// // const mydirection= direction.up;

// // if(mydirection===direction.up){
// //     console.log("you're goung up");
// // };

// // const direction2={
// //     up: Symbol('up'),
// //     down: Symbol('down'),
// //     left: Symbol('left'),
// //     right: Symbol('right'),
// // };

// // const mydirection2= direction2.up;

// // direction2.up=
// // if(mydirection2===direction2.up){
// //     console.log('you are going up');
// // }

// // var arr= new Array();
// // arr=[1,2,3,13];
// // var result=arr.find(function(value){
// //     var answer= value>10;
// //     return answer;
// // })
// // console.log(result);

// // Array.prototype.sum= function(){
// //     return this.reduce(function(accumulator, currentValue){
// //         return accumulator+currentValue;
// //     })
// // };

// // // var array=[1,2,3];
// // // console.log(array.sum());

// // Array.prototype[Symbol.for('sum')]= function(){
// //     return this.reduce(function(accumulator,currentValue){
// //         return accumulator+currentValue;
// //     })
// // };

// // console.log([5,6,7].sum());
// // console.log([1,2,3][Symbol.for('sum')]());


// // var test=3;
// // console.log(typeof test);

// // for(var i=0; i<2; i++){
// //     console.log(i);
// // }

// // for(var i=0; i<3; i++){
// //     console.log(i);
// // }

// // for(var i=0; i<4; i++){
// //     console.log(i);
// // }

// // var number=10;
// // var string= number.toString();
// // console.log(typeof string, string);
// // console.log(typeof number, number);

// // var user={
// //     name:'andy',
// //     gedner: 'male',
// // };
// // user=null;
// // console.log(user&&user.name);

// // var obj={
// //     a:3,
// // };

// // var test={
// //     a:4,
// // }

// // console.log(test.b);

// // var user={
// //     1:'andu',
// //     '2':'ads',
// //     length: 2,
// // };
// // console.log(Object.keys(user));


// // var obj={};
// // var key= 1;
// // obj[key]='name;';

// // console.log(obj);

// // var person={
// //     name: 'andy', //프로퍼티
// //     age: 20, //프로퍼티 (age:키, 20:value)
// // }

// // var counter={
// //     num: 0, //프로퍼티
// //     func: function(){
// //         return this.num++; //메서드
// //     }
// // }

// // var person = {
// //     name: 'lee',
// //     sayHello: function(){
// //         console.log(`hello! my name is${this.name}`)
// //     }
// // };

// // // var func=function(){
// // //     console.log("a");
// // // };

// // //객체 리터럴에 의한 객체 생성
// // var person ={
// //     name:'andy',
// //     func: function(){
// //         console.log(`hello my name is ${this.name}`);
// //     }
// // }
// // console.log(typeof person); //object
// // person.func()//hello my name is andy

// // var empty={};
// // console.log(empty); //{}출력

// // var person={
// //     name: 'andy',//프로퍼티 키는 name, 값은 문자열 andy
// //     age: 25, //프로퍼티 키는 age, 값은 숫자 25
// // }

// // var person={
// //     a: 'andy',
// //     'nam' : '1',
// // }
// // var key='asd';
// // person[key]=2;
// // // //var test= person[a];
// // // console.log(person.asd);

// // var obj={};
// // var key='key';
// // obj[key]= 1;
// // console.log(obj); // {key:1} 출력

// // var obj={
// //     '':'' //빈 문자열도 프로퍼티 키로 사용할 수 있다
// // }
// // console.log(obj);

// // var name={
// //     name: 'andy',
// //     name: 'han'
// // }
// // console.log(name); //{name: han}출력

// // var circle ={
// //     radius: 5, //프로퍼티
// //     diameter: function(){
// //         return this.radius*2; //메서드
// //     }
// // }
// // let result=circle.diameter(); //10

// // var person={
// //     'first-name':'han',
// //     1:32
// // }

// // //console.log(person.'first-name'); //error 출력
// // //console.log(person.first-name); //error 출력

// // //console.log(person[first-name]); //error 출력
// // //console.log(person['first-name']); //han 출력

// // //console.log(person.1) //error출력
// // //console.log(person.'1') //error출력
// // console.log(person['1']); //32 출력
// // console.log(person[1]); //32 출력


// // var person={
// //     name: 'andy',
// // }
// // person.name='han';
// // console.log(person);
// // person.age=25;
// // console.log(person); //{name: 'han', age:25}출력
// // delete person.age;
// // console.log(person);


// // //ES5
// // var x=1,y=2;

// // var obj={
// //     x:x,
// //     y:y,
// // }
// // console.log(obj); // {x:1 ,y:2} 출력

// // //ES6
// // var obj={
// //     x,y
// // }
// // console.log(obj);//{x:1, y:2} 출력

// // function add(x,y){ //x, y를 매개변수
// //     return x+y; //반환값
// // }
// // add(2,5); //2,5를 인수

// // //함수 선언문
// // function add(x,y){
// //     return x+y;
// // }
// // //console.log(add(3,4)); //함수 호출

// // add(2,3);
// // //함수 표현식
// // var plus=function(x,y){
// //     return x+y;
// // }
// // plus(3,4);

// // console.log(add(3,4)); //7;
// // console.log(minus(3,4)); //error

// // function add(x, y){
// //     return x+y;
// // };

// // var minus=function(x,y){
// //     return x-y;
// // };

// // var add=new Function('x','y','return x+y');
// // console.log(add(4,5));

// // var add1=(function(){
// //     var a=10;
// //     return function(x,y){
// //         return x+y+a;
// //     };
// // }());
// // console.log(add1(2,4))

// // var add2=(function(){
// //     var a=10;
// //     return new Function('x','y','return x+y+a'); //error: a is not defiend
// // }());
// // console.log(add2(3,4));

// // var func=function(x,y){
// //     return x+y;
// // }

// // var add=function(a,b){
// //     return a+b;
// // }
// // console.log(add(3)); // error: NaN 출력


// // function add(x,y){
// //     return x+y;

// // }
// // function add(x,y){
// //     if(typeof x!=='number' && typeof y!=='number'){
// //         throw new TypeError("비정상")
// //     }else{
// //         console.log("정상입니다.")
// //     };
// //     return x+y;

// // }
// // console.log(add('ㅁ','ㅁ')); //error 출력

// // function func(x,y){
// //     var innerFunc=function(x,y){
// //         return x-y;
// //     }
// //     innerFunc();
// //     return x+y;
// // }
// // console.log(func(3,4)); //7

// // function func(x,y){
// //     return;
// // }
// // console.log(func()); //undefined 출력

// // function func(x,y){
// //     return
// //     x+y; //무시된다.
// // }
// // console.log(func(3,4))//undefined 출력

// //매개변수는 primitive 원시 값을 전달받고, 매개변수 obj는 객체를 전달받는다.
// // function changeVal(primitive, obj){
// //     primitive=primitive+100;
// //     obj.name='kim';
// // };

// // //외부 상태
// // var num=10;
// // var person ={name: 'lee'};

// // console.log(num); //100
// // console.log(person); //{name:lee}
// // //원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
// // changeVal(num, person);

// // //원시 값은 원본이 훼손되지 않는다
// // console.log(num); //100
// // console.log(person); //{name:kim}

// //즉시 실행함수
// // var plus=(function(){
// //     var a=3;
// //     var b=5;
// //     return a+b;
// // }());
// // console.log(plus);

// // function countdown(n){
// //     for(var i=n; i>=0; i--){
// //         console.log(i)
// //     }
// // };
// // countdown(10);

// // //재귀함수 예시
// // function recursive_func(n){
// //     if(n<0){
// //         return;
// //     }
// //     console.log(n);
// //     recursive_func(n-1);
// // }
// // recursive_func(10);
// //팩토리얼
// // function factorial(n){
// //     if(n<=1) return 1;
// //     return n*factorial(n-1);
// // }
// // console.log(factorial(-3));

// // function outer(){
// //     console.log(1);
// //     function inner(){
// //         console.log(2);
// //     }
// //     inner();
// // }
// // outer();

// // function outer(){
// //     var x=1;

// //     //중첩 함수
// //     function inner(){
// //         var y=2;
// //         //외부 함수의 변수를 참조할 수 있다.
// //         console.log(x+y); //3;
// //     }
// //     inner();
// // }
// // outer();

// // //n만큼 반복하여 i를 출력한다
// // function repeat(n){
// //     for(var i=0;i<=n; i++){
// //         console.log(i);
// //     }
// // };
// // repeat(5);//0,1,2,3,4,5

// // //n만큼 반복하여 i가 짝수일때만 출력
// // function oddRepeat(n){
// //     for(var i=0 ;i<n; i++){
// //         if(i%2==0){
// //             console.log(i)
// //         }
// //     }
// // };
// // oddRepeat(5);//0,2,4

// // //외부로 전달받은 f를 n만큼 반복 호출한다.
// function repeat(n,f){
//     for(var i=0;i<=n; i++){
//         f(i);
//     }
// };

// // function logAll(n){
// //     return n;
// // };

// // function logOdd(n){
// //     if(n%2==1){
// //         console.log(n);
// //     }
// // };

// // //반복 호출할 함수를 인수로 전달
// // repeat(5,logAll); //0,1,2,3,4,5
// // repeat(5,logOdd); //1,3,5

// //익명 함수 리터럴을 콜백 함수로 고차 함수에 전달한다.
// //익명 함수 리터럴은 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성한다.
// // repeat(5, function(i){
// //     if(i%2==1){
// //         console.log(i)
// //     }
// // });

// // //oddRepeat 함수는 단 한번만 생성된다.
// // var oddRepeat=function(n){
// //     if(n%2==1){
// //         console.log(n)
// //     }
// // };
// // //고차 함수에 함수 참조를 전달한다.
// // repeat(7,oddRepeat);

// // var count=0; // 현재 카운트를 나타내는 상태;
// // //순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
// // function increase(n){
// //     return ++n;
// // };

// // //순수 함수가 반환환 결과값을 변수에 재할당해서 상태를 변경
// // count=increase(count);
// // console.log(count); //1

// // count=increase(count);
// // console.log(count); //2

// // var count=0; //현재 카운트를 나타내는 상태: increase함수에 의해 변화한다.

// // //비순수 함수
// // function increase(){
// //     return ++count; //외부 상태에 의존하며 외부 상태를 변경한다.
// // }

// // //비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하기 어려워진다.
// // increase();
// // console.log(count); //1

// // increase();
// // console.log(count); //2

// // function add(x,y){
// //     //매개변수의 함수 몸체 내부에서만 참조할수 있다. 즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.
// //     console.log(x,y);
// //     return x+y;
// // }
// // console.log(add(4,5));
// // console.log(x,y); //error

// // var var1= 1; //코드의 가장 바깥 영역에서 선언한 변수

// // if(true){
// //     var var2=2; //코드 블록 내에서 선언한 변수
// //     if(true){
// //         var var3=3; //중첩한 코드 블록 내에서 선언한 변수
// //     }
// // }

// // function foo(){
// //     var var4=4; //함수 내에서 선언한 변수
// //     function innerFoo(){
// //         var var5=5; // 중첩된 함수 내에서 선언한 변수
// //     }
// // }

// // console.log(var1);  //1 출력
// // console.log(var2);  //2 출력
// // console.log(var3);  //3 출력
// // console.log(var4); //error
// // console.log(var5); //error;



// // function foo(){
// //     let x='global'
// //     console.log(x);
// //     function innerFoo(){
// //         let x='x'
// //         console.log(x);

// //     };
// //     innerFoo();
// // };
// // foo();

// // function outer(){
// //     const a=10;
// //     console.log(a);
// //     //console.log(b);
// //     function inner(){
// //         var b=30;
// //         console.log(a)
// //     }
// //     inner();
// // }
// // outer();

// // var x="global x";
// // var y="global y";

// // function outer(){
// //     var z="outer's local z";

// //     console.log(x); //1 global x
// //     console.log(y); //2 global y
// //     console.log(z); //3 outer's local z

// //     function inner(){
// //         var x="inner's local x";

// //         console.log(x) //4 inner's local x;
// //         console.log(y) //5 global y
// //         console.log(z) //6 outer's local z
// //     }
// //     inner();
// // }
// // outer();

// // console.log(x); // 7global x
// // console.log(z); // 8error

// // function foo(){
// //     console.log("전역 함수");
// // }

// // function bar(){
// //     function innerBar(){
// //         console.log("지역 함수");
// //     }
// //     innerBar();
// // };

// // bar(); //지역 함수 출력

// // var i=10;

// // //for 문에서 선언한 i는 전역변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
// // for(var i=0; i<5; i++){
// //     console.log(i); //0,1,2,3,4 출력
// // }

// // //의도치 않게 변수의 값이 변경되었다.
// // // console.log(i);//5

// // function foo(){
// //     var x= 'local';
// //     console.log(x); //local
// //     return x;
// // }
// // //foo();
// // console.log(x); //error

// // function foo(){
// //     var x='local'; //변수 x
// //     console.log(x);
// //     return x;
// // }

// // var x='global';

// // function foo(){
// //     console.log(x);
// //     var x='local';
// // };
// // foo();

// // function foo(){
// //     var x="hello"
// //     console.log(x);
// // };

// // (function (){
// //     var foo=10;
// // }());
// // console.log(foo); //error

// // var MYMAP ={};//전역 네임스페이스 객체

// // MYMAP.person ="andy";
// // console.log(MYMAP.person); //andy 출력

// // var obj={};
// // obj.user={
// //     name: 'andy',
// //     gender: 'male',
// //     age: 23,
// // }
// // console.log(obj.user);

// // var counter=(function(){
// //     //private 변수
// //     var num=0;

// //     //외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
// //     return{
// //         increase(){
// //             return ++num;
// //         },
// //         decrease(){
// //             return --num;
// //         },
// //     }
// // }());

// // //private 변수는 외부로 노출하지 않는다.
// // console.log(counter.num);

// // console.log(counter.increase());//1
// // console.log(counter.increase());//2
// // console.log(counter.decrease());//1
// // console.log(counter.decrease());//0
// // console.log(counter.decrease());//-1

// // var x=1;
// // var y=1;

// // //var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// // //초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var키워드가 없는 것처럼 동작한다.
// // var x=100;
// // //초기화문이 없는 변수 선언문을 무시됀다.
// // var y;

// // console.log(x); //100
// // console.log(y); //1


// // var x=1;
// // if(1){
// //     //x는 전역 변수다. 이미 선언된 전역 변수 x가 있으므로 x변수는 중복 선언된다.
// //     //이는 의도치 않게 변수값이 변경되는 부작용을 발생시킨다.
// //     var x=10;
// // }
// // console.log(x); //10

// // var i=3;

// // //for문에서 선언한 i는 전역 변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
// // for(var i=0; i<5; i++){
// //     console.log(i); //0,1,2,3,4
// // };

// // //의도치 않게 i 변수의 값이 변경되었다.
// // console.log(i); //5

// // function foo(){
// //     let i=10;
// //     if(true){
// //         let i=30;
// //         if(true){
// //             console.log(i);
// //         }
// //     }
// // }
// // foo();

// // let i=1;

// // {
// //     let i=3;
// // }
// // console.log(i);

// // let x=10;
// // function test(){
// //     console.log(x);
// // }
// // test();

// // //이 시점에서는 변수 호이스팅에 의해 이미 foo변수가 선언되었다.(1. 선언단계)
// // // 변수 foo는 undefined로 초기화 된다.(2. 초기화 단계)
// // console.log(foo);//undefined

// // //변수에 값을 할다(3. 할당 단계)
// // foo=123;

// // console.log(foo); //123

// // var foo;

// // var foo=123;
// // //var키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// // //아래 변수 선언문은 자바스크립트 엔진에 의해 var키워드가 없는 것처럼 동작한다.
// // var foo=565;

// // let fo=12;
// // //let이나 const키워드로 선언한 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
// // let fo=45;

// // let foo=10;
// // {
// //     let foo=45; //지역 변수
// //     let bar=4;
// //     console.log(foo); //45출력
// // }
// // console.log(foo); //10 출력
// // console.log(bar);//error

// // let i=10;
// // function foo(){
// //     let i=100;
// //     for(let i=1; i<3; i++){
// //         console.log(i); //1,2 출력
// //     }
// //     console.log(i); //100출력
// // }
// // foo();
// // console.log(i); //10출력

// // console.log(andy); //error
// // let andy='andy';

// // //런타임 이전에 선언 단계가 실행된다. 아직 변수가 초기화되지 않았다.
// // //초기화 이전의 일시적 사각지대에서는 변수를 참조할 수 없다.
// // console.log(foo); //error

// // let foo; //변수 선언문에서 초기화 단계가 실행된다.
// // console.log(foo); //undefined;

// // foo=1; //할당문에서 할당 단계가 실행된다.
// // console.log(foo); //1

// // let foo=1; //전역 변수
// // {
// //     console.log(foo); //error
// //     let foo=3; //지역 변수
// // }

// // function func(){};
// // console.log(func);

// // var x=1;
// // console.log(window.x);

// // //브라우저 환경에서 실행

// // //전역 변수
// // var x =1;
// // //암묵적 전역
// // y=2;
// // //전역 함수
// // function foo(){}

// // //var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다.
// // console.log(window.x); //1
// // //전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
// // console.log(x); //1;

// // //암묵적 전역은 전역 객체 window의 프로퍼티다.
// // console.log(window.y); //2
// // console.log(y); //2

// // //함수 선언문으로 정의한 전역 함수는 전역 객체 window의 프로퍼티다.
// // console.log(window.foo) // f foo(){}
// // //전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
// // console.log(foo); // f foo(){}

// // let x=1;
// // //let, const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아니다.
// // console.log(window.x); //undefined
// // console.log(x); //1


// // {
// //     //변수 호이스팅이 발생하지 않는 것처럼 동작한다.
// //     //console.log(andy); //error
// //     const andy='andy';
// //     console.log(andy); //andy
// // }

// // //블록 레벨 스코프를 갖는다.
// // console.log(andy); //error

// // const a=1;
// // a=4
// // console.log(a); //error

// //세전 가격
// //let preTaxPrice=100;

// //세후 가격
// //0.1의 의미를 명확히 알기 어렵기 때문에 가독성이 좋지 않다.
// //let afterTaxPrice= preTaxPrice+(preTaxPrice*0.1);

// // //세율을 의미하는 0.1은 변경할 수 없는 상수로서 사용될 값이다.
// // //변수 이름은 대문자로 선언해 상수임을 명확히 나타낸다.
// // const TAX_RATE=0.1;

// // //세전 가격
// // let preTaxPrice=100;

// // //세후 가격
// // let afterTaxPrice =preTaxPrice+(preTaxPrice*TAX_RATE);

// // const person ={
// //     name: 'andy'
// // }
// // person.name='han';
// // person.age=25;
// // console.log(person); //{name: 'han', age: 25};

// // const obj={
// //     a: 3
// // }
// // const arr=[1,2,];
// // console.log(arr.__proto__);


// // const age= Symbol("age");

// // const obj={
// //     name:'andy',
// // };

// // console.log(Object.getOwnPropertyDescriptor(obj,'name'));
// // //{ value: 'andy', writable: true, enumerable: true, configurable: true }

// // const person={
// //     name: 'andy',
// // }
// // person.age='25';

// // console.log(Object.getOwnPropertyDescriptors(person));
// // /* 출력결과
// //  {
// //   name: {
// //     value: 'andy',
// //     writable: true,
// //     enumerable: true,
// //     configurable: true
// //   },
// //   age: { value: '25', writable: true, enumerable: true, configurable: true }
// // }
// // */

// // const a={
// //     name: 'asd'
// // };
// // console.log(Object.getOwnPropertyDescriptors(a));




// // const person ={
// //     //데이터 프로퍼티
// //     firstName: 'Andy',
// //     lastName: 'Han',

// // //fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
// // //getter 함수
// //     get fullName(){
// //         return `${this.firstName} ${this.lastName}`;
// //     },

// // //setter 함수
// //     set fullName(name){
// //         [this.firstName,this.lastName] =name.split(' ');
// //     }
// // };

// // //데이터 프로퍼티를 통한 프로퍼티 값의 참조
// // console.log(person.firstName+' '+person.lastName); //andyHan

// // //접근자 프로퍼티를 통한 프로퍼티 값의 저장
// // //접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
// // person.fullName = 'Han Jaehyeok';
// // console.log(person); //{ firstName: 'Han', lastName: 'Jaehyeok', fullName: [Getter/Setter] }

// // //접근자 프로퍼티를 통한 프로퍼티 값의 참조
// // //접근자 프로퍼티 fullName에 접근하면 getter함수가 호출된다.
// // console.log(person.fullName); //Han Jaehyeok

// // //firstName은 데이터 프로퍼티다.
// // //데이터 프로퍼티는 [[value]] ,[[writeable]], [[enumerable]], [[configurable]]
// // //프로퍼티 어트리뷰트를 갖는다
// // let descriptor=Object.getOwnPropertyDescriptor(person, 'firstName');
// // console.log(descriptor); //{ value: 'Han', writable: true, enumerable: true, configurable: true }

// // //fullName은 접근자 프로퍼티다.
// // //접근자 프로퍼티는 [[Get]] ,[[Set]], [[Enumerable]], [[Configurable]]
// // //프로퍼티 어트리뷰트를 갖는다
// // descriptor=Object.getOwnPropertyDescriptor(person, 'fullName');
// // console.log(descriptor);
// // /* {
// //   get: [Function: get fullName],
// //   set: [Function: set fullName],
// //   enumerable: true,
// //   configurable: true
// // } */

// // //일반 객체의 __proto__는 접근자 프로퍼티다.
// // const objDescriptor=Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
// // console.log(objDescriptor);
// // /* 출력 결과
// // {
// //   get: [Function: get __proto__],
// //   set: [Function: set __proto__],
// //   enumerable: false,
// //   configurable: true
// // }
// // */
// // const funcDescriptor=Object.getOwnPropertyDescriptor(function(){},'prototype');
// // console.log(funcDescriptor);
// // /* 출력 결과
// // { value: {}, writable: true, enumerable: false, configurable: false }
// // */



// // const person={};

// // //데이터 프로퍼티 정의
// // Object.defineProperty(person, 'firstName', {
// //     value: 'andy',
// //     writable: true,
// //     enumerable: true,
// //     configurable: true,
// // });

// // Object.defineProperty(person,'lastName',{
// //     value: 'han',
// // });

// // Object.defineProperty(person,'middleName',{
// // });

// // let descriptor=Object.getOwnPropertyDescriptor(person,'firstName');
// // console.log('firstName', descriptor); //firstName { value: 'andy', writable: true, enumerable: true, configurable: true }

// // //디스크립터 객테의 프로퍼티를 누락시키면 undefined, false가 기본값이다.
// // descriptor=Object.getOwnPropertyDescriptor(person,'lastName');
// // console.log('lastName', descriptor);
// // /*lastName {
// //   value: 'han',
// //   writable: false,
// //   enumerable: false,
// //   configurable: false
// // } */
// // descriptor=Object.getOwnPropertyDescriptor(person,'middleName');
// // console.log(descriptor);
// // /*{
// //   value: undefined,
// //   writable: false,
// //   enumerable: false,
// //   configurable: false
// // }*/

// // //[[Enumerable]]의 값이 false인 경우
// // //해당 프로퍼티는 for...in 문법이나 Object.keys 등으로 열거할수 없다.
// // //lastName 프로퍼티는 [[Enumerable]]의 값이 false이므로 열거되지 않는다.
// // console.log(Object.keys(person)); //[ 'firstName' ]

// // //[[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]] 값을 변경할 수 없다.
// // //lastName 프로퍼티는 [[Writeable]] 의 값이 false이므로 값을 변경할 수 없다.
// // //이때 값을 변결하면 에러는 발생하지 않고 무시된다.
// // person.lastName='kim';

// // //[[Configuralble]]의 값이 false인 경우 해당 프로퍼티를 삭제할수 없다.
// // //lastName은 프로퍼티는 [[Configuralble]]의 값이 false이므로 삭제할 수 없다.
// // //이때 프로퍼티를 삭제하면 에러는 방생하지 않고 무시된다.
// // delete person.lastName;

// // //[[Configurable]]의 값이 false인 경우 해당 프로퍼티를 재정의 할 수 없다.
// // descriptor=Object.getOwnPropertyDescriptor(person,'lastName');
// // console.log('lastName', descriptor);
// // /*{
// //     value: 'han',
// //     writable: false,
// //     enumerable: false,
// //     configurable: false
// // }*/

// // //접근자 프로퍼티 정의
// // Object.defineProperty(person,'fullName',{
// //     //getter함수
// //     get(){
// //         return `${this.firstName} ${this.lastName}`;
// //     },
// //     //setter함수
// //     set(name){
// //         [this.firstName,this.lastName]= name.split(' ');
// //     },
// //     enumerable:true,
// //     configurable:true,
// // });
// // descriptor=Object.getOwnPropertyDescriptor(person,'fullName');
// // console.log('fullName', descriptor);
// // /*fullName {
// //   get: [Function: get],
// //   set: [Function: set],
// //   enumerable: true,
// //   configurable: true
// // }*/
// // person.fullName='Han JaeHyeok';
// // console.log(person); //{ firstName: 'Han', fullName: [Getter/Setter] }

// // const person={};

// // Object.defineProperties(person,{
// //     //데이터 프로퍼티 정의
// //     firstName: {
// //         value:'andy',
// //         writable: true,
// //         configurable: true,
// //         enumerable: true,
// //     },
// //     lastName:{
// //         value: 'han',
// //         writable: true,
// //         configurable: true,
// //         enumerable: true,
// //     },
// //     fullName:{
// //         //getter함수
// //         get(){
// //             return `${this.firstName} ${this.lastName}`;
// //         },
// //         set(name){
// //             [this.firstName,this.lastName]=name.split(' ');
// //         },
// //         configurable: true,
// //         enumerable: true,
// //     }
// // });
// // person.fullName='han jaehyeok';
// // console.log(person); //{ firstName: 'han', lastName: 'jaehyeok', fullName: [Getter/Setter] }

// // const person={
// //     name:'andy',
// // };

// // //person객체는 확장이 금지된 객체가 아니다.
// // console.log(Object.isExtensible(person)); //true

// // //person객체의 확장을 금지하여 프로퍼티 추가를 금지한다.
// // Object.preventExtensions(person);
// // console.log(Object.isExtensible(person)); //false

// // //프로퍼티 추가가 금지된다.
// // person.age =20; //무시
// // console.log(person);

// // //프로퍼티 추가는 금지되지만 삭제는 가능하다
// // delete person.name;
// // console.log(person); //{}

// // Object.defineProperty(person, 'name',{
// //     configurable:true
// // })

// // const person={
// //     name: 'andy'
// // };

// // //person객체는 밀봉(seal)된 객체가 아니다.
// // console.log(Object.isSealed(person)); //false출력

// // //person 객체를 밀봉 하여 프로퍼티 추가, 삭제, 재정의를 금지한다.
// // Object.seal(person);

// // //person객체는 밀봉(seal)된 객체다.
// // console.log(Object.isSealed(person)); //true

// // //밀봉된 객체는 configurable이 false다.
// // console.log(Object.getOwnPropertyDescriptors(person));
// // /*{
// //   name: {
// //     value: 'andy',
// //     writable: true,
// //     enumerable: true,
// //     configurable: false
// //   }
// // }*/

// // //프로퍼티 추가가 금지된다.
// // person.age =20; //무시
// // console.log(person); //{ name: 'andy' }

// // //프로퍼티 삭제가 금지된다.
// // delete person.name;
// // console.log(person); //{ name: 'andy' }

// // //프로퍼티 값 갱신은 가능하다.
// // person.name='kim';
// // console.log(person); //{ name: 'kim' }

// // //프로퍼티 어트리뷰트 재정의가 금지된다.
// // Object.defineProperty(person,'name',{configurable:true}); //error

// // const person={
// //     name: 'andy'
// // };

// // //person 객체는 동결(freeze)객체가 아니다
// // console.log(Object.isFrozen(person));//false;

// // //person 객체를 동결(freeze)하여 프로퍼티 추가, 삭제, 재정의, 쓰기를 금지한다.
// // Object.freeze(person);
// // console.log(Object.isFrozen(person));//true;

// // //동결(freeze)된 객체는 writable 과 configurable이 false다.
// // console.log(Object.getOwnPropertyDescriptors(person));
// // /*{
// //   name: {
// //     value: 'andy',
// //     writable: false,
// //     enumerable: true,
// //     configurable: false
// //   }
// // }*/
// // //프로퍼티 추가가 금지된다.
// // person.age=25;
// // console.log(person); //{ name: 'andy' }

// // //프로퍼티 삭제가 금지된다.
// // delete person.name;
// // console.log(person); //{ name: 'andy' }

// // //프로퍼티 값 갱신이 금지된다.
// // person.name="han";
// // console.log(person); //{ name: 'andy' }

// // //프로퍼티 어트리뷰트 재정의가 금지된다.
// // Object.defineProperty(person,'name',{ //error
// //     configurable:true
// // })

// // const person={
// //     name: 'andy',
// //     address:{city: 'seoul'}
// // };

// // //얖은 객체 동결
// // Object.freeze(person);

// // //직속 프로퍼티만 동결한다.
// // console.log(Object.isFrozen(person)); //true
// // //중첩 객체까지 동결하지 못한다.
// // console.log(Object.isFrozen(person.address));//false

// // person.address.city='goyang';
// // console.log(person); //{ name: 'andy', address: { city: 'Busan' } }

// // function deepFreeze(target){
// //     if(target && typeof target === 'object' && !Object.isFrozen(target)){
// //         Object.freeze(target);
// //         /*모든 프로퍼티를 순회하며 재귀적으로 동결한다.*/
// //         Object.keys(target).forEach(key=>deepFreeze(target[key]));
// //     }
// //     return target;
// // }
// // const person={
// //     name:'han',
// //     address: {city:'seoul'}
// // };

// // //깊은 객체 동결
// // deepFreeze(person);

// // console.log(Object.isFrozen(person)); //true
// // //중첩 객체까지 동결한다.
// // console.log(Object.isFrozen(person.address)); //true

// // person.address.city="goyang"
// // console.log(person); //{ name: 'han', address: { city: 'seoul' } }

// // //빈 객체의 생성
// // const person= new Object();

// // //프로퍼티 추가
// // person.name='Han';
// // person.sayHello= function(){
// //     console.log('hello my name is '+this.name);
// // }

// // console.log(person); //{ name: 'Han', sayHello: [Function (anonymous)] }
// // // person.sayHello(); //hello my name is Han

// // //String 생성자 함수에 의한 String 객체 생성
// // const strObj = new String("andy");
// // console.log(strObj); //[String: 'andy']
// // console.log(typeof strObj);//object

// // //Number 생성자 함수에 의한 Number 객체 생성
// // const numObj = new Number(1);
// // console.log(numObj); //[Number: 1]
// // console.log(typeof numObj);//object

// // //Boolean 생성자 함수에 의한 Boolean 객체 생성
// // const boolObj = new Boolean(true);
// // console.log(boolObj); //[Boolean: true]
// // console.log(typeof boolObj) //object

// // //Function 생성자 함수에 의한 Function 객체 생성
// // const funcObj= new Function('x', 'return x+x');
// // console.log(funcObj); //[Function: anonymous]
// // console.log(typeof funcObj);// function

// // //Array 생성자 함수에 의한 Array 객체(배열) 생성
// // const arrObj = new Array(1,2,3);
// // console.log(arrObj); //[ 1, 2, 3 ]
// // console.log(typeof arrObj); //object

// // //RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식)생성
// // const regExp=new RegExp(/ab+c/i);
// // console.log(regExp); //ab+c/i
// // console.log(typeof regExp); //object

// // //Date 생성자 함수에 의한 Date 객체 생성
// // const date = new Date();
// // console.log(date); //2023-08-28T07:46:53.453Z
// // console.log(typeof date);//object

// // const circle ={
// //     radius: 5,
// //     getDiameter(){
// //         return 2 * this.radius;
// //     }
// // };

// // console.log(circle.getDiameter()); //10

// // const circle2={
// //     radius: 10,
// //     getDiameter(){
// //         return 2 * this.radius;
// //     }
// // };

// // console.log(circle2.getDiameter()); //20

// // // //생성자 함수
// // function Circle(radius){
// //     //생성자 함수의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
// //     this.radius=radius;
// //     this.getDiameter=function(){
// //         return 2 * this.radius;
// //     };
// // }
// // // //인스턴스의 생성
// // // const circle = new Circle(5); // 반지름이 5인 Circle 객체를 생성
// // const circle2 = new Circle(10); //반지름이 10인 Circle 객체를 생성

// // //console.log(circle.getDiameter()); //10
// // console.log(circle2.getDiameter()); //20

// // // //함수는 다양한 방식으로 호출될 수 있다
// // // function foo(){
// // //     console.log(this);
// // // }

// // // //일반적인 함수로서 호출
// // // //전역 객체는 브라우저 환경에서는 window, Node.js 환경에서는 global을 가리킨다.
// // // foo(); //global

// // // const obj={foo};
// // // //메서드로서 호출
// // // obj.foo(); //{ foo: [Function: foo] }

// // // //생성자 함수로서 호출
// // // const inst = new foo(); //foo {}

// // //new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다
// // //즉, 일반 함수로서 호출된다.
// // const circle3= Circle(15);

// // //일반 함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환한다.
// // console.log(circle3); //undefined;

// // //일반 함수로서 호출된 Circle 내의 this는 전역 객체를 가리킨다.
// // console.log(radius);

// // //생성자 함수
// // function Circle(radius){
// //     //인스턴스 초기화
// //     this.radius = radius;
// //     this.getDiameter =function(){
// //         return 2 * this.radius;
// //     };
// // }
// // //인스턴스 생성
// // const circle1 = new Circle(5); //반지름이 5인 Circle 객체를 생성

// // function Circle(radius){
// //     //1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
// //     console.log(this);

// //     this.radius=radius;
// //     this.getDiameter= function(){
// //         return 2 * this.radius;
// //     };
// // };

// // function Circle(radius){
// //     //1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.

// //     //2. this에 바인딩되어 있는 인스턴스를 초기화한다.
// //     this.radius=radius;
// //     this.getDiameter=function(){
// //         return 2*this.radius;
// //     };
// // }

// // function Circle(radius){
// //     //1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.

// //     //2. this에 바인딩되어 있는 인스턴스를 초기화한다.
// //     this.radius=radius;
// //     this.getDiameter=function(){
// //        return 2*this.radius;
// //     };

// //     //3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
// // }

// // //인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환한다.
// // const circle = new Circle(5);
// // console.log(circle); //Circle { radius: 5, getDiameter: [Function (anonymous)] }

// // function Circle(radius){
// //     //1. 암묵적으로 빈 객체가 생성되고 this에 바인딩된다.

// //     //2. this에 바인딩되어 있는 인스턴스를 초기화한다.
// //     this.radius=radius;
// //     this.getDiameter= function(){
// //         return 2*this.radius;
// //     };

// //     //3.암묵적으로 this를 반환한다.
// //     //명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
// //     return {};
// // }

// // //인스턴스 생성. Circle 생성자 함수는 명시적으로 반환한 객체를 반환한다.
// // const circle= new Circle(1);
// // console.log(circle); //{}

// // function Circle(radius){
// //     //1. 암묵적으로 빈 객체가 생성되고 this에 바인딩된다.

// //     //2. this에 바인딩되어 있는 인스턴스를 초기화한다.
// //     this.radius=radius;
// //     this.getDiameter=function(){
// //         return 2*this.radius;
// //     };

// //     //3. 암묵적으로 this를 반환한다.
// //     //명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환된다.
// //     return 100;
// // }

// // const circle =new Circle(10);
// // console.log(circle); //Circle { radius: 10, getDiameter: [Function (anonymous)] }

// // //함수는 객체다
// // function foo(){

// // };

// // //함수는 객체이므로 프로퍼티를 소유할 수 있다.
// // foo.hello='hello';

// // //함수는 객체이므로 메서드를 소유할 수 있다.
// // foo.method=function(){
// //     console.log(this.hello);
// // }
// // foo.method(); //hello

// // function foo(){}

// // //일반적인 함수로서 호출: [[Call]]이 호출된다.
// // foo();

// // //생성자 함수로서 호출: [[Construct]]가 호출된다.
// // new foo();

// // const obj={
// //     a:1,
// //     a:2,
// // }

// // var key=Symbol("key1");
// // var key=Symbol("key2");
// // obj[key]="key1";
// // console.log(obj);

// // //Symbol 함수를 호출하여 유일무이한 심벌 값을 생성한다.
// // const mySymbol = Symbol();
// // console.log(typeof mySymbol); //symbol

// // //심벌 값은 외부로 노출되지 않아 확인할 수 없다.
// // console.log(mySymbol); //symbol();

// // const mySymbol= new Symbol();//TypeError: Symbol is not a constructor

// // //심벌 값에 대한 설명이 같더라도 유일무이한 심벌 값을 생성한다.
// // const mySymbol1 = Symbol("1");
// // const mySymbol2 = Symbol("1");

// // console.log(mySymbol1===mySymbol2); //false

// // var str="문자열";
// // console.log(str.length);

// // const mySymbol = Symbol("mySymbol");

// // //심벌도 래퍼 객체를 생성한다.
// // console.log(mySymbol.description); //mySymbol
// // console.log(mySymbol.toString()); //Symbol(mySymbol)

// // const mySymbol = Symbol();
// // console.log(mySymbol+" "); //TypeError: Cannot convert a Symbol value to a string

// // const mySymbol =Symbol();
// // console.log(!!mySymbol); //true

// // //if문 등에서 존재 확인이 가능하다
// // if(!!mySymbol){
// //     console.log("true");//true
// // }

// // //전역 심벌 레지스트리에 mySymbol 이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
// // const s1 = Symbol.for('mySymbol');
// // //전역 심벌 레지스트리에 mySymbol 이라는 키로 저장된 심벌 값이 있으면 해당 심벌 값을 반환
// // const s2= Symbol.for('mySymbol');

// // console.log(s1===s2); //true

// // //전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
// // const s1 = Symbol.for("mySymbol");
// // //전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출
// // const result=Symbol.keyFor(s1);
// // console.log(result);// mySymbol;

// // const s2= Symbol('yourSymbol');
// // const result2 = Symbol.keyFor(s2);
// // console.log(result2);// undefined

// // //위, 아래, 왼쪽, 오른쪽을 나타내는 상수를 정의한다.
// // //이때 값 1,2,3,4 에는 특변한 의미가 없고 상수 이름에 의미가 있다.
// // const Direction={
// //     UP: 1,
// //     DOWN: 2,
// //     LEFT: 3,
// //     RIGHT: 4,
// // };
// // //변수에 상수를 할당
// // const myDirection=Direction.UP;

// // if(myDirection===Direction.UP){
// //     console.log("your going up!");
// // }

// // //위, 아래, 왼쪽, 오른쪽을 나타내는 상수를 정의한다.
// // //중복될 가능성이 없는 심벌 값으로 상수 값을 생성한다.
// // const Direction={
// //     UP: Symbol('UP'),
// //     DOWN: Symbol('DOWN'),
// //     LEFT: Symbol('LEFT'),
// //     RIGHT: Symbol('RIGHT')
// // }

// // const myDirection=Direction.UP;

// // if(myDirection===Direction.UP){
// //     console.log("your going up");
// // }

// // const obj={
// //     //심벌 값으로 프로퍼티 키를 생성
// //     [Symbol.for('mySymbol')]: 1,

// // };

// // //getOwnPropertySymbols 메서드는 인수로 전달한 객체의 심벌 프로퍼티 키를 배열로 반환한다.
// // console.log(Object.getOwnPropertySymbols(obj)); //[ Symbol(mySymbol) ]

// // //getOwnPropertySymbols 메서드로 심벌 값도 찾을 수 있다.
// // const symbolKey1 = Object.getOwnPropertySymbols(obj)[0];
// // console.log(obj[symbolKey1]); //1

// // //표준 빌트인 객체를 확장하는 것은 권장하지 않는다.
// // Array.prototype.sum=function(){
// //     return this.reduce((acc, cur)=>acc+cur,0);
// // };
// // console.log([1,2].sum());

// // //심벌 값으로 프로퍼티 키를 동적 생성하면 다른 프로퍼티 키와 절대 충돌하지 않아 안전하다.
// // Array.prototype[Symbol.for('sum')]=function(){
// //     return this.reduce((acc, cur)=>acc+cur,0);
// // };
// // console.log([1,2][Symbol.for('sum')]()); //3

// // //1~5 범위의 정수로 이루어진 이터러블
// // const iterable={
// //     //Symbol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수
// //     [Symbol.iterator](){
// //         let cur=1;
// //         const max=5;
// //         //Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환
// //     return{
// //         next(){
// //             return{value: cur++, done: cur>max+1};
// //             }
// //         };
// //     }
// // };

// // for(const num of iterable){
// //     console.log(num); //1 2 3 4 5
// // }

// // //iterable
// // [Symbol.iterator](){...};
// // //순회 가능한 자료구조

// // //iterator
// // {
// //     next(){
// //         return {value: any, done: boolean} //이터레이터 리절트 객체
// //     }
// // }
// // //이터러블의 요소를 탐색하기 위한 포인터

// // //이터러블 인지 확인하는 함수
// // const isIterable = v => v !==null && typeof v[Symbol.iterator] === 'function';

// // //배열, 문자열, Map, Set 등은 이터러블이다. 
// // console.log(isIterable([])); //true,
// // console.log(isIterable('')); //true,
// // console.log(isIterable(new Map())); //true
// // console.log(isIterable(new Set())); //true
// // console.log(isIterable({}));

// // const array=[1,2,3];

// // //배열은 Array.prototype의 Symbol.iterator 메서드를 상속받는 이터러블 이다.
// // console.log(Symbol.iterator in array); //true;

// // //이터러블인 배열은 for...of 문으로 순회 가능하다.
// // for(const value of array){
// //     console.log(value);
// // }

// // //이터러블인 배열은 스프레드 문법의 대상으로 사용할 수 있다.
// // console.log([...array]); //[1, 2 ,3 ];

// // //이터러블인 배열은 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.
// // const [a,...rest] = array;
// // console.log(a, rest); // 1 [2,3];

// // const obj={a:1, b:2};

// // //일반 객체는 Symbol.iterator 메서드를 구현하거나 상속받지 않는다.
// // //따라서 일반 객체는 이터러블 프로토콜을 준수한 이터러블이 아니다.
// // console.log(Symbol.iterator in obj); //false

// // //이터러블이 아닌 일반 객체는 for...of 문으로 순횔할 수 없다.
// // for(const item of obj){
// //     console.log(item); //TypeError: obj is not iterable
// // }

// // //이터러블이 아닌 일반 객체는 배열 디스트럭처링 할당의 대상으로 사용할 수 없다.
// // const [a,b] =obj; //TypeError: obj is not iterable

// // //배열은 이터러블 프로토콜을 준수한 이터러블이다.
// // const arr=[1,2,3];

// // //Symbol.iterator 메서드는 이터레이터를 반환한다.
// // const iterator = arr[Symbol.iterator]();

// // //next 메서드를 호출하면 이터러블을 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체를 반환한다.
// // //이터레이터 리절트 객체는 value와 done 프로퍼티를 갖는 객체다.
// // console.log(iterator.next()); //{ value: 1, done: false }
// // console.log(iterator.next()); //{ value: 2, done: false }
// // console.log(iterator.next()); //{ value: 3, done: false }
// // console.log(iterator.next()); //{ value: undefined, done: true }

// //var i=10;

// // //for 문에서 선언한 i는 전역변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
// // for(let i=0; i<5; i++){
// //     console.log(i); //0,1,2,3,4 출력
// // }

// // //의도치 않게 변수의 값이 변경되었다.
// // console.log(i);//5

// // let i=3;
// // {
// //     let i=4;
// //     console.log(i);
// //     for(let i=0; i<3; i++){
// //         console.log(i);
// //     };


// // }
// // console.log(i);

// // function example() {
// //     var x = 10;
// //     let y = 20;
  
// //     if (true) {
// //       var x = 30;
// //       let y = 40;
// //       console.log(x) 
// //       console.log(y) 
// //     }
  
// //     console.log(x); 
// //     console.log(y); 
// //   }
  
// //   example();

// // function foo(){};

// // //일반적인 함수로서 호출: [[Call]]이 호출된다
// // foo();

// // //생성자 함수로서 호출: [[Construct]]가 호출된다.
// // new foo();

// // new foo();

// // //일반 함수 정의: 함수 선언문, 함수 표현식
// // function foo(){}
// // const bar = function(){};
// // //프로퍼티 x의 값으로 할당된 것은 일반 함수로 전의된 함수다. 이는 메서드로 인정하지 않는다.
// // const baz={
// //   x:function(){}
// // };

// // //일반 함수로 전의된 함수만이 constructor다.
// // console.log(new foo()); //foo{}
// // console.log(new bar()); //bar{}

// // console.log(new baz.x()); //x{}

// // //화살표 함수 정의 
// // const arrow =()=>{};

// // //console.log(new arrow()); //TypeError: arrow is not a constructor

// // //메서드 정의: ES6의 메서드 축약 표현만 메서드로 인정한다.
// // const obj={
// //   x() {}
// // };

// // new obj.x(); //obj.x is not a constructor

// // function foo(){}

// // //일반 함수로서 호출
// // //[[Call]]이 호출된다. 모든 함수 객체는 [[Call]]이 구현되어 있다.
// // console.log(foo());

// // //생성자 함수로서 호출
// // //[[Construct]]가 호출된다. 이때 [[Construct]]를 갖지 않는다면 에러가 발생한다.
// // console.log(new foo());

// // //생성자 함수로서 정의하지 않은 일반 함수
// // function add(x,y){
// //   return x+y;
// // }

// // //생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
// // var plus = new add();

// // //함수가 객체를 반환하지 않았으므로 반환이 무시된다. 따라서 빈 객체가 생성되어 반환된다.
// // console.log(plus); //add{};

// // //객체를 반환하는 일반 함수
// // function createUser(name, role){
// //   return {name, role};
// // }

// // //일반 함수를 new 연산자와 함께 호출
// // var user= new createUser('andy', 'developer');
// // //함수가 생성한 객체를 반환한다.
// // console.log(user); //{ name: 'andy', role: 'developer' }

// // //생성자 함수
// // function Circle(radius){
// //   this.radius = radius;
// //   this.getDiameter=function(){
// //     return 2*this.radius
// //   };
// // }

// // //new 연산자 없이 생성자 함수 호출하면 일반 함수로서 호출된다.
// // const circle = Circle(5);
// // console.log(circle); //undefined

// // //일반 함수 내부의 this는 전역 객체 window를 가리킨다.
// // console.log(radius);
// // console.log(getDiameter()); //10

// // console.log(circle.getDiameter()); //TypeError: Cannot read properties of undefined (reading 'getDiameter')

// // 생성자 함수
// // function Circle(radius){
// //   이 함수가 new연산자와 함께 호출되지 않았다면 new.target은 undefined다.
// //   if(!new.target){
// //     return new Circle(radius);
// //   }
// //   this.radius =radius;
// //   this.getDiameter=function(){
// //     return 2* this.radius;
// //   };
// // }

// //   new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출된다.
// //   const circle= Circle(5);
// //   console.log(circle.getDiameter());//10
  

// // Scope safe Constuctor Pattern
// // function Circle(radius){
// //   생성자 함수가 new연산자와 함께 호출되면 함수의 선두에서 빈 객체를 생성하고
// //   this에 바인딩한다. 이때 this와 Circle은 프로토타입에 의해 연결된다.

// //   이 함수가 new 연산자와 함께 호출되지 않았다면 이 시점의 this는 전역 객체 window를 가리킨다.
// //   즉, this와 Circle은 프로토타입에 의해 연결되지 않는다.
// //   if(!(!this instanceof Circle)){
// //     return new Circle(radius);
// //   }

// //   this.radius= radius;
// //   this.getDiameter= function(){
// //     return 2 * this.radius;
// //   };
// // }

// // new 연산자 없이 생성자 함수를 호출하여도 생성자 함수로서 호출된다.
// // const circle = Circle(5);
// // console.log(circle.getDiameter()); //10

// // if(!(!true)){
// //   console.log(1);
// // }
// // console.log(2);

// // function hi(){
// // 	console.log(1);
// // 	return hi();
// // }
// // hi();

// // let obj= new Object();
// // console.log(obj); //{}
// // obj= Object();
// // console.log(obj); //{}

// // let func = new Function('x', 'return x');
// // console.log(func); //[Function: anonymous]

// // func= Function('x', 'return x');
// // console.log(func); //[Function: anonymous]

// // let str = String(123);
// // console.log(str); // 문자열 123
// // str = new String(123); 
// // console.log(str); //[String: '123']

// // let num = Number('123')
// // console.log(num); // 숫자 123
// // num = new Number('123');
// // console.log(num); //[Number: 123]

// // let boolean = Boolean(1);
// // console.log(boolean); //true
// // boolean = new Boolean(0);
// // console.log(boolean); //[Boolean: false]

// //1. 함수는 무명의 리터럴로 생성할 수 있다.
// //2. 함수는 변수에 저장할 수 있다.
// //런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
// // const increase = function(num){
// //   return ++num;
// // };

// // const decrease = function(num){
// //   return --num;
// // };

// // //2. 함수는 객체에 저장할 수 있다.
// // const predicates = {increase, decrease};

// // //3. 함수의 매개변수에 전달할 수 있다.
// // //4. 함수의 반환값으로 사용할 수 있다.
// // function makeCounter(predicate){
// //   let num=0;

// //   return function(){
// //     num=predicate(num);
// //     return num;
// //   };
// // }

// // //3. 함수는 매개변수에게 함수를 전달할 수 있다.
// // const increaser = makeCounter(predicates.increase);
// // console.log(increaser()); //1
// // console.log(increaser()); //2

// // //3. 함수는 매개변수에게 함수를 전달할 수 있다.
// // const decreaser = makeCounter(predicates.decrease);
// // console.log(decreaser()); //-1
// // console.log(decreaser()); //-2

// // function square(num){
// //   return num*num;
// // }
// // console.log(Object.getOwnPropertyDescriptors(square));
// // /*{
// //   length: { value: 1, writable: false, enumerable: false, configurable: true },
// //   name: {
// //     value: 'square',
// //     writable: false,
// //     enumerable: false,
// //     configurable: true
// //   },
// //   arguments: {
// //     value: null,
// //     writable: false,
// //     enumerable: false,
// //     configurable: false
// //   },
// //   caller: {
// //     value: null,
// //     writable: false,
// //     enumerable: false,
// //     configurable: false
// //   },
// //   prototype: { value: {}, writable: true, enumerable: false, configurable: false }
// // }*/

// // //__proto__는 square 함수의 프로퍼티가 아니다
// // console.log(Object.getOwnPropertyDescriptor(square,'__proto__')); //undefined

// // //__proto__는 Object.prototype 객체의 접근자 프로퍼티다.
// // //square 함수는 Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받는다.
// // console.log(Object.getOwnPropertyDescriptor(Object.prototype,'__proto__'));
// // /*{
// //   get: [Function: get __proto__],
// //   set: [Function: set __proto__],
// //   enumerable: false,
// //   configurable: true
// // }*/

// // function multiply(num1,num2){
// //   console.log(arguments);
// //   return num1*num2;
// // }

// // // console.log(multiply(3,4)); //[Arguments] { '0': 3, '1': 4 } , 12
// // // console.log(multiply()); //[Arguments] {}, NaN
// // // console.log(multiply(3)); //[Arguments] { '0': 3 }, NaN
// // // console.log(multiply(3,4,5)); //[Arguments] { '0': 3, '1': 4, '2': 5 } ,12

// // //console.log(undefined+undefined);

// // function multiply(){
// //   //이터레이터
// //   const iterator = arguments[Symbol.iterator]();
// //   console.log(iterator.next()); //{ value: 3, done: false }
// //   console.log(iterator.next()); //{ value: 4, done: false }
// //   console.log(iterator.next()); //{ value: 5, done: false }
// //   console.log(iterator.next()); //{ value: undefined, done: true }

// //   //return x*y;
// // }
// // console.log(multiply(3,4,5)); //12

// // function sum(){
// //   let res=0;
// //   for(let i=0;i<arguments.length; i++){
// //      res += arguments[i];
// //   }
// //   return res;
// // }
// // console.log(sum()); //0
// // console.log(sum(4,5)); //9
// // console.log(sum(4,5,6)); //15

// // function sum(){
// //   //arguments 객체를 배열로 변환
// //   const arr=Array.prototype.slice.call(arguments);
// //   return arr.reduce(function(pre, cur){
// //     return pre+cur;
// //   },0);
// // }

// // console.log(sum(1,2)); //3
// // console.log(sum(5,6,7)); //18

// // //ES6 Rest parameter
// // function sum(...args){
// //   return args.reduce((pre, cur)=>pre+cur,0);
// // }
// // console.log(sum(1,2)); //3
// // console.log(sum(12,3,34));//49

// // function foo(){}
// // console.log(foo.length); //0

// // function bar(x){
// //   return x;
// // }
// // console.log(bar.length); //1

// // function baz(x,y){
// //   return x * y;
// // }

// // console.log(baz.length); //2

// // //기명 함수 표현식
// // var namedFunc = function foo(){};
// // console.log(namedFunc.name); //foo

// // //익명 함수 표현식
// // var anonymousFunc = function() {};
// // // ES5: name 프로퍼티는 빈 문자열을 값으로 갖는다.
// // // ES6: name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다.
// // console.log(anonymousFunc.name);

// // //함수 선언문(Function declaration)
// // function bar(){}
// // console.log(bar.name); //bar

// // const obj ={a: 1};

// // //객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype이다.
// // console.log(obj.__proto__ ===Object.prototype); //true

// // //객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받는다.
// // //hasOwnProperty 메서드는 Object.prototype의 메서드다.
// // console.log(obj.hasOwnProperty('a')); //true
// // console.log(obj.hasOwnProperty('__proto__')); //false

// // //함수 객체는 prototype 프로퍼티를 소유한다.
// // let result=(function(){}).hasOwnProperty('prototype');
// // console.log(result); //true

// // result=({}).hasOwnProperty('prototype');
// // console.log(result); //false;

// // let func=function(){};
// // result=func.hasOwnProperty('prototype');
// // console.log(result); //true

// // let array= [];
// // result=array.hasOwnProperty('prototype');
// // console.log(result);//false

// // //이름과 속성을 갖는 객체
// // const person={
// //   name: 'andy',
// //   address: 'goyang'
// // };
// // console.log(person);

// // //객체 원 만들기
// // const circle ={
// //   radius: 5, //반지름

// //   //원의 지름
// //   getDiameter: function(){
// //     return 2* this.radius;
// //   },

// //   //원의 둘레
// //   getPerimeter(){
// //     return 2*Math.PI*this.radius;
// //   },

// //   //원의 넓이
// //   getArea(){
// //     return this.radius*this.radius*Math.PI;
// //   }
// // };
// // console.log(circle);
// // /*{
// //   radius: 5,
// //   getDiameter: [Function: getDiameter],
// //   getPerimeter: [Function: getPerimeter],
// //   getArea: [Function: getArea]
// // }*/

// // console.log(circle.getDiameter()); //10
// // console.log(circle.getPerimeter()); //31.41592653589793
// // console.log(circle.getArea()); //78.53981633974483

// // //생성자 함수
// // function Circle(radius){
// //   this.radius=radius;
// //   this.getArea=function(){
// //     return Math.PI*this.radius**2;
// //   };
// // }

// // //반지름이 1인 인스턴스 생성
// // const circle1 = new Circle(1);
// // //반지름이 2인 인스턴스 생성
// // const circle2 = new Circle(2);

// // //Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
// // //getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
// // //getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.
// // console.log(circle1.getArea===circle2.getArea); //false

// // console.log(circle1.getArea()); //3.141592653589793
// // console.log(circle2.getArea()); //12.566370614359172

// // //생성자 함수
// // function Circle(radius){
// //   this.radius=radius;
// // };

// // // Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를 
// // // 공유해서 사용할 수 있도록 프로토타입에 추가한다.
// // // 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
// // Circle.prototype.getArea=function(){
// //   return Math.PI*this.radius**2;
// // };

// // //인스턴스 생성
// // const circle1 = new Circle(1);
// // const circle2 = new Circle(2);

// // //Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
// // //프로토타입 Circle.prototype으로부터 getArea 메서드를 상속받는다.
// // //즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
// // console.log(circle1.getArea===circle2.getArea)//true 

// // console.log(circle1.getArea()); //3.141592653589793
// // console.log(circle2.getArea()); //12.566370614359172

// // const person ={
// //   name: 'andy'
// // };

// // console.log(person.hasOwnProperty('name'));

// // const obj ={};
// // const parent ={x: 1};

// // //getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 취득
// // obj.__proto__;

// // //setter 함수인 set __proto__가 호출되어 obj 객체의 프로토타입을 교체
// // obj.__proto__ = parent;
// // console.log(obj.x);

// // const person = {name: 'andy'};

// // //person 객체는 __proto__ 프로퍼티를 소유하지 않는다.
// // console.log(person.hasOwnProperty('__proto__')); //false

// // //__proto__프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티다.
// // console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// // /*{
// //   get: [Function: get __proto__],
// //   set: [Function: set __proto__],
// //   enumerable: false,
// //   configurable: true
// // }*/

// // //모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
// // console.log(arr.__proto__===Object.prototype);

// // const parent={};
// // const child={};

// // //child의 프로토타입을 parent로 설정
// // child.__proto__ =parent;
// // //parent의 프로토타입을 child로 설정
// // parent.__proto__=child; //TypeError: Cyclic __proto__ value

// // //obj는 프로토타입 체인의 종점이다. 따라서 Object.__proto__를 상속받을 수 없다.
// // const obj = Object.create(null);

// // //obj는 Object.__proto__를 상속받을 수 없다.
// // console.log(obj.__proto__); //undefined

// // //따라서 __proto__ 보다 Object.getPrototypeOf 메서드를 사용하는 편이 좋다
// // console.log(Object.getPrototypeOf(obj)); //null

// // const obj={};
// // const parent={x:1};

// // //obj 객체의 프로토타입을 취득
// // Object.getPrototypeOf(obj);
// // //obj 객체의 프로토타입을 교체
// // Object.setPrototypeOf(obj,parent);

// // console.log(obj.x); //1


// // 함수 객체는 prototype 프로퍼티를 소유한다.
// // console.log((function(){}).hasOwnProperty('prototype')); //true

// // 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
// // console.log(({}).hasOwnProperty('prototype')); //false

// //화살표 함수는 non-constructor다.
// // const Person= name=>{
// //   this.name=name;
// // };

// // //non-constructor는 prototype 프로퍼티를 소유하지 않는다.
// // console.log(Person.hasOwnProperty('prototype')); //false

// // //non-constructor는 프로토타입을 생성하지 않는다.
// // console.log(Person.prototype); //undefined

// // const Person2 =function(name){
// //   this.name=name;
// // }
// // console.log(Person2.hasOwnProperty('prototype')); //true
// // console.log(Person2.prototype);//{}

// // // ES6의 메서드 축약 표현으로 정의한 메서드는 non-constructor다.
// // const obj={
// //   foo(){}
// // };

// // //non-constructor는 prototype 프로퍼티를 소유하지 않는다.
// // console.log(obj.foo.hasOwnProperty('prototype')); //false

// // //non-constructor는 프로토타입을 생성하지 않는다.
// // console.log(obj.foo.prototype);//undefined

// // const obj2={
// //   foo: function(){ 
// //   }
// // };

// // console.log(obj2.foo.hasOwnProperty('prototype')); //ture
// // console.log(obj2.foo.prototype); //{}

// // //생성자 함수
// // function Person(name){
// //   this.name=name; 
// // }

// // const me = new Person('Lee');

// // //결국 Person.prototype과 me.__proto__는 결국 동일한 프로토타입을 가리킨다.
// // console.log(Person.prototype===me.__proto__); //true

// // //생성자 함수
// // function Person(name){
// //   this.name=name;
// // }

// // const me = new Person('andy');

// // //me 객체의 생성자 함수는 Person이다.
// // console.log(me.constructor===Person); //true

// // //obj 객체를 생성한 생성자 함수는 Object다.
// // const obj = new Object();
// // console.log(obj.constructor===Object)// true

// // //add 함수 객체를 생성한 생성자 함수는 Function이다 
// // const add= new Function('a','b','return a+b');
// // console.log(add.constructor===Function); //true

// // //생성자 함수
// // function Person(name){
// //   this.name= name;
// // }

// // //me 객체를 생성한 생성자 함수는 Person이다.
// // const me = new Person('han');
// // console.log(me.constructor===Person); //true

// // //객체 리터털
// // const obj={};

// // //함수 리터럴
// // const add= function(a,b){
// //   return a+b;
// // }

// // //배열 리터럴
// // const arr=[1,2,3];

// // //정규 표현식 리터럴
// // const regExp=/is/ig;

// // //obj객체는 Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성했다.
// // const obj={};

// // //하지만 obj 객체의 생성자 함수는 Object 생성자 함수다.
// // console.log(obj.constructor===Object); //true

// //1. Object 생성자 함수에 의한 객체 생성
// // 인수가 전달되지 않았을 때 추상 연산 OrdinaryObjectCreate를 호출하여 빈 객체를 생성한다.
// let obj = new Object();
// console.log(obj); //{}

// //2. new.target이 undefined나 Object가 아닌 경우
// //인스턴스 -> Foo.prototype -> Object.prototype 순으로 프로토타입 체인이 생성된다.
// class Foo extends Object{}
// console.log(new Foo()); //Foo{}

// //3. 인수가 전달된 경우에는 인수를 객체로 변환한다.
// obj = new Object(123);
// console.log(obj); //[Number: 123]

// //4. String 객체 생성
// obj = new Object('123');
// console.log(obj); //[String: '123']

// //함수 정의(constructor)가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.
// console.log(Person.prototype); //{}

// function Person(name){
//   this.name=name;
// }

// //화살표 함수는 non-constructor다.
// const Person=name=>{
//   this.name=name;
// };

// //non-construcotr는 프로토타입이 생성되지 않는다.
// console.log(Person.prototype);//undefined

// //전역 객체 window는 브라우저에 종속적이므로 아래 코드는 브라우저 환경에서 실행해야 한다.
// //빌트인 객체인 Object는 전역 객체 window의 프로퍼티다.
// console.log(global.Object===Object);

// const obj={x:1};

// //객체 리터럴에 의해 생성된 obj객체는 Object.prototype을 상속받는다.
// console.log(obj.constructor===Object); //true
// console.log(obj.hasOwnProperty('x')); //true

// const obj = new Object();
// obj.x=1;

// const obj = new Object();
// obj.x=1;

// //Object생성자 함수에 의해 생성된 obj 객체는 Object.prototype을 상속받는다.
// console.log(obj.constructor===Object); //true
// console.log(obj.hasOwnProperty('x')); //true

// function Person(name){
//   this.name=name;
// }

// const me = new Person('Han');

// function Person(name){
//   this.name=name;
// };
// const me = new Person

// function Person(name){
//   this.name=name;
// }

// Person.prototype.sayHello=function(){
//   console.log(`hi my name is ${this.name}`);
// };

// const me = new Person('andy');
// const you = new Person('han');

// me.sayHello(); //hi my name is andy
// you.sayHello(); //hi my name is han

// function Person(name){
//   this.name= name;
// }

// // //프로토타입 메서드
// Person.prototype.sayHello=function(){
//   console.log(`hello my name is ${this.name}`);
// }

// const me = new Person('andy');

// //hasOwnProperty는 Object.prototype의 메서드다.
// console.log(me.hasOwnProperty('name')); //true

// let result=Object.getPrototypeOf(me)===Person.prototype;//true
// console.log(result);//true

// result=Object.getPrototypeOf(Person.prototype)===Object.prototype;//true
// console.log(result);//true

// console.log(me.hasOwnProperty('name'));

// //hasOwnProperty는 Object.prototype의 메서드다.
// //me 객체는 프로토타입 체인을 따라 hasOwnProperty 메서드를 검색하여 사용한다.
// console.log(me.hasOwnProperty('name')); //true

// console.log(me.foo); //undefined

// me.hasOwnProperty('name');

// const Person=(function(){
//   //생성자 함수
//   function Person(name){
//     this.name=name;
//   }
  
//   //프로토타입 메서드
//   Person.prototype.sayHello = function(){
//     console.log(`Hi! My name is ${this.name}`);
//   };

//   //생성자 함수를 반환
//   return Person;
// }());

// const me = new Person('andy');

// //인스턴스 메서드
// me.sayHello=function(){
//   console.log(`hello i'm ${this.name}`);
// }

// //인스턴스 메서드가 호출된다. 프로토타입 메서드는 인스턴스 메서드에 의해 가려진다.
// me.sayHello(); //hello i'm andy

// //인스턴스 메서드를 삭제한다.
// delete me.sayHello;

// me.sayHello(); //Hi! My name is andy

// //프로토타입 체인을 통해 프로토타입 메서드가 삭제되지 않는다.
// delete me.sayHello;
// //프로토타입 메서드가 호출된다.
// me.sayHello();


// //프로토타입 메서드 삭제
// delete Person.prototype.sayHello;
// me.sayHello();//TypeError: me.sayHello is not a function

// //

// const Person = (function(){
//   function Person(name){
//     this.name=name;
//   }
  
//   //1. 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
//   Person.prototype={
//     sayHello(){
//       console.log(`hi my name is ${this.name}`);
//     }
//   }
//   return Person;
// }());
// const me = new Person('andy');

// //프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다.
// console.log(me.constructor===Person); //false;
// //프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티가 검색된다.
// console.log(me.constructor===Object); //true

// function Person(name){
//   this.name= name; 
// }

// const me= new Person('andy');

// instanceof du

// //생성자 함수
// function Person(name){
//   this.name=name;
// };

// const me = new Person('andy');

// //Person.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
// console.log(me instanceof Person); //true

// //Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
// console.log(me instanceof Object); //true

// //생성자 함수
// function Person(name){
//   this.name=name;
// }
// const me  = new Person('andy');

// //프로토타입으로 교체할 객체
// const parent={};

// //프로토타입의 교체
// Object.setPrototypeOf(me, parent);

// //person 생성자 함수와 parent 객체는 연결되어 있지 않다.
// console.log(Person.prototype===parent); //false;
// console.log(Person.construct===Person); //false;

// //Person.prototype이 me 객체의 프로토타입 체인 상에 존재하지 않기 때문에 false로 평가된다.
// console.log(me instanceof Person); //false;

// //Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
// console.log(me instanceof Object); //true

// function Person(name){
//   this.name=name;
// };

// const me = new Person('andy');

// //프로토타입으로 교체할 객체
// const parent = {};

// //프로토타입의 교체
// Object.setPrototypeOf(me,parent);

// //Person 생성자 함수와 parent 객체는 연결되어 있지 않다.
// console.log(Person.prototype===parent) //false
// console.log(parent.constructor===Person); //false

// //parent 객체를 Person 생성자 함수의 Prototype 프로퍼티에 바인딩한다.
// Person.prototype =parent;

// //Person.prototype이 me객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
// console.log(me instanceof Person); //true

// //Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
// console.log(me instanceof Object); //true

// //instanceof 연산자를 함수로 표현하면 다음과 같다.
// function isInstanceOf(instance, constructor){
//   //프로토타입 취득
//   const prototype = Object.getPrototypeOf(instance);

//   //재귀 탈출 조건
//   //prototype이 null이면 프로토타입 체인의 종점에 다다른 것이다.
//   if(prototype===null) return false;
  
//   //프로토타입이 생성자 함수의 prototype 프로퍼티에 바인딩
// }

// function isInstanceOf(instance, constructor){
//   //프로토타입 취득
//   const prototype = Object.getPrototypeOf(instance);

//   //재귀 탈출 조건
//   //prototype이 null이면 프로토타입 체인의 종점에 다다른 것이다.
//   if(prototype === null) return false;
  
//   //프로토타입 생성자 함수의 prototype 프로퍼티에 바인딩된 객체라면 true를 반환한다.
//   //그렇지 않으면 재귀 호출로 프로토타입 체인 상의 상위 프로토타입으로 이동하여 확인한다.
//   return prototype ===constructor.prototype||isInstanceOf(prototype, constructor);
// }

// console.log(isInstanceOf(me,Person)); //true,
// console.log(isInstanceOf(me, Object)); //true
// console.log(isInstanceOf(me,Array)); //false

// //프로토타입이 null인 객체를 생성한다. 생성된 객체는 프로토타입 체인의 종점에 위치한다.
// //obj->null
// let obj= Object.create(null);
// console.log(Object.getPrototypeOf(obj)===null); //true
// //Object.prototype을 상속받지 못한다.
// console.log(obj.toString()); //TypeError: obj.toString is not a function

// //obj -> Object.prototype -> null
// //obj = {}; 와 동일하다
// obj= Object.create(Object.prototype);
// console.log(Object.getPrototypeOf(obj)===Object.prototype); //true

// //obj->Object.prototype -> null
// //obj = {x:1 };와 동일하다
// obj=Object.create(Object.prototype,{
//   x: {value:1, writable: true, enumerable: true, configurable: true}
// });
// //위 코드는 아래와 동일하다
// //obj = Object.create(Object.prototype);
// //obj.x =1;
// console.log(obj.x); //1
// console.log(Object.getPrototypeOf(obj)===Object.prototype); //true

// const myProto = {x:10};
// //임의의 객체를 직접 상속받는다.
// //obj ->myProto->Object.prototype -> null
// obj = Object.create(myProto);
// console.log(obj.x); //10
// console.log(Object.getPrototypeOf(obj)===myProto); //true

// //생성자 함수
// function Person(name){
//   this.name=name;
// }
// //obj ->Person.prototype->Object.prototype->null
// //obj = newPerson('han')와 동일하다
// obj = Object.create(Person.prototype);
// obj.name = 'Han';
// console.log(obj.name); //Han
// console.log(Object.getPrototypeOf(obj)===Person.prototype); //true

// const obj ={a:1};

// console.log(obj.hasOwnProperty('a')); //true
// console.log(obj.propertyIsEnumerable('a')); //true

// 프로토타입이 null인 객체, 즉 프로토타입 체인의 종점에 위치하는 객체를 생성한다.
// const obj= Object.create(null);
// obj.a=1;

// console.log(Object.getPrototypeOf(obj)===null); //true

// obj는 Object.prototype의 빌트인 메서드를 사용할 수 없다.
// console.log(obj.hasOwnProperty('a')); //TypeError: obj.hasOwnProperty is not a function

// //프로토타입이 null인 객체를 생성한다.
// const obj = Object.create(null);
// obj.a =1;

// //Object.prototype의 빌트인 메서드는 객체로 직접 호출하지 않는다.
// console.log(Object.prototype.hasOwnProperty.call(obj,'a')); //true

// const myProto = {x:10};

// //객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속받을 수 있다.
// const obj={
//   y:20,
//   //객체를 직접 상속받는다.
//   //obj-> myProto -> Object.prototype -> null
//   __proto__: myProto
// };
// /* 위 코드는 아래와 동일하다.
// const obj = Object.create(myProto,{
//   y: {value:20, writable: true, enumerable: true, configurable: true}
// });
// */

// console.log(obj.x, obj.y); //10 20
// console.log(Object.getPrototypeOf(obj)===myProto); //true

// //생성자 함수
// function Person(name){
//   this.name=name;
// }

// //프로토타입 메서드
// Person.prototype.sayHello= function(){
//   console.log(`hi my name is${this.name}`);
// }

// //정적 프로퍼티
// Person.staticProp = 'staticProp';

// //정적 메서드
// Person.staticMethod= function(){
//   console.log('staticMethod');
// };

// const me = new Person('han');

// //생성자 함수에 추가한 정적 프로퍼티/메서드는 생성자 함수로 참조/호출한다.
// Person.staticMethod(); //staticMethod

// //정적 프로퍼티/메서드는 생성자 함수가 생성한 인스턴스로 참조/호출할 수 없다.
// //인스턴스로 참조/호출할 수 있는 프로퍼티/메서드는 프로퍼티 체인 상에 존재해야 한다.
// me.staticMethod(); //TypeError: me.staticMethod is not a function

// //Object.create는 정적 메서드다.
// const obj = Object.create({name: 'han'});

// //Object.prototype.hasOwnProperty는 프로토타입 메서드다.
// console.log(Object.prototype.hasOwnProperty('name'));

// function Foo(){}

// //프로토타입 메서드
// //this를 참조하지 않는 프로토타입 메서드는 정적 메서드로 변경하여도 동일한 효과를 얻을 수 있다.
// Foo.prototype.x = function(){
//   console.log('x');
// };

// const foo= new Foo();
// //프로토타입 메서드를 호출하려면 인스턴스를 생성해야 한다.
// foo.x(); //x

// //정적 메서드
// Foo.x = function(){
//   console.log('x');
// };

// //정적 메서드는 인스턴스를 생성하지 않아도 호출할 수 있다.
// Foo.x(); //x

//  const person={
//   name: 'han',
//   address: 'goyang',
// }

// console.log('name' in person); //true
// console.log('address' in person); //true
// console.log('gender' in person); //false

// const person={
//     name: 'andy'
// };

// console.log(Reflect.has(person, 'name')); //true
// console.log(Reflect.has(person, 'toString')); //true
// console.log(Reflect.has(person,'age')); //false

// const person={
//     name: 'andy',
//     address: 'seoul',
// };

// //for...in 문의 변수 prop에 person 객체의 프로퍼티 키가 할당된다.
// for(const key in person){
//     console.log(key+':'+person[key]);
// }

// const person={
//     name: 'andy',
//     address: 'goyang',
// };

// //in 연산자는 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인한다.
// console.log('toString' in person); //true

// //for...in 문도 객체가 상속받은 모든 프로토타입의 프로퍼티를 열거한다.
// //하지만 toString과 같은 Object.prototype의 프로퍼티가 열거되지 않는다.
// for(const key in person){
//     console.log(key+ ' :' +person[key]);
// }
// /*name :andy
// address :goyang*/

// const sym = Symbol();
// const obj={
//     a: 1,
//     [sym]: 10
// };

// for(const key in obj){
//     console.log(key); //a;
// }

// const person={
//     name: 'andy',
//     address: 'ilsan',
//     __proto__: {age:20}
// };

// for(const key in person){
//     //객체 자신의 프로퍼티인지 확인한다.
//     if(!person.hasOwnProperty(key))continue;
//     console.log(key+ ' : ' +person[key]);
// }

// const obj={
//     2:2,
//     3:3,
//     1:1,
//     b: 'b',
//     a: 'a',
// }
// for(const key in obj){
//     if(!obj.hasOwnProperty(key)) continue;
//     console.log(key+' : '+obj[key]); 
// }
// /*
// 1 : 1
// 2 : 2
// 3 : 3
// b : b
// a : a
// */

// const arr=[1,2,3];
// arr.x=10; //배열도 객체이므로 프로퍼티를 가질수 있다.

// for(const i in arr){
//     console.log(arr[i]) //1,2,3,10
// };

// //arr.length는 3이다.
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]); //1,2,3
// }

// //forEach 메서드는 요소가 아닌 프로퍼티는 제외한다.
// arr.forEach(v=>console.log("1:",v)); //1,2,3

// //for...of 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당한다.
// for(const value of arr){
//     console.log(value); //1,2,3
// }

// const person ={
//     name: 'han',
//     address: 'seoul',
//     __proto__ : {age :20}
// };

// console.log(Object.keys(person)); //[ 'name', 'address' ]
// console.log(Object.values(person)); //[ 'han', 'seoul' ]
// console.log(Object.entries(person)); //[ [ 'name', 'han' ], [ 'address', 'seoul' ] ]

// 'use strict'
// function foo(){
//     x=10;
// }
// foo();
//  //ReferenceError: x is not defined

// function foo(){
//     x=10;
//     'use-strict'
// }
// foo(); //에러를 발생시키지 않는다.


// //즉시 실행 함수의 선두에 strict-mode 적용
// (function(){
//      'use strict';

//     y=1;
//     console.log(y); //ReferenceError: y is not defined
// }());

// (function (){
//     //non-strict mode
//     var let=10; //에러가 발생하지 않는다.
//     function foo(){
//         'use strict'
        
//         let=20; //SyntaxError: Unexpected strict mode reserved word
//     }
//     foo();
// }());

// (function(){
//     'use strict'
//     x=10;
//     console.log(x); //ReferenceError: x is not defined
// }());

// (function (){
//     'use strict'; 
    
//     var x=1;
//     delete  x; //SyntaxError: Delete of an unqualified identifier in strict mode.
    
//     function foo(a){
//         delete a; //SyntaxError: Delete of an unqualified identifier in strict mode.
//     }
//     delete foo; //SyntaxError: Delete of an unqualified identifier in strict mode.
// }());

// (function(){
//     'use strict'

//     function foo(x,x){
//         return x+x; //SyntaxError: Duplicate parameter name not allowed in this context
//     }
//     console.log(foo(1,2,));
// }());

// (function (){
//     'use strict';

//     with({x: 1}){
//         console.log(x); //SyntaxError: Strict mode code may not include a with statement
//     }
// }());

// (function(){
//     'use strict'
//     function foo(){
//         console.log(this); //undefined
//     }
//     foo();
//     function Foo(){
//         console.log(this); //Foo {}
//     };
//     new Foo();
// }());

// (function(a){
//     //non-strict
//     a=2;
//     console.log(arguments); //[Arguments] { '0': 2 }
// }(3));

// (function (a){
//     'use strict'
//     a=2;
//     console.log(arguments); //[Arguments] { '0': 4 }
// }(4));

// //String 생성자 함수에 의한 String 객체 생성
// const strObj= new String('andy');
// console.log(strObj); //[String: 'andy']
// console.log(typeof strObj); //object

// //Number 생성자 함수에 의한 Number 객체 생성
// const numObj= new Number(123);
// console.log(numObj); //[Number: 123]
// console.log(typeof numObj); //object

// //Boolean 생성자 함수에 의한 Boolean 객체 생성
// const boolObj = new Boolean(true);
// console.log(boolObj); //[Boolean: true]
// console.log(typeof boolObj); //object

// //Function 생성자 함수에 의한 Function 객체 생성
// const funcObj = new Function('x' ,'y', 'return x+y' );
// console.log(funcObj); //[Function: anonymous]
// console.log(typeof funcObj); //function

// //Array 생성자 함수에 의한 Array 객체(배열) 생성
// const arr= new Array(1,2,3); //[ 1, 2, 3 ]
// console.log(arr);
// console.log(typeof arr); //object

// //RegExp 생성자 함수에 의한 RegExp 겍체(정규 표현식)생성
// const regExp = new RegExp(/ab+c/i); 
// console.log(regExp); ///ab+c/i
// console.log(typeof regExp); //object

// //Date 생성자 함수에 의한 Date 객체 생성
// const date = new Date();
// console.log(date); //2023-09-02T07:27:26.960Z
// console.log(typeof date); //object

// //String 생성자 함수에 의한 String 객체 생성
// const strObj= new String('han');

// //String 생성자 함수를 통해 생성한 strObj 객체의 프로토타입은 String.prototype이다.
// console.log(Object.getPrototypeOf(strObj)===String.prototype); //true

// //Number 생성자 함수애 의한 Number 객체 생성
// const numObj = new Number(1);
// console.log(numObj); //[Number: 1.5]

// //toFixed는 Number.prototype의 프로토타입 메서드다.
// //Number.prototype.toFixed는 소수점 자리를 반올림하여 문자열로 반환한다.
// console.log(numObj.toFixed()); //2

// //isInteger는 Number의 정적 메서드다.
// //Number.isInteger는 인수가 정수 (integer)인지 검사하여 그 결과를 Boolean으로 반환한다.
// console.log(Number.isInteger(0.5));

// const str= 'hello';
// console.log(str.length); //5; 
// console.log(str.toUpperCase()); //HELLO

// const str='hi';

// //원시 타입인 문자열이 래퍼 객체인 String 인스턴스로 반환된다.
// console.log(str.length); //2
// console.log(str.toUpperCase()); //HI

// //래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
// console.log(typeof str); //string

// //1. 식별자 str은 문자열을 값으로 가지고 있다.
// const str="andy";

// //2. 식별자 str은 암묵적으로 생성된 래퍼 객체를 가리킨다.
// //식별자 str값 'andy'는 래퍼객체의 [[StringData]] 내부 슬롯에 할당된다. 
// str.name="han";

// //3. 식별자 str은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
// //이때 2에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.

// //4. 식별자 str은 새롭게 암묵적으로 생성된 (2에서 생성된 래퍼 객체와는 다른)래퍼 객체를 가리킨다.
// //새롭게 생성된 래퍼 객체에는 name프로퍼티가 존재하지 않는다.
// console.log(str.name); //undefined; 

// //5. 식별자 str은 다시 원래의 문자열,즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
// //이때 4에서 생성된 래퍼 객체는 아무도 참조하지 않은 상태이므로 가비지 컬렉션의 대상이 된다.
// console.log(typeof str, str); //string andy

// const num=1.5;

// //원시 타입인 숫자가 래퍼 객체인 String 객체로 변환된다.
// console.log(num.toFixed());//2

// //래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
// console.log(typeof num, num); number 1.5

// //브라우저 환경
// globalThis ===this; //true
// globalThis ===window; //true
// globalThis === self; //true
// globalThis === frames; //true

// //Node.js 환경(12.0.0 이상)
// globalThis === this; //true
// globalThis === global; //true

// //문자열 'F'를 16진수로 해석하여 10진수로 변환하여 반환한다.
// window.parseInt('F', 16); //15
// //window.parseInt는 parseInt로 호출할 수 있다.
// parseInt('F', 16); //15
// window.parseInt===parseInt; //true

// //var키워드로 선언한 전역 변수
// var foo=1;
// console.log(window.foo)//1;

// //선언하지 않은 변수에 값을 암묵적 전역. bar는 전역 변수가 아니라 전역 객체의 프로퍼티다.
// bar=2;
// console.log(window.bar); //2

// //전역 함수
// function baz(){
//     return 3;
// };
// console.log(window.baz()); 3

// let foo=123;
// console.log(window.foo); //undefined

// //전역 프로퍼티는 window를 생략하고 참조할 수 있다.
// console.log(window.Infinity===Infinity); //true

// //양의 무한대
// console.log(3/0); //Infinity

// //음의 무한대
// console.log(-3/0); //-Infinity
// //Infinity 숫자값이다.
// console.log(typeof Infinity); //number

// console.log(window.NaN); //NaN

// console.log(Number('xyz')); //NaN
// console.log(1 * 'string'); //NaN
// console.log(typeof NaN); //number


// console.log(window.undefined); //undefined

// var foo;
// console.log(foo); //undefined
// console.log(typeof undefined); //undefined

// //표현식인 문
// const a=eval('1+2;'); 
// console.log(a); //3
// //표현식이 아닌 문
// const b=eval('var x=5;') 
// console.log(b); //undefined

// //eval 함수에 의해 런타임에 변수 선언문이 실행되어 x변수가 선언되었다.
// console.log(x); //5

// //객체 리터럴은 반드시 괄호로 둘러싼다.
// const o = eval('({a:1})');
// console.log(o); //{ a: 1 }

// //함수 리터럴은 반드시 괄호로 둘러싼다.
// const f= eval('(function(){return 1;})')
// console.log(f()); //1

// const g= eval('1+2; 3+4;');
// console.log(g); //7

// const x=1;

// function foo(){
//     //eval 함수는 런타임에 foo함수의 스코프를 동적으로 수정한다.
//     eval('var x=2; console.log(x)');
//     console.log(x); //2
// };

// foo();
// console.log(x);//1

// const y=1;

// function foo2(){
//     'use strict'

//     //strict mode에서 eval 함수는 기존의 스코프를 수정하지 않고 eval 함수 자신의 자체적인 스코프를 생성한다.
//     eval('var x=3; console.log(x);') //3
//     console.log(y); //1
// }
// foo2();
// console.log(y); //1

// const x=1;

// function foo(){
//     eval('var x=2; console.log(x);'); //2
//     //let, const, 키워드를 사용한 변수 선언문은 strict mode가 적용된다.
//     eval('const x=3; console.log(x)'); //3
//     console.log(x); //2
// }
// foo();
// console.log(x) //1

//isFinite

// //인수가 유한수이면 true를 반환한다.
// console.log(isFinite(0)); //true
// console.log(isFinite(2e64)); //true
// console.log(isFinite('10')); //true: '10'-> 10
// console.log(isFinite(null)); //true: null-> 0

// //인수가 무한수 또는 NaN으로 평가되는 값이라면 false를 반환한다.
// console.log(isFinite(Infinity)); //false
// console.log(isFinite(-Infinity)); //false

// //인수가 NaN으로 평가되는 값이라면 false를 반환한다
// console.log(isFinite(NaN)); //false
// console.log(isFinite('hello')); //false
// console.log(isFinite('2005/12/12')); //false

// //숫자
// console.log(isNaN(NaN));//true
// console.log(isNaN(10)); //false

// //문자열
// console.log(isNaN('blabla')); //true: 'blabla'-> nan
// console.log(isNaN('10')); //false: '10'->10
// console.log(isNaN('10.12')); //false: '10.12' -> 10.12
// console.log(isNaN('')); //false: '' -> 0
// console.log(isNaN(' ')); //false ' '-> 0

// //불리언
// console.log(isNaN(true)); //false: true->1
// console.log(isNaN(false)); //false: false->0
// console.log(isNaN(null)); //false: null->0

// //undefined
// console.log(isNaN(undefined)); //true: undefined->NaN

// //객체
// console.log(isNaN({})); //true: {} ->NaN

// //date
// console.log(isNaN(new Date())); //false: newDate() -> Number
// console.log(isNaN(toString())); //true: String ->NaN

// //문자열을 실수로 해석하여 반환한다.
// console.log(parseFloat('3.14')); //3.14
// console.log(parseFloat('10.00')); //10

// //공백으로 구분된 문자열은 첫 번째 문자열만 변환한다.
// console.log(parseFloat('34 45 66')); //34
// console.log(parseFloat('40 years')); //40

// //첫 번째 문자열을 숫자로 변환할 수 없다면 NaN으로 반환한다.
// console.log(parseFloat('He was 40')); //NaN

// //앞뒤 공백은 무시된다.
// console.log(parseFloat(' 60 ')); //60

// console.log(parseInt(10)); //10
// console.log(parseInt(10.123)); //10

// // '10'을 10진수로 해석하고 그 결과를 10진수 정수로 반환한다.
// console.log(parseInt('10')); //10
// // '10'을 2진수로 해석하고 그 결과를 10진수 정수로 반환한다.
// console.log(parseInt('10', 2)); //2
// // '10'을 8진수로 해석하고 그 결과를 10진수 정수로 반환한다.
// console.log(parseInt('10', 8)); //8
// // '10'을 16진수로 해석하고 그 결과를 10진수 정수로 반환한다.
// console.log(parseInt('10' ,16));  //16 

// const x=15;

// //10진수 15를 2진수로 변환하여 그 결과를 문자열로 반환한다.
// console.log(x.toString(2)); //'1111'
// //문자열 '1111'을 2진수로 해석하고 그 결과를 10진수 정수로 반환한다.
// console.log(parseInt(x.toString(2),2)); //15

// //10진수 15를 8진수로 변환하여 그 결과를 문자열로 반환한다.
// console.log(x.toString(8)); //'17'
// //문자열'17'을 8진수로 해석하고 그 결과를 10진수 정수로 반환한다.
// console.log(parseInt(x.toString(8),8)); //15

// //10진수 15를 16진수로 변환하여 그 결과를 문자열로 반환한다.
// console.log(x.toString(16)); //f
// //문자열 'f'를 16진수로 해석하고 그 결과를 16진수 정수로 변환한다 
// console.log(parseInt(x.toString(16),16)); //15

// //숫자값을 문자열로 반환한다.
// console.log(x.toString()); //'15'
// //문자열 '15'를 10진수로 해석하고 그 결과를 10진수 정수로 반환한다.
// console.log(parseInt(x.toString())); //15

// //16진수 리터럴 '0xf'를 16진수로 해석하고 10진수 정수로 그 결과를 반환한다.
// console.log(parseInt('0xf')); //15
// //위 코드와 같다
// console.log(parseInt('f',16)); //15 

// //2진수 리터럴(0b로 시작)은 제대로 해석하지 못한다. 0이후가 무시된다.
// console.log(parseInt('0b10')); //0
// //8진수 리터럴(ES6에서 도입, 0o로 시작)은 제대로 해석하지 못한다. 0 이후가 무시된다.
// console.log(parseInt('0o10')); //0

// //문자열 '10'을 2진수로 해석한다.
// console.log(parseInt('10', 2)); //2
// //문자열 '10'을 8진수로 해석한다.
// console.log(parseInt('10',8)); //8

// //'A'는 10진수로 해석할 수 없다.
// console.log(parseInt('A0')); //NaN
// //'2'는 2진수로 해석할 수 없다.
// console.log(parseInt('20',2)); //NaN

// //10진수로 해석할 수 없는 'A' 이후의 문자는 모두 무시된다.
// console.log(parseInt('1A0')); 1
// //2진수로 해석할 수 없는 '2' 이후의 문자는 모두 무시된다.
// console.log(parseInt('102',2)); //2
// //8진수로 해석할 수 없는 '8' 이후의 문자는 모두 무시된다.
// console.log(parseInt('58' ,8)); //5
// //16진수로 해석할 수 없는 'G' 이후의 문자는 모두 무시된다.
// console.log(parseInt('FG' ,16)); //15

// //공백으로 구분된 문다열은 첫 번째 문자열만 변환한다.
// console.log(parseInt('10 45 66')); //10
// console.log(parseInt('40 years')); //40
// //첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다.
// console.log(parseInt('he was 25')); //NaN
// //앞 뒤 공백은 무시된다.
// console.log(parseInt('   60'));  //60

// var x=10; //전역 변수

// function foo(){
//     //선언하지 않은 식별자에 값을 할당
//     y=20; //window.y=20;
// };
// foo();

// //선언하지 않은 식별자 y를 전역해서 참조할 수 있다.
// console.log(x+y); //30

// //전역 변수 x는 호이스팅이 발생한다.
// console.log(x) //undefined;
// //전역 변수가 아니라 단지 전역 객체의 프로퍼티인 y는 호이스팅이 발생하지 않는다.
// console.log(y); //ReferenceError: y is not defined

// var x=10;

// function foo(){
//     //선언하지 않은 식별자에 값을 할당
//     y=20; //window.y=20;
// }
// foo();

// //선언하지 않은 식별자 y를 전역에서 참조할 수 있다.
// console.log(x+y); //30

var x=10; //전역 변수

function foo(){
    //선언하지 않은 식별자에 값을 할당
    y=20; //window.y =20;
    console.log(x+y); //30
}
foo();

console.log(window.x); //10
console.log(window.y); //20

delete x; //전역 변수는 삭제되지 않는다.
delete y; //프로퍼티는 삭제된다.

console.log(window.x); //10
console.log(window.y); //undefined