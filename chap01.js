console.log(sum(3,4));


var sum= function(x,y)
{
    return x+y;
};

var a= sum(1,2);

var sum= function(x,y) {
    return x+'+' +y+'='(x+y);
};
var a =1;
var outer =function()
{
    var inner =function()
    {
        console.log(a);
        var a=3;
    };
    inner();
    console.log(a);
};
outer();
console.log(a); 

console.log(andy);
