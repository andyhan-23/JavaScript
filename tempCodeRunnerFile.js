 함수 foo의 this는 즉시 실행 함수의 this를 가리킨다.
// (function(){
//     const foo=()=>{
//     console.log(this); //{ a: 'a' }
//     };
//     foo();
// }).call({a:'a'},1);
