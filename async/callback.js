// var fruits=['apple', 'banana', 'peach'];
// var $ul =document.createElement('ul');

// var alertFruitBuilder = function(fruit){
//     return function(){
//         alert('your choice is '+fruit);
//     };
// };

// fruits.forEach(function(fruit){
//     var $li=document.createElement('li');
//     $li.innerText=fruit;
//     $li.addEventListener('click',alertFruitBuilder(fruit));
//     $ul.appendChild($li);

// });
// document.body.appendChild($ul);
// alertFruit(fruits[0]);

setTimeout(function(){
    console.log(this);
},300);

[1,2,3,4,5].forEach(function(x){
    console.log(this, x);
});

document.body.innerHTML +='<button id="a">클릭</button>';
document.body.querySelector('#a').addEventListener('click',function(e){
    console.log(this,e);
});xw