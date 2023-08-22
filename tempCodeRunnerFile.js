
// //기존 정보를 복사해서 새로운 객체를 반환하는 함수(얕은 복사)
// var copyObject =function(target){
//     var result={};
//     for(var prop in target){
//         result[prop] = target[prop];
//     }
//     return result;
// };

// var tom= copyObject(user);
// tom.name='tom';
// tom.age=3;
// console.log(user); //false 

// //객체의 깊은 복사를 수행하는 범용 함수
// var deepCopyObject=function(target){
//     var result={};
//     if(typeof target ==='object'&&target!==null){
//         for(var prop in target){
//             result[prop] = deepCopyObject(target[prop]);
//         }
//     }else{
//         result=target;
//     }
//     return result;
// };
