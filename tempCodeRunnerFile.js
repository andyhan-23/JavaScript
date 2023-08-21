var addCoffee = function(prevName, name){
    setTimeout(function(){
        coffeeTester.next(prevName? prevName+','+name:name);
    },1000);
}; 
var coffeeGeneraotr= function* (){
    var espresso = yield addCoffee('', '에스프레소');
    console.log(espresso);
    var americano = yield addCoffee(espresso, '아메리카노');
    console.log(americano);
    var mocha = yield addCoffee(americano, '카페 모카');
    console.log(mocha)
    var latte = yield addCoffee(mocha, '카페 라떼');
    console.log(latte);
};
var coffeeTester = coffeeGeneraotr();
coffeeTester.next();