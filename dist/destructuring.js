'use strict';

var user = {
    firstname: 'John',
    lastname: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
};

var first = user.firstname;
var last = user.lastname;
var _user$age = user.age;
var age = _user$age === undefined ? 25 : _user$age;


console.log(first, last, age);