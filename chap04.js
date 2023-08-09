var count=0;

var timer= setInterval(function(){
    console.log(count);
    count++;
    if(count>3)clearInterval(timer);
},2000)