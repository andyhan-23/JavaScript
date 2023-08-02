var user=
{
    name: 'andy',
    gender: 'male'
};

var changeName= function(user, newName)
{
    var newUser = user;
    newUser.name= newName;
    return newUser;
};

var user2= changeName(user, 'han');

if(user!==user2)
{
    console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name,user2.name);
console.log(user===user2);

var user=
{
    name: 'andy',
    gender: 'male'
};

// var changeName = function(user, newName)
// {
//     return{
//         name: newName,
//         gender: user.gender
//     };
// };


var copyObject = function(target)
{
    var result ={};
    for(var prop in target)
    {
        result[prop] = target[prop];
    }
    return result;
}

var user2 = copyObject(user);
user2.name = 'kim';

if(user2!==user)
{ 
    console.log('유저 정보가 변경되어습니다.!');
}

if(user !== user2)
{
    console.log(user.name, user2.name);
    console.log(user===user2);
}

var user=
{
    name: 'andy',
    extra:{
        gender: 'male',
        age: '25', 
    }
};

var user2= copyObject(user);
user2.extra = copyObject(user.extra);

user2.name='han';
console.log(user.name===user2.name);

user.extra.age = '23';
console.log(user.extra.age===user2.extra.age);


