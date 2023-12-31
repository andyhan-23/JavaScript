var fruits=['apple', 'banana', 'peach'];
var $ul =document.createElement('ul');

var alertFruitBuilder = function(fruit){
    return function(){
        alert('your choice is '+fruit);
    };
};

fruits.forEach(function(fruit){
    var $li=document.createElement('li');
    $li.innerText=fruit;
    $li.addEventListener('click',alertFruitBuilder(fruit));
    $ul.appendChild($li);

});
document.body.appendChild($ul);
alertFruit(fruits[0]);

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

document.body.innerHTML ='<div>a</div><div>b</div><div>c</div>';
var nodeList = document.querySelectorAll('div');
var nodeArr = Array.prototype.slice.call(nodeList);
nodeArr.forEach(function(node){
    console.log(node);
})

var str='abc def';
Array.prototype.concat.call(str, 'string');

console.log(str);

var obj={
    0:'a',
    1:'b',
    length:2,
}

var result=Array.from(obj);
console.log(result);

var obj ={
    outer: function(){
        console.log(this);
        var innerFunc = function(){
            console.log(this);
        };
        innerFunc.call(this);
    }
};
obj.outer();

var obj={
    outer: function(){
        console.log(this);
        var innerFunc=function(){
            console.log(this);
        }.bind(this);
        innerFunc();
    }
};
obj.outer();

var obj ={
    logThis: function(){
        console.log(this);
    },
    logThisLater1: function(){
        setTimeout(this.logThis, 500);
    },
    logThisLater2: function(){
        setTimeout(this.logThis.bind(this),1000);
    }
};
obj.logThisLater1();
obj.logThisLater2();

var report ={
    sum: 0,
    count: 0,
    add: function(){
        var args= Array.prototype.slice.call(arguments);
        args.forEach(function(entry){
            this.sum+=entry;
            ++this.count;
            
        },this);
        
    },
    average:function(){
        return this.sum/this.count;
    }
};
report.add(60,85,95);

var newArr = [10,20,30].map(function(currentValue,index,array,thisArg){
    console.log(currentValue, index, array, thisArg);
    return currentValue +5;
});
console.log(newArr);

Array.prototype.map= function(callback, thisArg){
    var mappedArr =[];
    for(var i=0; i<this.length; i++){
        var mappedValue = callback.call(thisArg||window, this[i],i,this);
        mappedArr[i] = mappedValue;
    }
    return mappedValue;
};

function one(str){
    console.log(str);
};

function two(test){
    var value  = 'call back test';
    test(value);
}
console.log("Asda");
two(one);

function name(name){
    console.log('hello',name);
}


document.addEventListener('click', function(){
    confirm('andy');
})

var obj1 ={
    name: 'obj1',
    func: function(){
        var self=this;
        return function(){
            console.log(self);
        };
    }
};
var callback = obj1.func();
setTimeout(callback, 1000);

var obj2= {
    name: 'obj2',
    func: obj1.func,
};

var callback2=obj2.func();
setTimeout(callback2,1500);

var obj3 ={
    name:'obj3',
    func: obj2.func,
};
var callback3= obj1.func.call(obj3);
setTimeout(callback3,2000);

var obj1={
    name: 'obj1',
    func: function(){
        console.log(obj1.name);
    }
};
setTimeout(obj1.func,1000);

var obj1 ={
    name: 'obj1',
    func: function(){
        console.log(this.name);
    }
};
setTimeout(obj1.func.bind(obj1),1000);

var obj2={
    name: 'obj2',
}

var test = obj1.func.bind(obj2);
setTimeout(test,1000);

// //콜백지옥 예시
setTimeout(function(name){
    var coffeeList1=name;
    console.log(coffeeList1);

    setTimeout(function(name){
        coffeeList1+=', '+name;
        console.log(coffeeList1);

        setTimeout(function(name){
            coffeeList1+=','+name;
            console.log(coffeeList1);

            setTimeout(function(name){
                coffeeList1+=','+name;
                console.log(coffeeList1);
            },500,'카페라떼1');
        },500,'카페모카1');
    },500,'아메리카노1');
},500,'에스프레소1');


var coffeeList=' ';

var addEspresso = function(name){
    coffeeList= name;
    console.log(coffeeList);
    setTimeout(addAmericano,500,'아메리카노');
}

var addAmericano=function(name){
    coffeeList+=' '+name;
    console.log(coffeeList);
    setTimeout(addLatte,500,'카페라떼');
}

var addLatte=function(name){
    coffeeList+=' '+name;
    console.log(coffeeList);
    setTimeout(addMocha,500,'카페모카');
}

var addMocha=function(name){
    coffeeList+=' '+name;
    console.log(coffeeList);
    
}
setTimeout(addEspresso,500,'에스프레소');


setTimeout(function(number){
    var index=number;
    console.log(index);

    setTimeout(function(number){
        index+=number;
        console.log(index);
    },1000,'2');
},1000,'1')

var str=' '

var a=function(char){
    str=char;
    console.log(str);
    setTimeout(b,1000,'b');
}

var b= function(char){
    str+=char;
    console.log(str);
}

setTimeout(a,1000,'a'); 

setTimeout(function(number){
    var index= number;
    console.log(index);

    setTimeout(function(number){
        index+=number;
        console.log(index);
    },1000,'3');
},5000,'4');

var timerId= setTimeout(function tick(){
    console.log('째깍');
    timerId =setTimeout(tick,2000);
},2000);

//비동기 작업의 동기적 표현: promise
new Promise(function(resolve){
    setTimeout(function(){
        var name='에스프레소';
        console.log(name);
        resolve(name);
    },500);
}).then(function(prevName){
    return new Promise(function(resolve){
        setTimeout(function(){
            var name= prevName + ',아메리카노';
            console.log(name);
            resolve(name);
        },500);
    });
}).then(function(prevName){
        return new Promise(function(resolve){
            setTimeout(function(){
                var name= prevName+',카페 라떼';
                console.log(name);
                resolve(name);
            },500);
        });
    }).then(function(prevName){
            return new Promise(function(resolve){
                setTimeout(function(){
                    var name = prevName +',카페 모카';
                    console.log(name);
                    resolve(name);
                },500);
            });
        })
        
    
var addCoffee= function(name){
    return function(prevName){
        return new Promise(function(resolve){
            setTimeout(function(){
                var newName=prevName?(prevName+','+name):name; 
                console.log(newName);
                resolve(newName);
            },500);
        });
    };
};
addCoffee('에스프레소')()
    .then(addCoffee('아메리카노'))
    .then(addCoffee('카페 라떼'))
    .then(addCoffee('카페모카'))


setTimeout(function(name){
    console.log(name);
    setTimeout(function(name){
        console.log(name);
    },1000,'b');
},1000,'a');

setTimeout(function(name){
    console.log(name);
    setTimeout(function(name){
        console.log(name);
    },1000,'2');
},1000,'1');

/*
woody 멘토님, 질문이 하나 더 있어서 이렇게 밑에 남김니다. 콜백함수를 공부하는 가운데 중첩 setTimeout함수를 
공부하다 의문이 생겼습니다. 위에 코드를 작성하고 머릿속으로 실행앴을때는 1초 후에 a가 나오가 1초후에 b가 나오고
다시 1초 후에 1이 나오고 마지막으로 1초 후에 2가 나올거라 생각했습니다. 허나 출력 결과는 1초 후에 a와1이 동시에 
나오고 1초 후에 b와2가 동시에 나왔습니다. 우선 제가 생각한 것은 task queue에 1초 후에 a가 출력되는 익명함수랑 1이 출력되는 익명함수 2개가 들어가고
그 즉시 콜스택에 쌓여서 출력하는 가운데 두 개가 1초 후에 출력되는 거라 화면에 보여지는 것에는 2개가 동시에 나온다 라고 생각하였는데.. 혹시 제 생각이 맞을까요?
 */ 

콜백 함수 내부에서 외부 데이터를 사용하고자 할때
var fruits=['apple','banana','kiwi'];
var $ul =document.createElement('ul');

fruits.forEach(function(fruit){
    var $li=document.createElement('li');
    $li.innerText=fruit;
    $li.addEventListener('click', function(){
        alert('your choic is'+fruit);
    });
    $ul.appendChild($li);
});
document.body.appendChild($ul);

var alertFruit = function(fruit){
    alert('your choice is' + fruit);
}; 

var alertFruitBuilder = function(fruit){
    return function(){
        alert('your choice is' + fruit);
        console.log('your choice is' + fruit);
    };
};


fruits.forEach(function(fruit){
    var $li=document.createElement('li');
    $li.innerText=fruit;
    $li.addEventListener('click', alertFruitBuilder(fruit));
    $ul.appendChild($li);
});
document.body.appendChild($ul);

var test=alertFruitBuilder(fruits[0]);
console.log(test);


const a=3;
a=4;
console.log(a);

var user ={
    name:'andy',
    gender: 'male'
};

var copyObject= function(target){
    var result={};
    for(var prop in target){
        result[prop]=target[prop];
    }
    return result;
};

var user2=copyObject(user);
user2.name='han';
user2.gender='female';

if(user!==user2){
    console.log('유저 정보가 변경되었습니다.');
}

console.log(user.name, user2.name);
console.log(user.gender, user2.gender);

var obj={
    b:function test(){
        console.log(this);
        var inner = function(){
            console.log(this);
        }
        inner();

        var obj2 ={
            innerMehod: inner
        };
        obj2.innerMehod();
    }
}
obj.b();

var obj ={
    logThis: function(){
        console.log (this);
    },
    logThisLater1: function(){
        setTimeout(this.logThis,500);
    },
    logThisLater2:function(){
        setTimeout(this.logThis.bind(this),1000);
    }
};
obj.logThisLater1();
obj.logThisLater2();


var report ={
    sum:0,
    count: 0,
    add: function(){
        var args =Array.prototype.slice.call(arguments);
        args.forEach(function(entry){
            this.sum+=entry;
            ++this.count;
           
        },this);
        
    },
    average: function(){
        return this.sum /this.count;
    }
};

report.add(60,85,95);
console.log(report.sum, report.count, report.average());

// function isBigEnough(value){
//     console.log(this);
//     return value >= 10;
// }
// var filtered =[12,5,8,130,44].filter(isBigEnough,this);
// console.log(filtered)

var obj1  ={
    name: 'obj1',
    func: function(){
        var self=this;
        return function(){
            console.log(self.name);
        };
    }
};
var callback = obj1.func();
setTimeout(callback, 1000);

var obj2={
    name: 'obj2',
    func: obj1.func,
};

var callback2 =obj1.func.call(obj2);
setTimeout(callback2,1500);

var obj3={
    name: 'obj3',
};

var callback3 = obj1.func.call(obj3);
setTimeout(callback3,2000);

console.log(a);
var a=20;


console.log(a);
let a=20; 


var a;
console.log(a);
a=20;

let obj={
    a:123
};

//객체 프로퍼티만 복사하는 법
let shallowCopyObj=obj;
copyObj.a=1;

객체 자체를 복사하는 법
let deepCopyObj= obj;

deepCopyObj={
    a:123
};
console.log(deepCopyObj.a);

var arr=[];
arr.length=1;
console.log(arr);

arr.map(function(arr){
    console.log(arr);
})

객체 프로퍼티만 복사하는 방법
let obj={
    a:123
};

let shallowCopyObj=obj;

shallowCopyObj.a=1;

console.log(obj===shallowCopyObj);

객체 자체를 복사하는 방법 

let obj={
    a:123
};

let deepCopyObj=obj;

deepCopyObj={
    a:1
};

var a=0.1;
var b=0.2;
var sum= a+b;
console.log(sum*1000);
console.log(sum*1000);

var a=100000000000000000000000000000;
console.log(a);

var a=3n;
console.log(typeof a);


var sym1= Symbol();
var sym2= Symbol('andy');
var sym3= Symbol('han');

var a = new String();
console.log(typeof a);

console.log(sym1);
console.log(sym2);
console.log(sym3);

이름에 대한 불변함
/* 
1. 값의 이름
2. 값 자체
*/

var debounce = function(eventName, func, wait){
    var timerId=null;
    return function(event){
        var self = this;
        console.log(eventName, 'event 발생');
        clearTimeout(timeoutId);
        timeoutId= setTimeout(func.bind(self, event), wait);
    };
};

var moveHandler = function(e){
    console.log('move event 처리');
};

var wheelHandler = function(e){
    console.log('wheel event 처리')
}

document.body.addEventListener('mouseover', debounce('move', moveHandler,
500));
document.body.addEventListener('mousewheel', debounce('wheel', wheelHandler,
700)); 


var curry3 =function(func){
    return function(a){
        return function(b){
            return func(a, b);
        };
    };
};

var getMaxWith10 = curry3(Math.max)(10);
console.log(getMaxWith10(8));
console.log(getMaxWith10(25));


var curry5 = function(func){
    return function(a){
        return function(b){
            return function(c){
                return function(d){
                    return function(e){
                        return func(a,b,c,d,e);
                    };
                };
            };
        };
    };
};
var getMax=curry5(Math.max);
console.log(getMax(1)(2)(3)(4)(5));

var curry5 = function(func){
    return function(a){
        return function(b){
            return func(a,b);
        };
    };
};

//var curry5 = func=>a=>b=>func(a,b);

var test =curry5(console.log);
console.log(test(1)(2));

document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector('#a').addEventListener('click', function(value){
    console.log(this, console.log(value)); //자신의 this를 상속함
})
/* addEventListner는 지정한 HTML 엘리먼트에 'click' 이벤트가 발생할 때마다 그 이벤트 정보를 콜백 함수의
첫 번째 인자로 삼아 함수를 실행하는 명령입니다. 버튼을 클릭하면 앞서 지정한 엘리먼트와 클릭 이벤트에 관한 정보가 담긴 객체가 출력됩니다.
*/

document.body.innerHTML='<div>a</div><div>b</div><div>c</div>';
var nodeList= document.querySelectorAll('div');
var arr= Array.prototype.slice.call(nodeList);
arr.forEach(function(number){
    console.log(number); //순차적으로 <div>태그 안에 a,b,c 출력
}) 

(2)eventListener
(function(){
    var count=0;
    var button = document.createElement('button');
    button.innerText ='click';
    button.addEventListener('click',function(){
        console.log(++count, 'times clicked');
    });
    document.body.appendChild(button);
})();

//(3)eventListener에 의한 클로저의 메모리 해제
(function(){
    var count=0;
    var button= document.createElement('button');
    button.innerText='click';
    var clickHandler = function(){
        console.log(++count, 'time clicked');
        if(count>=10){
            button.removeEventListener('click', clickHandler);
            clickHandler=null; //clickHandler 식별자의 함수 참조를 끊음
        }
    };
    button.addEventListener('click', clickHandler);
    document.body.appendChild(button);
})();

var fruits =['apple', 'banana', 'peach'];
var $ul= document.createElement('ul');

//첫 번째
fruits.forEach(function(fruit){
    var $li=document.createElement('li');
    $li.innerText=fruit;
    $li.addEventListener('click', function(){
        alert('your choic is ' +fruit);
    });
    $ul.appendChild($li);
});
document.body.appendChild($ul);

//두 번째
var alertFruit = function(fruit){
    alert('your choic is '+ fruit);
};
fruits.forEach(function(fruit){
    var $li=document.createElement('li');
    $li.innerText = fruit;
    $li.addEventListener('click', alertFruit.bind(null, fruit));
    $ul.appendChild($li);
});
document.body.appendChild($ul);
alertFruit(fruits[1]);

//세 번째
var alertFruitBuilder =function(fruit){
    return function(){
        alert('your choice is' + fruit);
    };
};
fruits.forEach(function(fruit){
    var $li = document.createElement('li');
    $li.innerText=fruit;
    $li.addEventListener('click', alertFruitBuilder(fruit));
    $ul.appendChild($li);
});
document.body.appendChild($ul);
alertFruit(fruits[0]);


Object.defineProperty(window,'_',{
    value: 'EMPTY_SPACE',
    writable: false,
    configurable: false,
    enumerable: false
});

var partial2 = function(){
    var originalPartialArgs = arguments;
    var func = originalPartialArgs[0];
    if(typeof func !== 'function'){
        throw new Error('첫 번째 인자가 함수가 아닙니다.');
    }
return function(){
    var partialArgs = Array.prototype.slice.call(originalPartialArgs,1);
    var restArgs = Array.prototype.slice.call(arguments);
    for(var i=0; i<partialArgs.length; i++){
        if(partialArgs[i] ===_){
            partialArgs[i]=restArgs.shift();
        }
    }
    return func.apply(this, partialArgs.concat(restArgs));
};
};

var add = function(){
    var result=0;
    for(var i=0; i<arguments.length; i++){
        result += arguments[i];
    }
    return result;
};
var addPartial = partial2(add,1,2,_,4,5,_,_,8,9);
console.log(addPartial(3,6,7,10));

var dog= {
    name: '강아지',
    greet: partial2(function(prefix,suffix){
        return prefix +this.name +suffix;
    }, '왈왈')
};
console.log(dog.greet('배고파요!'));

var debounce = function(eventName, func, wait){
    var timeoutId =null;
    return function(event){
        var self = this;
        console.log(eventName, 'event 발생');
        clearTimeout(timeoutId);
        timeoutId =setTimeout(func.bind(self, event),wait);
    };
};

var moveHandler = function(e){
    console.log("move event 처리");
};
var wheelHandler=function(e){
    console.log("wheel event 처리");
};
document.body.addEventListener('mousemove', debounce('move', moveHandler, 500));
document.body.addEventListener('mousewheel', debounce('wheel',wheelHandler,700));

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  function saveInput() {
    console.log('Saving data');
  }
  const processChange = debounce(() => saveInput());
  window.addEventListener('scroll', processChange);